import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'modules/common/Notify';
import { GlobalStyle, Spinner } from 'modules/common';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context';
import { lazy, Suspense, useState } from 'react';
import { darkTheme, lightTheme } from 'utils/theme';

const HomePage = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const LibraryPage = lazy(() =>
  import('./pages/Library').then(module => ({ default: module.Library })),
);
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Registration = lazy(() =>
  import('./pages/Registration').then(module => ({ default: module.Registration })),
);

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Suspense>
        <Notify />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
