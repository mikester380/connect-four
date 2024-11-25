import React from 'react'
import { getAlternate } from '@/lib/utils'
import {
  MODES,
  CPU_COUNTER,
  CPU_THOUGHT_TIMER,
} from '@/lib/constants'
import clsx from 'clsx'
import s from './Board.module.scss'

import {
  BoardLayerWhiteSM,
  BoardLayerWhiteLG,
} from '@/components/svgs/BoardLayerWhite'
import {
  BoardLayerBlackSM,
  BoardLayerBlackLG,
} from '@/components/svgs/BoardLayerBlack'
import { Counter } from '@/components/svgs/Counter'

export default function Board({
  mode,
  board,
  setBoard,
  placer,
  scores,
  boardDisabled,
  setScores,
  winTracks,
  setGameOver,
  setWinner,
  setBoardDisabled,
}) {
  function cpuIsPlaying() {
    return (
      mode === MODES.withCPU &&
      placer.current === CPU_COUNTER
    )
  }

  function place(colIndex) {
    const col = board[colIndex]
    let cell = col.head
    let emptyCell = null

    while (cell) {
      if (!cell.data.is) {
        emptyCell = cell
      }

      cell = cell.next
    }

    if (!emptyCell) return

    // fill the cell
    emptyCell.data.is = placer.current

    // change turn
    placer.current = getAlternate(placer.current)

    setBoard([...board])
  }

  function getWinInfo() {
    let track = winTracks.head
    let info = null

    trackLoop: while (track) {
      let cell = track.data.head
      let testing
      let matches = []

      while (cell) {
        let fill = cell.data.is

        if (!fill) {
          matches = []
          testing = undefined

          cell = cell.next
          continue
        }

        switch (testing) {
          case undefined:
            testing = fill
            matches.push(cell.data)
            break

          case fill:
            matches.push(cell.data)

            if (matches.length === 4) {
              info = {
                fill,
                cells: matches,
              }

              break trackLoop
            }

            break

          default:
            testing = fill
            matches = [cell.data]
        }

        cell = cell.next
      }

      track = track.next
    }

    return info
  }

  function checkAllFilled() {
    let track = winTracks.head
    let allFilled = true

    checker: while (track) {
      let cell = track.data.head

      while (cell) {
        if (!cell.data.is) {
          allFilled = false
          break checker
        }
        cell = cell.next
      }
      track = track.next
    }

    return allFilled
  }

  function registerWin(winInfo) {
    winInfo.cells.forEach((cell) => {
      cell.winCell = true
    })

    // score winner.
    scores[winInfo.fill]++

    setScores({ ...scores })
    setGameOver(true)
    setBoardDisabled(true)
    setWinner(winInfo.fill)
  }

  function makeMove(colIndex) {
    // tells us if game has ended after each move
    let terminalPoint = false

    place(colIndex)

    const winInfo = getWinInfo()

    if (winInfo) {
      registerWin(winInfo)
      return (terminalPoint = true)
    }

    if (checkAllFilled()) {
      setGameOver(true)
      setBoardDisabled(true)
      return (terminalPoint = true)
    }

    return terminalPoint
  }

  function onPlayerMove(colIndex) {
    const gameEnded = makeMove(colIndex)

    // if (!gameEnded && cpuIsPlaying()) {
    //   setBoardDisabled(true)

    //   const thinking = setTimeout(
    //     () => {
    //       // const move = findOptimalMoveForCpu()
    //       // makeMove(move)
    //       makeMove(3)

    //       setBoardDisabled(false)
    //       clearTimeout(thinking)
    //     },
    //     // to simulate thought 😅
    //     CPU_THOUGHT_TIMER * 1000
    //   )
    // }
  }

  // function findOptimalMoveForCpu() {}

  // function minimax(isMaximazing) {}

  return (
    <div className={s.board}>
      <div className={s.cells}>
        {board.map((col, index) => {
          const cells = []
          let cell = col.head
          let cellIndex = 0

          while (cell) {
            /** we're storing the cell's object reference here for closure.
             *  if we access the "cell" variable directly in certain scopes,
             *  we might get an unexpected value since we're reinitializing it on each loop.
             *  we do this for code that won't access the cell object immediately.
             *  for example, react element's ref callback function **/
            let current = cell

            cells.push(
              <div
                className={clsx(
                  s.cell,
                  cell.data.winCell && s.win_cell
                )}
                key={cellIndex++}
                ref={(node) => (current.data.node = node)}
              >
                {cell.data.is && (
                  <Counter
                    className={s.counter}
                    color={cell.data.is}
                  />
                )}
              </div>
            )
            cell = cell.next
          }

          return (
            <div
              onClick={() => {
                if (!boardDisabled) {
                  onPlayerMove(index)
                }
              }}
              className={s.col}
              key={index}
            >
              {cells}
            </div>
          )
        })}
      </div>

      <BoardLayerBlackSM
        className={clsx(s.layer, s.layer_w, s.layer_sm)}
      />
      <BoardLayerWhiteSM
        className={clsx(s.layer, s.layer_b, s.layer_sm)}
      />
      <BoardLayerBlackLG
        className={clsx(s.layer, s.layer_w, s.layer_lg)}
      />
      <BoardLayerWhiteLG
        className={clsx(s.layer, s.layer_b, s.layer_lg)}
      />
    </div>
  )
}
