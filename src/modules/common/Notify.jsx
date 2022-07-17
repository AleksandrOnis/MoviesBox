import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Notify = () => {
  return <StyledToastContainer autoClose={4000} />;
};

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }
`;
