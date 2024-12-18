import { createSlice } from '@reduxjs/toolkit';
import {
  handleLogIn,
  handleLogOut,
  handleRegister,
} from '../../services/handleLogin';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(handleRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(handleLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status = action.payload;
      })
      .addCase(handleLogIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(handleLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
