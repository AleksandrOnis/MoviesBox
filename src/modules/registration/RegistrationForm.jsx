import styled from 'styled-components';
import { Input, Button } from 'modules/common';
import { useState } from 'react';
import mail from 'images/authorization/mail.svg';
import lock from 'images/authorization/lock.svg';
import human from 'images/authorization/human.svg';
import { registerUser } from 'api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  text-align: center;
`;

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const body = { name, email, password };
    // console.table(body);
    try {
      const result = await registerUser(body);
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
      <Button type="submit" accent disabled={!name || !email || !password}>
        Registration
      </Button>
    </Form>
  );
};