import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className="" to="/register">
        Register
      </NavLink>
      <NavLink className="" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
