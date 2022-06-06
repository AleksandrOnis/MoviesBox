import styled from 'styled-components';

export const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  flex-grow: 1;
  background: ${props => props.theme.BACKGROUND_COLOR};
  color: ${props => props.theme.TEXT_COLOR};
`;
