import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'components/common/Notify';
import { GlobalStyle } from 'components/common/GlobalStyle';
import { Header } from 'components/common/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Notify />
    </>
  );
}

export default App;
