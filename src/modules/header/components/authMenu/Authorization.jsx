import styled from 'styled-components';
import { color } from 'utils/stylesVars';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { isLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Button } from 'modules/common';

const StyledNavLink = styled(NavLink)`
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  line-height: 1.24;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #fff;

  :hover,
  :focus {
    color: ${color.accent};
  }
`;

export const Authorization = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(isLoggedIn);
  return isLogin ? (
    <UserMenu />
  ) : (
    <Button w="80px" onClick={() => navigate('/login')}>
      Login
    </Button>
  );
};
