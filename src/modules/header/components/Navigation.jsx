import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { color } from 'utils/stylesVars';

const NavList = styled.ul`
  padding: 0;
  font-size: 22px;
  line-height: 1.24;
  font-weight: 500;
  letter-spacing: 0.03em;
`;

const StyledNav = styled(NavLink)`
  color: #fff;
  :not(:last-child) {
    margin-right: 40px;
  }

  :hover,
  :focus {
    border-bottom: 3px solid ${color.accent};
  }

  &.active {
    color: #ff6b01;
    border-bottom: none;
  }
`;

export const Navigation = props => {
  return (
    <NavList>
      <StyledNav to="/home">Home</StyledNav>
      <StyledNav to="/library">Library</StyledNav>
    </NavList>
  );
};
