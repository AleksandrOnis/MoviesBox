import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'components/common/Notify';
import { GlobalStyle, darkTheme, lightTheme } from 'components/common/GlobalStyle';
import { Main } from 'pages/Main';
import { Library } from 'pages/Library';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="library" element={<Library />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
      <Notify />
    </ThemeProvider>
  );
}

export default App;
