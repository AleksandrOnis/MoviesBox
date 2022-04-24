import styled from 'styled-components';
import { StyledNavLink } from '../StyledNavLink';

const NavList = styled.ul``;

const StyledNav = styled(StyledNavLink)`
  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Navigation = () => {
  return (
    <NavList>
      <StyledNav to="/main">Main</StyledNav>;<StyledNav to="/library">Library</StyledNav>;
    </NavList>
  );
};
