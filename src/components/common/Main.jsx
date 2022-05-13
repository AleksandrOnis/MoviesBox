import styled from 'styled-components';

const StyledMain = styled.main`
  flex-grow: 1;
  /* background-image: url(${props => props.theme.body}); */
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
`;

export const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
