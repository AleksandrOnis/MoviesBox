import styled from 'styled-components';
import { deviceScreen } from 'utils/stylesVars';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 20px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  ${deviceScreen.M} {
    padding: 30px;
    width: 768px;
  }
  ${deviceScreen.L} {
    width: 1024px;
  }
  ${deviceScreen.XL} {
    width: 1280px;
  }
`;
