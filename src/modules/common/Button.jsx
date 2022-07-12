import styled, { css } from 'styled-components';
import { color } from 'utils/stylesVars';
import { SpinnerCircles } from '.';

export const Button = ({ children, isLoading, ...otherProps }) => {
  return <StyledButton {...otherProps}>{isLoading ? <SpinnerCircles /> : children}</StyledButton>;
};

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  margin: ${({ m }) => (m ? m : '0')};
  min-width: ${({ w }) => (w ? w : '120px')};
  height: 40px;

  padding-top: 5px;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({ colorText }) => (colorText ? colorText : color.light)};

  border: 2px solid ${color.accent};
  border-radius: 20px;
  background-color: ${({ accent }) => (accent ? color.accent : 'transparent')};

  cursor: pointer;

  :hover {
    transform: scale(1.05);
    box-shadow: ${({ accent }) =>
      accent ? '5px 5px 8px rgba(0, 0, 0, 0.6)' : '4px 4px 5px rgba(255, 107, 1, 0.6)'};
  }

  :focus-visible {
    transform: scale(1.05);
    box-shadow: ${({ accent }) =>
      accent ? '5px 5px 8px rgba(0, 0, 0, 0.6)' : '4px 4px 5px rgba(255, 107, 1, 0.6)'};
  }

  &:disabled {
    color: #000;
    background: lightGrey;
    border: none;
    :hover,
    :focus {
      transform: scale(1);
      box-shadow: none;
    }
  }
`;
