import React, { useState } from 'react';
import { StyledForm } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit, title }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');  
  // const dispatch = useDispatch();
  
  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1 className="form-title">{title}</h1>
      <label className="form-label">
        <span className="form-span">Name:</span>
        <input
          className="form-input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        <span className="form-span">Number:</span>
        <input
          className="form-input"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="form-btn">
        Add Contact
      </button>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactForm;
