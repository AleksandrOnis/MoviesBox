import styled from 'styled-components';
import { Loader, Main, Wrap } from 'components/common';
import { Header } from 'components/header/Header';
import { Dashboard } from 'components/dashboard/Dashboard';
import { Footer } from 'components/footer/Footer';
import { Gallery } from 'components/gallery/Gallery';

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
