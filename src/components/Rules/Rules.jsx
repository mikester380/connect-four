import s from './Rules.module.scss'
import { useAppStore } from '@/providers/app'
import useBackground from '@/hooks/useBackground'
import { COLORS } from '@/lib/constants'
import { rules } from '@/lib/db'

import Check from '@/components/svgs/Check'

export default function Rules() {
  const { setPage } = useAppStore()

  useBackground(COLORS.electric_violet)

  return (
    <section className={s.wrapper}>
      <div className={s.card}>
        <h1 className={s.title}>RULES</h1>
        <div className={s.sections}>
          <div className={s.section}>
            <h2 className={s.section_title}>OBJECTIVES</h2>
            <p className={s.section_text}>
              Be the first player to connect 4 of the same
              colored discs in a row (either vertically,
              horizontally, or diagonally).
            </p>
          </div>
          <div className={s.section}>
            <h2 className={s.section_title}>HOW TO PLAY</h2>
            <ul className={s.o_list}>
              {rules.map((rule, idx) => (
                <li key={idx}>
                  <p className={s.section_text}>{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className={s.close}
          onClick={() => {
            setPage('menu')
          }}
        >
          <Check />
        </button>
      </div>
    </section>
  )
}
