import styled from 'styled-components';
import { color } from 'utils/stylesVars';

export const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  margin: ${({ m }) => (m ? m : '0')};
  min-width: ${({ w }) => (w ? w : '120px')};
  height: 40px;

  padding: 10px;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;

  border: 2px solid ${color.accent};
  border-radius: 20px;
  background-color: ${({ accent }) => (accent ? color.accent : 'transparent')};

  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: ${({ accent }) =>
      accent ? '5px 5px 8px rgba(0, 0, 0, 0.6)' : '4px 4px 5px rgba(255, 107, 1, 0.6)'};
  }
`;
