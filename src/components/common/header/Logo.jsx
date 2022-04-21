import styled, { keyframes } from 'styled-components';
import logo from 'images/icons/logo.svg';

const rotateAnimation = keyframes`
  0% {
    transform:rotateZ(0deg);
  }
  100% {
    transform:rotateZ(360deg);
  }
`;

const StyledLogo = styled.img`
  animation: ${rotateAnimation} 1s infinite linear;
  :hover {
    animation-play-state: paused;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: #ffffff;
`;

export const Logo = ({ text }) => {
  return (
    <>
      <StyledLogo src={logo} />
      <Title>{text}</Title>
    </>
  );
};
