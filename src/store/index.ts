import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import filtersReducer from './slices/filtersSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filters: filtersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
