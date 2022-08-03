import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { color } from 'utils/stylesVars';
import { Input } from 'modules/common';
import { deviceScreen } from 'utils/stylesVars';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setQuery } from 'redux/search/searchSlice';
import { useDispatch } from 'react-redux';
import { setPage } from 'redux/pagination/paginationSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warning('Please enter movie name and try again');
      setSearchQuery('');
      return;
    }
    setSearchQuery('');
    dispatch(setQuery(searchQuery));
    dispatch(setPage(1));
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="searchQuery"
        placeholder="Search movies..."
        value={searchQuery}
        setValue={setSearchQuery}
        required
      />
      <Button type="submit">
        <SearchIcon color={color.accent} />
      </Button>
    </Form>
  );
};

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
