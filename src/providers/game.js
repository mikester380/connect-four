import React from 'react'

const GameStore = React.createContext()

export const useGameStore = React.useContext(GameStore)
export const GameStoreProvider = GameStore.Provider
