import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'components/common/Notify';
import { GlobalStyle } from 'components/common/GlobalStyle';
import { Main } from 'pages/Main';
import { Library } from 'pages/Library';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'components/common/context';
import { useState } from 'react';
import { darkTheme, lightTheme } from 'components/common/theme';
import { Header } from 'components/common/header/Header';

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
        <Notify />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
