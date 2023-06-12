import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value.trim(), // "   ded   " -> "ded"
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
        <input className='input' type="email" name="email" required />
      </label>
      <label className="label">
        Password
        <input className='input' type="password" name="password" required />
      </label>
      <button type="submit">Log In</button>
    </Form>
  );
};
