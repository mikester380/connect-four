import React from 'react'

const AppStore = React.createContext({})

export const useAppStore = () => React.useContext(AppStore)

export const AppStoreProvider = AppStore.Provider
