import React from 'react'
import { useAppStore } from '@/providers/app'
import useBackground from '@/hooks/useBackground'
import {
  getAlternate,
  getPlayerLabel,
  getTurnLabel,
} from '@/lib/utils'
import { COLORS } from '@/lib/constants'
import { LinkedList } from '@/lib/structures'

import SleekButton from './SleekButton'
import ScoreCard from './ScoreCard'
import ResultBanner from './ResultBanner'
import Timer from './Timer'
import Board from './Board'
import InGameMenu from './InGameMenu'
import Logo from '@/components/svgs/Logo'
import PlayerOne from '@/components/svgs/PlayerOne'
import PlayerTwo from '@/components/svgs/PlayerTwo'

import s from './Game.module.scss'

const winTracks = new LinkedList()
const columns = []

{
  const diagonals = []
  const rows = []

  for (let colIndex = 0; colIndex < 7; colIndex++) {
    const column = new LinkedList()

    columns.push(column)
    winTracks.put(column)

    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      // add a cell to the column
      const cell = column.put({
        is: undefined,
        winCell: false,
      })

      // creating rows
      if (!rows[rowIndex]) {
        const row = new LinkedList()
        row.put(cell.data)

        rows.push(row)
        winTracks.put(row)
      } else {
        const row = rows[rowIndex]
        row.put(cell.data)
      }

      // we do this check up here so we avoid adding a cell to a diagonal twice
      diagonals.forEach((diagonal) => {
        if (diagonal.isMatch(rowIndex, colIndex)) {
          diagonal.put(cell.data)
        }
      })

      // creating diagonals
      const direction1 =
        (rowIndex >= 3 && colIndex === 0) ||
        (rowIndex === 5 && colIndex <= 3)
      const direction2 =
        (rowIndex <= 2 && colIndex === 0) ||
        (rowIndex === 0 && colIndex <= 3)

      if (direction1 || direction2) {
        const diagonal = new LinkedList()
        diagonal.put(cell.data)

        diagonals.push(diagonal)
        winTracks.put(diagonal)

        if (direction1) {
          diagonal.isMatch = (a, b) =>
            a + b === rowIndex + colIndex
        }

        if (direction2) {
          diagonal.isMatch = (a, b) =>
            a - b === rowIndex - colIndex
        }
      }
    }
  }
}

export default function Game() {
  useBackground(COLORS.electric_violet)

  const [board, setBoard] = React.useState(columns)
  const [gameOver, setGameOver] = React.useState(false)
  const [winner, setWinner] = React.useState('')
  const [menuOpened, setMenuOpened] = React.useState(false)
  const [boardDisabled, setBoardDisabled] =
    React.useState(false)

  const starter = React.useRef('red')
  const placer = React.useRef(starter.current)

  const [scores, setScores] = React.useState({
    yellow: 0,
    red: 0,
  })

  const { GameMode } = useAppStore()

  function newGame() {
    board.forEach((col) => {
      let cell = col.head

      while (cell) {
        cell.data.is = undefined
        cell.data.winCell = false
        cell = cell.next
      }
    })

    starter.current = getAlternate(starter.current)
    placer.current = starter.current

    setGameOver(false)
    setBoardDisabled(false)
    setBoard([...board])
  }

  function restartGame() {
    setScores({
      yellow: 0,
      red: 0,
    })

    newGame()
  }

  const onTimeUp = React.useCallback(() => {
    const opponent = getAlternate(placer.current)
    scores[opponent]++
    placer.current = opponent

    setScores({ ...scores })
  }, [scores])

  return (
    <section className={s.screen}>
      <div className={s.wrapper}>
        <div className={s.shelf}>
          <SleekButton
            className={s.shelf_button}
            onClick={() => {
              setMenuOpened(true)
            }}
          >
            menu
          </SleekButton>
          <Logo className={s.logo} />
          <SleekButton
            className={s.shelf_button}
            onClick={restartGame}
          >
            restart
          </SleekButton>
        </div>
        <div className={s.scores}>
          <ScoreCard
            owner={getPlayerLabel(GameMode, 'red')}
            score={scores.red}
            Icon={PlayerOne}
          />
          <ScoreCard
            owner={getPlayerLabel(GameMode, 'yellow')}
            score={scores.yellow}
            Icon={PlayerTwo}
          />
        </div>
        <Board
          placer={placer}
          board={board}
          scores={scores}
          mode={GameMode}
          winTracks={winTracks}
          boardDisabled={boardDisabled}
          setBoard={setBoard}
          setGameOver={setGameOver}
          setScores={setScores}
          setWinner={setWinner}
          setBoardDisabled={setBoardDisabled}
        />

        {!gameOver && (
          <Timer
            key={placer.current}
            placer={placer.current}
            onTimeUp={onTimeUp}
            playingNext={getTurnLabel(
              GameMode,
              placer.current
            )}
            paused={menuOpened}
          />
        )}

        {gameOver && (
          <ResultBanner
            winner={getPlayerLabel(GameMode, winner)}
            newGame={newGame}
          />
        )}

        {menuOpened && (
          <InGameMenu
            onResume={() => setMenuOpened(false)}
            onRestart={() => {
              restartGame()
              setMenuOpened(false)
            }}
          />
        )}
      </div>
    </section>
  )
}
