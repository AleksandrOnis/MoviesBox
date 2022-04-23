import styled from 'styled-components';
import { StyledNavLink } from '../StyledNavLink';

const NavList = styled.ul``;

export const Navigation = () => {
  return (
    <NavList>
      <StyledNavLink to="/main">Main</StyledNavLink>;
      <StyledNavLink to="/library">Library</StyledNavLink>;
    </NavList>
  );
};
