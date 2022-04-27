import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'components/common/Notify';
import { GlobalStyle } from 'components/common/GlobalStyle';
import { Home } from 'pages/Home';
import { Library } from 'pages/Library';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context';
import { useState } from 'react';
import { darkTheme, lightTheme } from 'utils/theme';
import { Header } from 'components/common/header/Header';

function App() {
  const [theme, setTheme] = useState(true);
  const [searchFilm, setSearchFilm] = useState('');
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Notify />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
