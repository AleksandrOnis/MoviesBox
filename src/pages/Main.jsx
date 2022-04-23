import styled from 'styled-components';
import bg from 'images/main-bg/light.jpg';
import { Header } from 'components/common/header/Header';

const StyledMain = styled.main`
  min-height: 100vh;
  background-image: url(${bg});
`;

export const Main = () => {
  return (
    <>
      <Header />
      <StyledMain>MAIN</StyledMain>;
    </>
  );
};
