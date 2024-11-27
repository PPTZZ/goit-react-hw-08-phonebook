import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const handleRegister = async (userData) => {
	try {
		const response = await axios.post('users/signup', userData);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (text, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { text });
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

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
