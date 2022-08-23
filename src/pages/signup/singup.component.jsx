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
} from './signup.constants';

import { useAuth } from '../../components/contexts/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [confirmPassWord, setConfirmPassWord] = useState('');
  const [loading, setCreateButtonLoading] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassWord = e => {
    setPassWord(e.target.value);
  };
  const handleChangeConfirmPassWord = e => {
    setConfirmPassWord(e.target.value);
  };

  const isErrorEmail = false;
  const isErrorPassWord = false;
  const isErrorConfirmPassWord = password !== confirmPassWord;

  const handleSubmit = async e => {
    e.preventDefault();

    if (isErrorConfirmPassWord) {
      return;
    }
    try {
      setCreateButtonLoading(true);
      await createUser({ email, password });
      setCreateButtonLoading(false);
      navigate('/clients');
      alert('Conta criada com sucesso');
    } catch (error) {
      alert('Falha ao criar a conta');
      setCreateButtonLoading(false);
    }
  };

  return (
    <>
      <Heading
        justifyContent="center"
        w="auto"
        minW="256px"
        as="h1"
        size="lg"
        display="flex"
      >
        Cadastre-se
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
        <FormControl pt="32px" isRequired isInvalid={isErrorConfirmPassWord}>
          <FormLabel>{SIGNUP_ATTRIBUTES_LABEL.CONFIRM_PASSWORD}</FormLabel>
          <Input
            type="password"
            value={confirmPassWord}
            onChange={handleChangeConfirmPassWord}
          />
          {isErrorConfirmPassWord && (
            <FormErrorMessage>{'Error'}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          m="32px 0"
          colorScheme="facebook"
          isLoading={loading}
          onClick={handleSubmit}
        >
          Cadastrar
        </Button>
        <Divider />
        <Button
          m="32px 0"
          colorScheme="facebook"
          variant="link"
          isLoading={loading}
          onClick={() => navigate('/')}
        >
          Já tenho uma conta
        </Button>
      </Flex>
    </>
  );
};

export default memo(Signup);
