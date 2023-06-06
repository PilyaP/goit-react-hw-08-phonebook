import PropTypes from 'prop-types';
import { ContactsItem } from './ContactList.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'redux/contactSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({ contacts, deleteContact }) => {
  const dispatch = useDispatch();
  const favContactsIds = useSelector(
    state => state.contacts.favoriteContactIds
  );

  const favoriteContacts = contacts.filter(contact =>
    favContactsIds.includes(contact.id)
  );
  const nonFavContacts = contacts.filter(
    contact => !favContactsIds.includes(contact.id)
  );

  const onToggleFav = contactId => {
    dispatch(toggleFavorite(contactId));
  };

  return (
    <ul>
      {favoriteContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact-name">
              <button
                onClick={() => onToggleFav(id)}
                type="button"
                className="fav-btn"
              >
                <FavoriteBorderIcon className="icon active" />
              </button>{' '}
              {name}: {number}
            </p>
            {/* <button type="button" className="bnt-name">
              Delete
            </button> */}
            <IconButton
              onClick={() => deleteContact(id)}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ContactsItem>
        );
      })}
      {nonFavContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact-name">
              <button
                onClick={() => onToggleFav(id)}
                type="button"
                className="fav-btn"
              >
                <FavoriteBorderIcon className="icon" />
              </button>{' '}
              {name}: {number}
            </p>
            {/* <button
              type="button"
              onClick={() => deleteContact(id)}
              className="bnt-name"
            >
              Delete
            </button> */}
            <IconButton
              onClick={() => deleteContact(id)}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ContactsItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
