import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    font-family: "Roboto", sans-serif;
    /* background: ${(props = '#444') => props.theme.body};
    color: ${(props = '#fff') => props.theme.textColor}; */
  }

  li {
    list-style-type: none;
  }

  a { 
    color: #ffffff; 
    text-decoration: none;
  }

/* nav a { color:green; } */

  #root{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

`;

export const GlobalStyle = () => {
  return <GlobalStyled />;
};
