import styled from 'styled-components';
import { Header } from 'components/common/header/Header';

const StyledMain = styled.main`
  min-height: 100vh;
  background-image: url(${props => props.theme.body});
`;

export const Main = props => {
  return (
    <>
      <Header />
      <StyledMain id="main">MAIN</StyledMain>
    </>
  );
};
