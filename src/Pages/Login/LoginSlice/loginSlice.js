import { createSlice, } from "@reduxjs/toolkit";
import service from "../Services/loginServices"

const { authLoginService } = service

const initialState = {
  data: [],
  status: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

   addUser: (state, payload) => {
    state.userOne = payload;
   },
   removeToken: (state) => {
    state.data.token = null;
    state.data.id = 55;
   }


  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLoginService.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(authLoginService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export const authAction = authSlice.actions;
export default authSlice.reducer;