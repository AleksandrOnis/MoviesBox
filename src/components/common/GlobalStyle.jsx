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

  a { 
    color: #ffffff; 
    text-decoration: none;
    :hover { 
      color: #ff6b01; 
    }
  }

/* nav a { color:green; } */

  #root{
    
  }

`;

export const GlobalStyle = () => {
  return <GlobalStyled />;
};
