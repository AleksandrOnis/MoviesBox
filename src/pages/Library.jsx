import styled from 'styled-components';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main } from 'modules/common';
import { useLogOutRedirect } from 'hooks';

export const Library = () => {
  useLogOutRedirect();
  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main></Main>
      <Footer />
    </>
  );
};
