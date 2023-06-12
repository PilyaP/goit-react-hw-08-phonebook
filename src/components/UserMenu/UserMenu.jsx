import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { stringAvatar } from 'utils/avatarHelpers';
import Button from '@mui/material/Button';
import { Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  if(!user) return <div>Loading...</div>

  return (
    <Menu>
      <Stack alignItems="center" direction="row" spacing={2}>
        <Avatar {...stringAvatar(user.name)} />
        <span>Welcome, {user.name}</span>
      </Stack>{' '}
      <Button onClick={() => dispatch(logOut())} variant="outlined">
        Logout
      </Button>
      {/* <p className="">Welcome, {user.name}</p> */}
    </Menu>
  );
};
