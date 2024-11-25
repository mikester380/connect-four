import { useAppStore } from '@/providers/app'

import Menu from '@/components/Menu'
import Rules from '@/components/Rules'
import Game from '@/components/Game'

const pages = {
  menu: Menu,
  rules: Rules,
  game: Game,
}

export default function Connect4() {
  const { page } = useAppStore()
  const Page = pages[page]

  return <Page />
}
