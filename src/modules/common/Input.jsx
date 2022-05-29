import styled from 'styled-components';
import { color } from 'utils/stylesVars';

const InputWrap = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: ${({ icon }) => (icon ? '5px 5px 5px 40px' : '5px')};
  width: 280px;
  margin-bottom: ${({ mb }) => (mb ? mb : '0px')};
  margin-right: ${({ mr }) => (mr ? mr : '0px')};
  font-size: 16px;
  line-height: 1.2;
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
  top: -2px;
  left: 8px;
`;

export const Input = ({ icon, setValue, onChange, ...otherProps }) => {
  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <InputWrap>
      <StyledInput icon={icon} onChange={onChange ? onChange : handleChange} {...otherProps} />
      {icon && <Icon src={icon} />}
    </InputWrap>
  );
};
