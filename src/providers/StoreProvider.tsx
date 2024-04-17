'use client'
import { Loader } from '@/component'
import type { AppStore } from '@/store'
import { store, persistor } from '@/store'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

type P = Readonly<{ children: React.ReactNode }>

export const StoreProvider = ({ children }: P) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = store
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
