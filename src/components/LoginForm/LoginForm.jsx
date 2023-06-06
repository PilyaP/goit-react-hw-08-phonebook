import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

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
    <form className="" onSubmit={handleSubmit} autoComplete="off">
      <label className="">
        Email
        <input type="email" name="email" required />
      </label>
      <label className="">
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
