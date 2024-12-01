import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { alertReducer } from './slices/alertSlice';
import { authReducer } from './slices/authSlice';
import { myContactsReducer } from './slices/contactSlice';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token','isLoggedIn','user'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		alert: alertReducer,
		myContacts: myContactsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
		}),
});


export const persistor = persistStore(store);