import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slices/CartSlice'

export const store = configureStore({
  reducer: {
    arr:CartSlice.reducer
  }
})