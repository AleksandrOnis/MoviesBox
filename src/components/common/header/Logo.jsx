import styled, { keyframes } from 'styled-components';
import logo from 'images/icons/logo.svg';
import { Wrap } from '../Wrap';
// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from '../StyledNavLink';
import { color } from 'utils/theme';
import { deviceScreen } from 'utils/theme';

const rotateAnimation = keyframes`
  0% {
    transform:rotateZ(0deg);
  }
  100% {
    transform:rotateZ(360deg);
  }
`;

const StyledLogo = styled.img`
  animation: ${rotateAnimation} 10s infinite linear;

  :hover {
    animation-play-state: paused;
  }
`;

const Title = styled.h1`
  display: none;
  margin: 0;
  padding: 0;

  ${deviceScreen.T} {
    display: block;
    font-size: 30px;
    line-height: 35px;
    font-weight: 500;
    color: #ffffff;

    :hover {
      color: ${color.accent};
    }
  }
`;

export const Logo = ({ title }) => {
  return (
    <Wrap fd="row" g="10px">
      <StyledLogo src={logo} />
      <StyledNavLink to="/main">
        <Title>{title}</Title>
      </StyledNavLink>
    </Wrap>
  );
};
