import styled from 'styled-components';
import { Header } from 'components/header/Header';
import { Dashboard } from 'components/dashboard/Dashboard';
import { Wrap } from 'components/common';
import { Footer } from 'components/footer/Footer';
import { Main } from 'components/common';

const StyledLibrary = styled.main`
  min-height: 100vh;
  background-image: url(${props => props.theme.body});
`;

export const Library = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrap jc="space-between" ai="center" p="10px 40px 10px 40px">
          <Dashboard />
        </Wrap>
      </Main>
      <Footer />
    </>
  );
};
