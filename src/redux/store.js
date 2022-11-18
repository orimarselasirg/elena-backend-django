import { configureStore } from '@reduxjs/toolkit'
import {userSlice, taskSlice} from './slices'

export const store = configureStore({
  reducer: {
    data : userSlice.reducer,
    task : taskSlice.reducer
  },
})