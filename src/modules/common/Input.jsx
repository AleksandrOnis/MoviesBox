import styled from 'styled-components';
import { color } from 'utils/stylesVars';

const InputWrap = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
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

const Icon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 8px;
  bottom: 8px;
`;

export const Input = ({ icon, ...otherProps }) => {
  return (
    <InputWrap>
      <StyledInput {...otherProps} />
      {icon && <Icon src={icon} />}
    </InputWrap>
  );
};
