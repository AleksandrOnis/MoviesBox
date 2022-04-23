import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  body {
    /* display: flex;
    flex-direction: column;
    min-height: 100vh; */
    font-family: "Roboto", sans-serif;
    /* background-color: #1f1010; */
  }

  #root{
    
  }

`;

export const GlobalStyle = () => {
  return <GlobalStyled />;
};
