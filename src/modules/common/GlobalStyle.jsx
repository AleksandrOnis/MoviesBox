import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = () => {
  return <GlobalStyled />;
};

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    min-height: 100vh; 
    font-family: 'Alegreya', serif;
    font-size: 12px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a { 
    color: ${props => props.theme.textColor};
    text-decoration: none;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  #root{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

`;
