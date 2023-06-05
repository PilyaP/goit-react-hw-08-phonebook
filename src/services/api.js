// https://647783389233e82dd53bc61b.mockapi.io

import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    'https://647783389233e82dd53bc61b.mockapi.io/contacts'
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://647783389233e82dd53bc61b.mockapi.io/contacts/${contactId}`
  );
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    `https://647783389233e82dd53bc61b.mockapi.io/contacts/`,
    contact
  );
  return data;
};
 