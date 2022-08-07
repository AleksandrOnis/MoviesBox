import styled from 'styled-components';
import { Input, Button } from 'modules/common';
import { useState } from 'react';
import mail from 'images/authorization/mail.svg';
import lock from 'images/authorization/lock.svg';
import { useLoginUserMutation } from 'api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/userSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const body = { email, password };
    try {
      const response = await loginUser(body);
      if (response.error) throw new Error(response.error.data.message);
      dispatch(logIn(response));
      navigate('/library');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder={'E-mail'}
        type="email"
        value={email}
        setValue={setEmail}
        icon={mail}
        mb="30px"
        required
      />
      <Input
        name="password"
        placeholder={'Password'}
        type="password"
        value={password}
        setValue={setPassword}
        icon={lock}
        mb="30px"
        required
      />
      <Button type="submit" accent disabled={isLoading} isLoading={isLoading}>
        Login
      </Button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;
