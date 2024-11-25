import React from 'react'

import { AppStoreProvider } from './providers/app'

import Connect4 from '@/components/Connect4'

export default function App() {
  const [page, setPage] = React.useState('menu')
  const GameMode = React.useRef('')
  const setGameMode = (mode) => (GameMode.current = mode)

  const providerValue = {
    setGameMode,
    GameMode: GameMode.current,
    setPage,
    page,
  }

  return (
    <AppStoreProvider value={providerValue}>
      <Connect4 />
    </AppStoreProvider>
  )
}
