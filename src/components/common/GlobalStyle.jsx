import { createGlobalStyle } from 'styled-components';
import bg from 'images/main-bg/light.jpg';

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Roboto", sans-serif;
    background-image: url(${bg});
  }
    
  #root{
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
  }
`;

export const GlobalStyle = () => {
  return <GlobalStyled />;
};
