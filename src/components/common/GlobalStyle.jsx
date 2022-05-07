import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  body {
    margin: 0;
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

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
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
