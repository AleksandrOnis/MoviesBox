import styled from 'styled-components';
import { color } from 'utils/theme';

const StyledLogin = styled.div`
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  line-height: 1.24;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #fff;

  :hover,
  :focus {
    color: ${color.accent};
  }
`;

export const Login = () => {
  return <StyledLogin>Login</StyledLogin>;
};
