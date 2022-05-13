import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { color } from 'utils/stylesVars';

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

  line-height: 1.24;
  letter-spacing: 0.02em;

  border: none;
  border-bottom: 1px solid ${color.accent};
  color: #fff;
  outline: none;
  background: transparent;

  // bg autoComplete
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: 'color 9999s ease-out, #000 9999s ease-out';
    transition-delay: 9999s;
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
    <Form>
      <Label>
        <Input
          autoComplete="off"
          type="text"
          name="searchQuery"
          placeholder="Search movies..."
          required
        />
      </Label>
      <Button type="submit">
        <SearchIcon color={color.accent} />
      </Button>
    </Form>
  );
};
