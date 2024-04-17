import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { employeesApiSlice } from './employee/employeesApiSlice'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { createPersistStorage } from '@/utils'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: createPersistStorage(),
  whitelist: ['auth'],
}

const rootReducer = combineSlices(authSlice, employeesApiSlice)
export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(employeesApiSlice.middleware)
  },
})

export const persistor = persistStore(store)

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
