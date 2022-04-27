import { createGlobalStyle } from 'styled-components';
import { color } from 'utils/theme';

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

  a { 
    color: #ffffff; 
    text-decoration: none;
  }

/* nav a { color:green; } */

  #root{
    
  }

`;

export const GlobalStyle = () => {
  return <GlobalStyled />;
};
