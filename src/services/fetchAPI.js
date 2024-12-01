import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handling registration
const handleRegister = createAsyncThunk(
  'auth/handleRegister',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);

      return response.data;
    } catch (error) {
      console.error(error.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Getting user data
const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue('No token found');
    }

    try {
      const response = await api.get('/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch user'
      );
    }
  }
);

// Getting Contacts
const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await api.get('/contacts');
  return response.data;
});

// Adding Contacts
const addContact = createAsyncThunk('contacts/add', async contact => {
  const response = await api.post('/contacts', contact);
  return response.data;
});

// Deleting Contacts
const deleteContact = createAsyncThunk('contacts/delete', async id => {
  await api.delete(`/contacts/${id}`);
  return id;
});

export {
  handleRegister,
  fetchUser,
  fetchContacts,
  addContact,
  deleteContact,
};
