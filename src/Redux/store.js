import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thunk, logger])
})



// import { configureStore } from '@reduxjs/toolkit'
// import SignupSlice from '../Pages/Signup/SignupSlice/signupSlice'

// export const store = configureStore({
//   reducer: SignupSlice,
// })