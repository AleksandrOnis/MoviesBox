import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import { SearchBar, ToggleTheme } from './components';
import { ThemeContext } from 'context';

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dashboard = ({ getSearchQuery }) => {
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
    <StyledDashboard>
      <SearchBar getSearchQuery={getSearchQuery} />
      <ToggleTheme active={theme} onChange={() => setTheme(!theme)} />
    </StyledDashboard>
  );
};
