import styled from 'styled-components';
import { Header } from 'components/common/header/Header';
import { Loader } from 'components/common/Loader';
import { Footer } from 'components/common/Footer';

const StyledMain = styled.main`
  min-height: 100vh;
  background-image: url(${props => props.theme.body});
`;

export const Home = props => {
  return (
    <>
      <Header />
      <StyledMain id="main">
        <Loader />
      </StyledMain>
      <Footer />
    </>
  );
};
