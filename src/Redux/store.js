import { configureStore } from '@reduxjs/toolkit'
import resumeSlice from './Slices/resumeSlice'
import { userApi } from './UserApi/User';
import { resumeApi } from './ResumeApi/ResumeApi';
import userReducer, { getUser, isAuthenticatedUser } from './Slices/userSlice';

export const store = configureStore({
  reducer: {
    resume : resumeSlice,
    userState : userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [resumeApi.reducerPath]: resumeApi.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(resumeApi.middleware)
})

store.dispatch(getUser())
store.dispatch(isAuthenticatedUser())