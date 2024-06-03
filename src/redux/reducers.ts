import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './slices/userSlice'

export type RootReducer = ReturnType<typeof reducers>

export const reducers = combineReducers({
    user: userReducer
})

const persistConfig = {
  key: 'root',
  storage
}

export const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  reducers
)