import styled from 'styled-components';
import { Input, Button } from 'modules/common';
import { useState } from 'react';
import mail from 'images/authorization/mail.svg';
import lock from 'images/authorization/lock.svg';
import { useNavigate } from 'react-router-dom';

const Form = styled.form``;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.prevent.default();
    console.log('event', event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder={'E-mail'}
        type="email"
        value={email}
        onChange={setEmail}
        icon={mail}
        required
      />
      <Input
        placeholder={'Password'}
        type="password"
        value={password}
        onChange={setPassword}
        icon={lock}
        required
      />
      <Button type="submit" acc disabled={!email || !password}>
        Login
      </Button>
      <Button type="button" onClick={() => navigate('registration')}>
        Registration
      </Button>
    </Form>
  );
};
