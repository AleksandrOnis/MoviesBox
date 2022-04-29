import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'components/common/Notify';
import { GlobalStyle } from 'components/common/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context';
import { lazy, Suspense, useState } from 'react';
import { darkTheme, lightTheme } from 'utils/theme';
import Loader from 'react-spinners/BarLoader';

const HomePage = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const LibraryPage = lazy(() =>
  import('./pages/Library').then(module => ({ default: module.Library })),
);

function App() {
  const [theme, setTheme] = useState(true);
  const [searchFilm, setSearchFilm] = useState('');
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
        <Notify />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
