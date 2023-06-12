import { NavLink } from 'react-router-dom';
import { LoginS } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <LoginS>
      <NavLink className="" to="/register">
        Register
      </NavLink>
      <NavLink className="" to="/login">
        Log In
      </NavLink>
    </LoginS>
  );
};
