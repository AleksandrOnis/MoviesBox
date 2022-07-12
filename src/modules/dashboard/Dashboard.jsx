import styled from 'styled-components';
import { SearchBar, ToggleTheme } from './components';

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <SearchBar />
      <ToggleTheme />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
