import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul``;
const StyledNavLink = styled(NavLink)``;

export const Navigation = () => {
  return (
    <>
      <StyledNavLink to="/main">Main</StyledNavLink>;
      <StyledNavLink to="/library">Library</StyledNavLink>;
    </>
  );
};
