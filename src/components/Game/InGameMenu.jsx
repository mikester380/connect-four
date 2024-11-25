import { createPortal } from 'react-dom'
import { useAppStore } from '@/providers/app'
import FloatButton from '@/components/FloatButton'
import s from './InGameMenu.module.scss'

const wrapper = document.getElementById('modalWrapper')

export default function InGameMenu({
  onResume,
  onRestart,
}) {
  const { setPage } = useAppStore()

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.card}>
        <h2>PAUSE</h2>

        <div className={s.options}>
          <FloatButton
            shade="v3"
            textIsCentered={true}
            onClick={onResume}
          >
            continue game
          </FloatButton>
          <FloatButton
            shade="v3"
            textIsCentered={true}
            onClick={onRestart}
          >
            restart
          </FloatButton>
          <FloatButton
            textIsCentered={true}
            onClick={() => setPage('menu')}
          >
            quit game
          </FloatButton>
        </div>
      </div>
    </div>,
    wrapper
  )
}
