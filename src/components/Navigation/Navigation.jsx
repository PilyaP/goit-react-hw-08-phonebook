import { useAuth } from 'components/hooks';
import { NavLink } from 'react-router-dom';
import { Nav1 } from './Navigati.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav1>
      <NavLink className="liu" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="liu" to="/contacts">
          Contacts
        </NavLink>
      )}
    </Nav1>
  );
};
