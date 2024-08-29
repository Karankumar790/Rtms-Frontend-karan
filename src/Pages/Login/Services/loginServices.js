import { getReq, postReq, patchReq, deleteReq, putReq } from '../../../RootServices/index'
import { createAsyncThunk } from "@reduxjs/toolkit"
import APIEndPoints from './apiEndpoint';

const { SEND_OTP_LOGIN } = APIEndPoints

const authLoginService = createAsyncThunk('auth/login', async (payload) => {
  // console.log('payyyy', payload)
  const response = await postReq(SEND_OTP_LOGIN, payload);
  return response?.data
})

export default { authLoginService }