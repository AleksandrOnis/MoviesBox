import styled from 'styled-components';
import { Header } from 'components/common/header/Header';

const StyledLibrary = styled.main`
  min-height: 100vh;
  background-image: url(${props => props.theme.body});
`;

export const Library = () => {
  return (
    <>
      <Header />
      <StyledLibrary>LIBRARY</StyledLibrary>;
    </>
  );
};
