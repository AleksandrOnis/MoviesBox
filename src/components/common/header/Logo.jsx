import styled, { keyframes } from 'styled-components';
import logo from 'images/icons/logo.svg';
import { Wrap } from '../Wrap';

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
  max-width: 30px;
  height: 30px;
  :hover {
    animation-play-state: paused;
  }
`;

const Title = styled.h1`
  display: none;
  margin: 0;
  padding: 0;
  max-height: 30px;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 30px;
    line-height: 35px;
    font-weight: 500;
    color: #ffffff;

    :hover {
      color: #ff6b01;
    }
  }
`;

export const Logo = ({ title }) => {
  return (
    <Wrap fd="row" g="10px">
      <StyledLogo src={logo} />
      <Title>{title}</Title>
    </Wrap>
  );
};
