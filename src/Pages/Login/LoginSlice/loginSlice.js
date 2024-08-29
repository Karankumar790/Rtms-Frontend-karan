import { createSlice, } from "@reduxjs/toolkit";
import service from "../Services/loginServices"


const initialState = {
  data: [],
  status: null
};
const { authLoginService } = service

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLoginService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLoginService.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log("first###")
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