import PropTypes from 'prop-types';
import { ContactsItem } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, phone }) => {
      return (
        <ContactsItem key={id}>
          <p className="contact-name">
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className="bnt-name"
          >
            Delete
          </button>
        </ContactsItem>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
