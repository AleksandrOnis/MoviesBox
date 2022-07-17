import styled from 'styled-components';
import { Input, Button } from 'modules/common';
import { useState } from 'react';
import mail from 'images/authorization/mail.svg';
import lock from 'images/authorization/lock.svg';
import human from 'images/authorization/human.svg';
import { useRegisterUserMutation } from 'api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const body = { name, email, password };
    try {
      const response = await registerUser(body);
      if (response.error) throw new Error(response.error.data.message);
      toast.success('You are successfully registered');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder={'Name'}
        type="text"
        value={name}
        setValue={setName}
        icon={human}
        mb="30px"
        required
      />
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
      {/* <Button type="submit" accent disabled={!name || !email || !password}> */}
      <Button type="submit" accent isLoading={isLoading}>
        Registration
      </Button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;
