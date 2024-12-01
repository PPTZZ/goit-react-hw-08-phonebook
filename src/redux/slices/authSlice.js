import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../../services/fetchAPI';

const initialState = {
  token: localStorage.getItem('token'),
  email: localStorage.getItem('email'),
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogin(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('email', action.payload.email);
    },
    handleLogout(state) {
      state.token = null;
      state.email = null;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.token = null;
      state.email = null;
      state.error = action.payload;
      localStorage.removeItem('token');
    });
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
