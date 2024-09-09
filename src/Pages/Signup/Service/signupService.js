import { getReq, postReq, patchReq, deleteReq, putReq } from '../../../RootServices/index'
import { createAsyncThunk } from "@reduxjs/toolkit"
import APIEndPoints from './apiEndpoint';

const { REGISTER, SEND_OTP_REGISTER } = APIEndPoints

const authRegisterOtp = createAsyncThunk('auth/registerOtp', async (payload) => {
  console.log('Signup>>>payyyy', payload)
  const response = await postReq(SEND_OTP_REGISTER, payload);
  return response?.data
})

const authRegister = createAsyncThunk('auth/register', async (payload) => {
  // console.log('payyyy', payload)
  const response = await postReq(REGISTER, payload);
  return response?.data
})

export default { authRegisterOtp, authRegister }