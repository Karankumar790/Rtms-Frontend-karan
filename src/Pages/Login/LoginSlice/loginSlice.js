// import { createSlice, } from "@reduxjs/toolkit";
// import service from "../Services/loginServices"

// const { authLoginService, authSendOtpLoginServices } = service

// const initialState = {
//   data: [],
//   status: null
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {

//     addUser: (state, payload) => {
//       state.userOne = payload;
//     },
//     removeToken: (state) => {
//       state.data.token = null;
//       state.data.id = 55;
//     }


//   },
//   extraReducers: (builder) => {
//     builder

//       .addCase(authSendOtpLoginServices.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(authSendOtpLoginServices.fulfilled, (state, action) => {
//         state.data.sendOtpLogin = action.payload;
//         state.loading = false;
//       })
//       .addCase(authSendOtpLoginServices.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Handle authLoginService cases

//       .addCase(authLoginService.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(authLoginService.fulfilled, (state, action) => {
//         state.data.login = action.payload;
//         console.log(">>>>>>>payy",action.payload)
//         state.loading = false;
//       })
//       .addCase(authLoginService.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })


//   }
// })

// export const authAction = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import service from "../Services/loginServices";

const { authLoginService, authSendOtpLoginServices } = service;

const initialState = {
  user: null,  // Store the user object directly here
  status: null,
  loading: false,
  error: null,
  otpSent: false,  // Track OTP status if necessary
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload; // Update the user data in state
    },
    removeUser: (state) => {
      state.user = null;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSendOtpLoginServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authSendOtpLoginServices.fulfilled, (state, action) => {
        state.otpSent = true;
        state.loading = false;
      })
      .addCase(authSendOtpLoginServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(authLoginService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLoginService.fulfilled, (state, action) => {
        state.user = action.payload;  // Store user data after successful login
        state.loading = false;
      })
      .addCase(authLoginService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
