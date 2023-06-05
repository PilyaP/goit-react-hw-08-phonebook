import { useAuth } from 'components/hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className="" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
