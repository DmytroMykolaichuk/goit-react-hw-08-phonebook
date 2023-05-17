import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    const contacts = thunkAPI.getState().contacts.items;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`, {
        timeout: 3000,
      });
      return thunkAPI.abort();
    }
    if (
      contacts.find(
        contact =>
          contact.number.toLowerCase() === newContact.number.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(
        `${newContact.number} this number is already in your phonebook`,
        {
          timeout: 3000,
        }
      );
      return thunkAPI.abort();
    }
    try {
      const response = await axios.post('/contacts', newContact);

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

// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/contacts/${contactId}`);
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
