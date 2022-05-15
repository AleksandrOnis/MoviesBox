import React from 'react';
import { ToastContainer } from 'react-toastify';
import { color } from 'utils/stylesVars';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }
  .Toastify__toast-icon svg {
    fill: ${color.accent};
  }
  .Toastify__progress-bar {
    background-color: ${color.accent};
  }
`;

export const Notify = () => {
  return <StyledToastContainer autoClose={4000} />;
};
