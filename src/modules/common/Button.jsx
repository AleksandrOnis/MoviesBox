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
  background-color: ${({ accent }) => (accent ? color.accent : 'transparent')};

  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 4px 4px 5px rgba(37, 37, 37, 0.6);
  }
`;

export const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
