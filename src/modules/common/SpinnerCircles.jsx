import styled, { keyframes } from 'styled-components';
import React from 'react';
import { color } from 'utils/stylesVars';

export const SpinnerCircles = () => {
  return <Spinner></Spinner>;
};

const spinnerAnimation = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
   `;

const Spinner = styled.div`
  height: 24px;
  width: 24px;
  color: ${color.light};
  position: relative;
  display: inline-block;
  border: 2px solid;
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spinnerAnimation} 1000ms linear infinite;
`;
