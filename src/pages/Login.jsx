import styled from 'styled-components';
import { Button } from 'modules/common';
import { Logo } from 'modules/header/components';
import { Hero } from 'modules/common/Hero';
import imageHero from 'images/window-login.jpg';
import { LoginForm } from 'modules/login/LoginForm';
import { color } from 'utils/stylesVars';
import { deviceScreen } from 'utils/stylesVars';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const HeroWrap = styled.div`
  ${deviceScreen.S} {
    display: none;
  }
  ${deviceScreen.M} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 50%;
    height: 100%;

    background-color: ${color.bg};
    color: ${color.light};
  }
  ${deviceScreen.XL} {
    padding: 80px;
  }
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: ${color.bgLight};
  ${deviceScreen.M} {
    width: 50%;
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeroWrap>
        <Hero image={imageHero} />
      </HeroWrap>
      <FormWrap>
        <Logo />
        <LoginForm />
        <Button onClick={() => navigate('/registration')}>Registration</Button>
      </FormWrap>
    </Container>
  );
};
