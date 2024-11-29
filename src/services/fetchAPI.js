import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.goit.global';

// Handling registration
export const handleRegister = createAsyncThunk(
	'auth/handleRegister',
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post('/users/signup', userData);
			axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
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
			axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
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
			axios.defaults.headers.common.Authorization = '';
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts');
			return response.data;
		} catch (error) {
			return thunkAPI.thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Adding Contacts
export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (text, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { text });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Deleting Contacts
export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
