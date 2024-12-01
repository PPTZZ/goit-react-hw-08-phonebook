import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactSlice';
import { alertReducer } from './slices/alertSlice';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    alert: alertReducer,
    auth: authReducer,
  },
});
