import { getReq, postReq, patchReq, deleteReq, putReq } from '../../../RootServices/index'
import { createAsyncThunk } from "@reduxjs/toolkit"
import APIEndPoints from './apiEndpoint';

const { LOGIN, SEND_OTP_LOGIN } = APIEndPoints

const authLoginService = createAsyncThunk('auth/login', async (payload) => {
  // console.log('payyyy', payload)
  const response = await postReq(LOGIN, payload);
  return response?.data
})


const authSendOtpLoginServices = createAsyncThunk('auth/sendOtpLogin', async (payload) => {
  console.log('payyyy', payload)
  const response = await postReq(SEND_OTP_LOGIN, payload);
  return response?.data
})

export default { authLoginService, authSendOtpLoginServices }

