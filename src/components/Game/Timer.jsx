import React from 'react'
import { TURN_TIMEOUT } from '@/lib/constants'
import TurnBG from '@/components/svgs/TurnBG'
import s from './Timer.module.scss'

export default function Timer({
  playingNext,
  onTimeUp,
  placer,
  paused,
}) {
  const [timeout, setTimeout] = React.useState(TURN_TIMEOUT)

  React.useEffect(() => {
    let currentTimeout = timeout

    if (!paused) {
      const timer = setInterval(() => {
        if (currentTimeout === 0) {
          onTimeUp()

          currentTimeout = TURN_TIMEOUT
          setTimeout(currentTimeout)

          return null
        }

        setTimeout(--currentTimeout)
      }, 1000)

      // cleanup func to clear timer
      return () => clearInterval(timer)
    }
  }, [onTimeUp, paused])

  return (
    <div className={s.timer}>
      <TurnBG
        className={s.bg}
        bg={placer}
      />
      <div className={s.info}>
        <p className={s.turn}>{playingNext}</p>
        <p className={s.time}>{timeout}s</p>
      </div>
    </div>
  )
}
