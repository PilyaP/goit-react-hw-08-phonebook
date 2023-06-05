import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../redux/filterSlice';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import Loader from './Loader/Loader';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from 'redux/contactOperations';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  // dispatch action
  const formSubmit = ({ name, phone }) => {
    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    const isContactExist = contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.phone === contact.phone
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in phonebook.`);
    } else {
      dispatch(addContactThunk(contact));
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleContactDelete = id => {
    const contactName = contacts.find(contact => contact.id === id).name;
    dispatch(deleteContactThunk(id));
    Notify.warning(`${contactName} deleted from phonebook.`);
  };

  return (
    <Container>
      <ContactForm onSubmit={formSubmit} title="Phonebook" />
      <Filter
        filter={filter}
        changeFilterInput={changeFilterInput}
        title="Contacts"
      />
      {isLoading && <Loader />}
      <ContactList
        contacts={findContacts()}
        deleteContact={handleContactDelete}
      />
    </Container>
  );
};

export default App;
