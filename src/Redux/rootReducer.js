import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../Pages/Login/LoginSlice/loginSlice'

const rootReducers = combineReducers({
  authReducer
})
export default rootReducers;