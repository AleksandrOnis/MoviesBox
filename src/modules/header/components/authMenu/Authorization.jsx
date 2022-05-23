import styled from 'styled-components';
import { color } from 'utils/stylesVars';
import { NavLink } from 'react-router-dom';

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
  return <StyledNavLink to="/login">Login</StyledNavLink>;
};
