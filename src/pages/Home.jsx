import styled from 'styled-components';
import { Loader, Main, Wrap } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';

const isLoading = false;
// const isLoading = true;

export const Home = props => {
  return (
    <>
      <Header>
        <Wrap jc="space-between" ai="center">
          <Dashboard />
        </Wrap>
      </Header>
      <Main id="main">{isLoading ? <Loader /> : <Gallery />}</Main>
      <Footer />
    </>
  );
};
