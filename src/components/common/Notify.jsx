import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
  }
  .Toastify__toast-icon svg {
    fill: #720e2e;
  }
  .Toastify__progress-bar {
    background-color: #720e2e;
  }
`;

export const Notify = () => {
  return <StyledToastContainer autoClose={4000} />;
};
