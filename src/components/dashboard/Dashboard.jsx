import { useEffect, useContext } from 'react';
import { SearchBar, Toggle } from './components';
import { ThemeContext } from 'context';

export const Dashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const ThemeInLS = localStorage.getItem('theme');
    if (ThemeInLS !== null)
      if (!JSON.parse(ThemeInLS)) {
        const refCheckBoxTheme = document.getElementById('toggleTheme');
        refCheckBoxTheme.click();
        setTheme(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <SearchBar />
      <Toggle active={theme} onChange={() => setTheme(!theme)} />
    </>
  );
};
