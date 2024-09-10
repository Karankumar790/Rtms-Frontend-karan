import { createSlice, } from "@reduxjs/toolkit";
import Services from '../Service/signupService';
const { authRegisterOtp, authRegister } = Services;

const initialState = {
  data: {
    sendOtpSignup: null,
    // login: null
  },
  // loading: false,   // Tracks loading state
  // error: null,      // Tracks any error messages
  status: 'idle',   // Tracks request status ('idle', 'loading', 'succeeded', 'failed')
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      // Store the form data (formObject) in signupUsers
      state.signupUsers = payload;
      console.log("registerUser reducer - payload:", payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegisterOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRegisterOtp.fulfilled, (state, action) => {
        state.data.sendOtpSignup = action.payload;
        state.loading = false;
      })
      .addCase(authRegisterOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle authSignupService cases

      .addCase(authRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.data.login = action.payload;
        console.log(">>>>>>>payy", action.payload)
        state.loading = false;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})
export const authSignupAction = SignupSlice.actions;
export default SignupSlice.reducer;

