import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import { Notify } from 'components/common/Notify';
import bg from 'images/main-bg/light.jpg';

const GlobalStyle = createGlobalStyle`
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Notify />
    </>
  );
}

export default App;
