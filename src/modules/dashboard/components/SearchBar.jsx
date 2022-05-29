import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { color } from 'utils/stylesVars';
import { Input } from 'modules/common';
import { deviceScreen } from 'utils/stylesVars';

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  max-width: 180px;
  ${deviceScreen.M} {
    max-width: 220px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearchAlt2)`
  width: 24px;
  height: 24px;
`;

const handleSubmit = event => {
  event.preventDefault();

  // if (searchQuery.trim() === '') {
  //   Notify.warning('Please enter movie name and try again');
  //   return;
  // }

  // RenderResults();
};

export const SearchBar = () => {
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <StyledInput type="text" name="searchQuery" placeholder="Search movies..." required />
      <Button type="submit">
        <SearchIcon color={color.accent} />
      </Button>
    </Form>
  );
};
