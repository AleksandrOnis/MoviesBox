import styled, { keyframes } from 'styled-components';
import { color } from 'utils/stylesVars';

export const Spinner = () => {
  return (
    <Container>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
    </Container>
  );
};

const waveAnimation = keyframes`
     0% {
       transform: scale(0);
     }
     50% {
       transform: scale(1);
     }
     100% {
       transform: scale(0);
     }
   `;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.8);
  /* background: linear-gradient(45deg, #fff, #000); */
  opacity: 0.7;
`;

const Wave = styled.div`
  width: 6px;
  height: 100px;
  background: ${color.accent};
  /* background: linear-gradient(45deg, ${color.accent}, #fff); */
  margin: 12px;
  animation: ${waveAnimation} 1000ms linear infinite;
  border-radius: 5px;
  opacity: 1;

  &:nth-child(2) {
    animation-delay: 0s;
  }
  &:nth-child(3) {
    animation-delay: 0.05s;
  }
  &:nth-child(4) {
    animation-delay: 0.1s;
  }
  &:nth-child(5) {
    animation-delay: 0.15s;
  }
  &:nth-child(6) {
    animation-delay: 0.2s;
  }
  &:nth-child(7) {
    animation-delay: 0.25s;
  }
  &:nth-child(8) {
    animation-delay: 0.3s;
  }
  &:nth-child(9) {
    animation-delay: 0.35s;
  }
  &:nth-child(10) {
    animation-delay: 0.4s;
  }
`;
