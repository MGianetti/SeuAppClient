import React, { memo, useState } from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';

import {
  PROFESSIONAL_ATTRIBUTES_LABEL,
  PROFESSIONAL_ERROR,
  PROFESSIONAL_PAGE_TITLE,
  PROFESSIONAL_TIPS_LABEL,
} from '../professionals.constants';

function NewProfessional() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cellphone, setCellphone] = useState();
  const [email, setEmail] = useState(30);

  const handleNameChange = e => setName(e.target.value);
  const handleNicknameChange = e => setNickname(e.target.value);
  const handleCpfChange = e => setCpf(e.target.value);
  const handleCnpjChange = e => setCnpj(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);

  // TODO Make error checking handler
  const isErrorName = false;
  const isErrorNickname = false;
  const isErrorCpf = false;
  const isErrorCnpj = false;
  const isErrorCellphone = false;
  const isErrorEmail = false;

  return (
    <>
      <Heading w="auto" minW="512px" as="h1" size="lg">
        {PROFESSIONAL_PAGE_TITLE}
      </Heading>
      <Flex flexDir="column" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorName}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.NAME}</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
            {!isErrorName ? (
              <FormHelperText>{PROFESSIONAL_TIPS_LABEL.NAME}</FormHelperText>
            ) : (
              <FormErrorMessage>{PROFESSIONAL_ERROR.NAME}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorNickname}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.NICK_NAME}</FormLabel>
            <Input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
            {!isErrorNickname ? (
              <FormHelperText>
                {PROFESSIONAL_TIPS_LABEL.NICK_NAME}
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                {PROFESSIONAL_ERROR.NICK_NAME}
              </FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorCpf}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.CPF}</FormLabel>
            <Input type="tel" value={cpf} onChange={handleCpfChange} />
            {!isErrorCpf ? (
              <FormHelperText>{PROFESSIONAL_TIPS_LABEL.CPF}</FormHelperText>
            ) : (
              <FormErrorMessage>{PROFESSIONAL_ERROR.CPF}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorCnpj}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.CNPJ}</FormLabel>
            <Input type="email" value={cnpj} onChange={handleCnpjChange} />
            {!isErrorCnpj ? (
              <FormHelperText>{PROFESSIONAL_TIPS_LABEL.CNPJ}</FormHelperText>
            ) : (
              <FormErrorMessage>{PROFESSIONAL_ERROR.CNPJ}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorCellphone}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.CELLPHONE}</FormLabel>
            <Input
              type="tel"
              value={cellphone}
              onChange={handleCellphoneChange}
            />
            {!isErrorCellphone ? (
              <FormHelperText>
                {PROFESSIONAL_TIPS_LABEL.CELLPHONE}
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                {PROFESSIONAL_ERROR.CELLPHONE}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorEmail}>
            <FormLabel>{PROFESSIONAL_ATTRIBUTES_LABEL.EMAIL}</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
            {!isErrorEmail ? (
              <FormHelperText>{PROFESSIONAL_TIPS_LABEL.EMAIL}</FormHelperText>
            ) : (
              <FormErrorMessage>{PROFESSIONAL_ERROR.EMAIL}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
}

export default memo(NewProfessional);
