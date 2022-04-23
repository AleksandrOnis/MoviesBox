import styled from 'styled-components';
import bg from 'images/main-bg/library-light.jpg';
import { Header } from 'components/common/header/Header';

const StyledLibrary = styled.main`
  min-height: 100vh;
  background-image: url(${bg});
`;

export const Library = () => {
  return (
    <>
      <Header />
      <StyledLibrary>LIBRARY</StyledLibrary>;
    </>
  );
};
