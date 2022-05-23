import styled from 'styled-components';
import { Input, Button } from 'modules/common';
import { useState } from 'react';
import mail from 'images/authorization/mail.svg';
import lock from 'images/authorization/lock.svg';

const Form = styled.form`
  text-align: center;
`;

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {};

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name={email}
        placeholder={'E-mail'}
        type="email"
        onChange={setEmail}
        icon={mail}
        mb="30px"
        required
      />
      <Input
        name="password"
        placeholder={'Password'}
        type="password"
        onChange={setPassword}
        icon={lock}
        mb="30px"
        required
      />
      <Button type="submit" accent disabled={!email || !password}>
        Login
      </Button>
    </Form>
  );
};
