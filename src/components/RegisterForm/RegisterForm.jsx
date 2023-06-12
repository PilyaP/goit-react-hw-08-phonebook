import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { FormReg } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };

  return (
    <FormReg onSubmit={handleSubmit} autoComplete="off">
      <label className="label-reg">
        Username
        <input type="text" name="name" required />
      </label>
      <label className="label-reg">
        Email
        <input type="email" name="email" required />
      </label>
      <label className="label-reg">
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </FormReg>
  );
};
