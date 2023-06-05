import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from './contactOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [{ id: '12321', name: 'John', number: '123-12-15' }],
    isLoading: false,
    error: '',
  },
  reducers: {
    // addContact: (state, {payload}) => {
    //   state.contacts.push(payload);
    //   //   state.contacts = [...state.contacts, action.payload];
    // },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Action generator
// export const { addContact, deleteContact } = contactsSlice.actions;
