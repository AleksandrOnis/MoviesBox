import styled from 'styled-components';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Wrap } from 'modules/common';
import { Footer } from 'modules/footer/Footer';
import { Main } from 'modules/common';

const StyledLibrary = styled.main`
  min-height: 100vh;
  background-image: url(${props => props.theme.body});
`;

export const Library = () => {
  return (
    <>
      <Header>
        <Wrap jc="space-between" ai="center">
          <Dashboard />
        </Wrap>
      </Header>
      <Main></Main>
      <Footer />
    </>
  );
};
