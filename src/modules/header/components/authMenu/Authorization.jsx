import { useNavigate } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { selectors } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Button } from 'modules/common';

export const Authorization = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectors.isLoggedIn);
  return isLoggedIn ? (
    <UserMenu />
  ) : (
    <Button w="80px" onClick={() => navigate('/login')}>
      Login
    </Button>
  );
};
