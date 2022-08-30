import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Divider,
  Button,
  FormHelperText,
} from '@chakra-ui/react';

import {
  SIGNIN_ATTRIBUTES_LABEL,
  SIGNIN_ERROR,
  SIGNIN_TIPS_LABEL,
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
          <FormLabel>{SIGNIN_ATTRIBUTES_LABEL.EMAIL}</FormLabel>
          <Input type="email" value={email} onChange={handleChangeEmail} />
          {!isErrorEmail ? (
            <FormHelperText>{SIGNIN_TIPS_LABEL.EMAIL}</FormHelperText>
          ) : (
            <FormErrorMessage>{SIGNIN_ERROR.EMAIL}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl pt="32px" isRequired isInvalid={isErrorPassWord}>
          <FormLabel>{SIGNIN_ATTRIBUTES_LABEL.PASSWORD}</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handleChangePassWord}
          />
          {!isErrorPassWord ? (
            <FormHelperText>{SIGNIN_TIPS_LABEL.PASSWORD}</FormHelperText>
          ) : (
            <FormErrorMessage>{SIGNIN_ERROR.PASSWORD}</FormErrorMessage>
          )}
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
