import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    authToken: null,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const { authToken, user, additionalData } = action.payload;
      state.isAuthenticated = true;
      state.authToken = authToken;
      state.user = user;
      // You can handle additional data here if needed
      state.additionalData = additionalData;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authToken = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export const selectAuthState = (state) => state.authentication;
export default authenticationSlice.reducer;
