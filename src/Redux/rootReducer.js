import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../Pages/Login/LoginSlice/loginSlice'
import signupReducer from '../Pages/Signup/SignupSlice/signupSlice'

const rootReducers = combineReducers({
  // auth: authReducer,
  signup: signupReducer
})
export default rootReducers;