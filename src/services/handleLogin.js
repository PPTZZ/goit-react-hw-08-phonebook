import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// Adding JWT
const addAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	console.log(token);
	
  };

// Removing JWT
const removeAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

// Handling registration
export const handleRegister = createAsyncThunk(
	'auth/handleRegister',
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post('/users/signup', userData);
			addAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			console.error(error.message);

			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Handling login
export const handleLogIn = createAsyncThunk(
	'auth/handleLogIn',
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post('/users/login', userData);
			addAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Handling logout
export const handleLogOut = createAsyncThunk(
	'auth/handleLogOut',
	async (_, thunkAPI) => {
		try {
			await axios.post('/users/logout');
			removeAuthHeader();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

