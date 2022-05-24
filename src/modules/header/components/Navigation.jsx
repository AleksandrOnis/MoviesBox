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
  position: relative;
  padding: 10px;
  color: #fff;
  :not(:last-child) {
    margin-right: 40px;
  }

  ::after {
    content: '';
    position: absolute;
    left: 10px;
    bottom: 7px;
    width: calc(100% - 20px);
    height: 4px;
    border-radius: 2px;
    background-color: ${color.accent};
    opacity: 0;
    transform: scale(0);
    transition: transform 400ms, opacity 400ms;
  }

  :hover,
  :focus {
    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &.active {
    color: #ff6b01;

    ::after {
      opacity: 0;
    }
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
