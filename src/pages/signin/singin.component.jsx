import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Divider,
  Button,
} from '@chakra-ui/react';

import {
  SIGNUP_KEYS,
  SIGNUP_ATTRIBUTES_LABEL,
  SIGNUP_EMAIL_PLACEHOLDER,
  SIGNUP_PASSWORD_PLACEHOLDER,
  SIGNUP_CONFIRM_PASSWORD_PLACEHOLDER,
} from './signin.constants';

import { useAuth } from '../../components/contexts/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const [loading, setCreateButtonLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassWord = e => {
    setPassWord(e.target.value);
  };

  const isErrorEmail = false;
  const isErrorPassWord = false;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setCreateButtonLoading(true);
      await signIn({ email, password });
      alert('Logado com sucesso');
      navigate('/clients');
      setCreateButtonLoading(false);
    } catch (error) {
      alert('Falha ao logar');
      setCreateButtonLoading(false);
    }
  };

  return (
    <>
      <Heading
        justifyContent="center"
        w="auto"
        minW="256px"
        maxW="256px"
        as="h1"
        size="lg"
        display="flex"
      >
        Seu app
      </Heading>
      <Flex flexDir="column" w="100%" minW="256px">
        <FormControl pt="32px" isRequired isInvalid={isErrorEmail}>
          <FormLabel>{SIGNUP_ATTRIBUTES_LABEL.EMAIL}</FormLabel>
          <Input type="email" value={email} onChange={handleChangeEmail} />
          {isErrorEmail && <FormErrorMessage>{'Error'}</FormErrorMessage>}
        </FormControl>
        <FormControl pt="32px" isRequired isInvalid={isErrorPassWord}>
          <FormLabel>{SIGNUP_ATTRIBUTES_LABEL.PASSWORD}</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handleChangePassWord}
          />
          {isErrorPassWord && <FormErrorMessage>{'Error'}</FormErrorMessage>}
        </FormControl>
        <Button
          m="32px 0"
          colorScheme="facebook"
          isLoading={loading}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <Divider />
        <Button
          m="32px 0"
          colorScheme="facebook"
          variant="link"
          isLoading={loading}
          onClick={() => navigate('/signup')}
        >
          Criar uma conta
        </Button>
      </Flex>
    </>
  );
};

export default memo(Signin);
