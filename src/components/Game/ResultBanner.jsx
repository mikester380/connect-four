import s from './ResultBanner.module.scss'
import SleekButton from './SleekButton'

export default function ResultBanner({ winner, newGame }) {
  const message = winner ? 'wins' : 'tie'

  return (
    <div className={s.banner}>
      {winner && <p className={s.player}>{winner}</p>}

      <p className={s.message}>{message}</p>

      <SleekButton onClick={newGame}>
        play again
      </SleekButton>
    </div>
  )
}
