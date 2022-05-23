import styled from 'styled-components';
import { Container } from 'modules/common';
import { Logo } from 'modules/header/components';
import { Hero } from 'modules/common/Hero';
import bgImage from 'images/window-login.jpg';
import { LoginForm } from 'modules/login/LoginForm';
import { color } from 'utils/stylesVars';
import { deviceScreen } from 'utils/stylesVars';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  background-color: ${color.bg};
`;

const FormWrap = styled.div`
  ${deviceScreen.L} {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
  }
`;

export const Login = () => {
  return (
    <>
      <StyledContainer>
        <Hero bg={bgImage} />
        <FormWrap>
          <Logo />
          <LoginForm />
        </FormWrap>
      </StyledContainer>
    </>
  );
};
