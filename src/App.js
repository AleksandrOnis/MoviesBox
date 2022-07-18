import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'modules/common/Notify';
import { GlobalStyle, PrivateRoute, Spinner } from 'modules/common';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'utils/theme';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

const HomePage = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const LibraryPage = lazy(() =>
  import('./pages/Library').then(module => ({ default: module.Library })),
);
const SearchPage = lazy(() =>
  import('./pages/Search').then(module => ({ default: module.Search })),
);

const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Registration = lazy(() =>
  import('./pages/Registration').then(module => ({ default: module.Registration })),
);

function App() {
  const theme = useSelector(selectors.modeTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route
            path="library"
            element={
              <PrivateRoute>
                <LibraryPage />
              </PrivateRoute>
            }
          />
          <Route path="search" element={<SearchPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
      <Notify />
    </ThemeProvider>
  );
}

export default App;
