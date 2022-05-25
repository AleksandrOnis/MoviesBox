import styled from 'styled-components';
import { Loader, Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
const isLoading = false;

export const Home = props => {
  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main id="main">{isLoading ? <Loader /> : <Gallery />}</Main>
      <Footer />
    </>
  );
};
