import styled from 'styled-components';
import { color } from 'utils/stylesVars';

// .attrs(({ type }) => ({
//   type: type || 'button',
// }))`
const StyledButton = styled.button`
  margin: ${({ m }) => (m ? m : '0')};
  min-width: 120px;
  height: 40px;

  text-transform: uppercase;

  color: #fff;
  border: 1px solid ${color.accent};
  border-radius: 20px;
  background-color: ${acc => (acc ? 'transparent' : color.accent)};

  cursor: pointer;

  :hover,
  :focus {
  }
`;

export const Button = ({ children, acc, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
