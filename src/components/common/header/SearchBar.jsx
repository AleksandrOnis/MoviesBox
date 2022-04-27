import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { color } from 'utils/theme';
import { useContext } from 'react';
import { Context } from 'context';

const Form = styled.form`
  display: flex;
  justify-content: start;
  height: 25px;
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  padding: 5px;
  width: 140px;
  color: #fff;
  font-size: 12px;
  line-height: 1.24;
  font-weight: 400;
  letter-spacing: 0.01em;
  border: none;
  border-bottom: 1px solid ${color.accent};
  background: transparent;
  outline: none;
  letter-spacing: 0.02em;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, #000 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }

  :hover,
  :focus {
  }

  ::placeholder {
    color: #fff;
  }
`;

const Button = styled.button`
  position: relative;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearchAlt2)``;

const onFormSubmit = event => {
  event.preventDefault();

  // if (searchQuery.trim() === '') {
  //   Notify.warning('Please enter movie name and try again');
  //   return;
  // }

  // RenderResults();
};

export const SearchBar = () => {
  // const [searchFilm, setSearchFilm] = useContext(SearchFilmContext);
  // console.log(searchFilm);
  return (
    <Form>
      <Label>
        <Input
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search movies..."
          required
        />
      </Label>
      <Button type="submit" class="header-form__btn">
        <SearchIcon color={color.accent} />
      </Button>
    </Form>
  );
};
