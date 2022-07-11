import styled from 'styled-components';

export const NotFound = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.p`
  margin-top: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  text-align: center;
`;
