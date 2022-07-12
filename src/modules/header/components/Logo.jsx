import styled, { keyframes } from 'styled-components';
import logo from 'images/icons/logo.svg';
import { Wrap, StyledNavLink } from 'modules/common';
import { color, deviceScreen } from 'utils/stylesVars';

export const Logo = ({ title = 'MoviesBox', mobileHidden }) => {
  return (
    <Wrap fd="row" g="10px">
      <StyledLogo src={logo} />
      <StyledNavLink to="/main">
        <Title mobileHidden={mobileHidden}>{title}</Title>
      </StyledNavLink>
    </Wrap>
  );
};

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
  display: ${({ mobileHidden }) => (mobileHidden ? 'none' : 'block')};
  margin: 0;
  padding: 0;
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: #ffffff;

  :hover {
    color: ${color.accent};
  }

  ${deviceScreen.M} {
    display: block;
  }
`;
