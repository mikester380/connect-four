import { useAppStore } from '@/providers/app'
import { MODES } from '@/lib/constants'

import FloatButton from '@/components/FloatButton'
import PlayerVsPlayer from '@/components/svgs/PlayerVsPlayer'
import PlayerVsCpu from '@/components/svgs/PlayerVsCpu'
import Logo from '@/components/svgs/Logo'

import s from './Menu.module.scss'

export default function Menu() {
  const { setPage, setGameMode } = useAppStore()

  return (
    <section className={s.wrapper}>
      <div className={s.card}>
        <Logo className={s.logo} />
        <div className={s.actions}>
          <FloatButton
            // disabled
            Icon={PlayerVsCpu}
            onClick={() => {
              setGameMode(MODES.withCPU)

              setPage('game')
            }}
          >
            play vs cpu
          </FloatButton>
          <FloatButton
            shade="v2"
            Icon={PlayerVsPlayer}
            onClick={() => {
              setGameMode(MODES.withPlayer)

              setPage('game')
            }}
          >
            play vs player
          </FloatButton>
          <FloatButton
            shade="v3"
            onClick={() => {
              setPage('rules')
            }}
          >
            game rules
          </FloatButton>
        </div>
      </div>
    </section>
  )
}
