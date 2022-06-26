import styled from 'styled-components';
import { SearchBar, ToggleTheme } from './components';

export const Dashboard = ({ getSearchQuery }) => {
  return (
    <StyledDashboard>
      <SearchBar getSearchQuery={getSearchQuery} />
      <ToggleTheme />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
