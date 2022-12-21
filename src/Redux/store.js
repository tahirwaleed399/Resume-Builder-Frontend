import { configureStore } from '@reduxjs/toolkit'
import resumeSlice from './Slices/resumeSlice'
export const store = configureStore({
  reducer: {
    resume : resumeSlice
  },
})