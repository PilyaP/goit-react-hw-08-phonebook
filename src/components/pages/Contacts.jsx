import { nanoid } from '@reduxjs/toolkit';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'components/hooks';
import { Notify } from 'notiflix';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from 'redux/contactOperations';
import { setFilter } from 'redux/filterSlice';

export default function Tasks() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);

  const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExist = contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.number === contact.number
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in phonebook.`);
    } else {
      dispatch(addContactThunk(contact));
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) // "     12" -> "12"
    );
  };

  const handleContactDelete = id => {
    const contactName = contacts.find(contact => contact.id === id).name;
    dispatch(deleteContactThunk(id));
    Notify.warning(`${contactName} deleted from phonebook.`);
  };

  return (
    <>
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
    </>
  );
}
