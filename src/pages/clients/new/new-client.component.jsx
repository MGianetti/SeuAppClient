import React, { memo, useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';

import {
  CLIENT_PAGE_TITLE,
  CLIENT_ATTRIBUTES_LABEL,
  CLIENT_TIPS_LABEL,
  CLIENT_ERROR,
  SEX_PLACEHOLDER,
  SEX_OPTIONS,
} from '../clients.constants';

function NewClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [sex, setSex] = useState();

  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleSexChange = e => setSex(e.target.value);

  // TODO Make error checking handler
  const isErrorEmail = false;
  const isErrorName = false;
  const isErrorCellphone = false;
  const isErrorSex = false;

  return (
    <>
      <Heading w="auto" minW="512px">
        {CLIENT_PAGE_TITLE}
      </Heading>
      <Flex flexDir="column" w="auto" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorName}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.NAME}</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
            {!isErrorName ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.NAME}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.NAME}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorName}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.CELLPHONE}</FormLabel>
            <Input
              type="tel"
              value={cellphone}
              onChange={handleCellphoneChange}
            />
            {!isErrorCellphone ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.CELLPHONE}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.CELLPHONE}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex marginTop="32px">
          <FormControl mr="64px" isInvalid={isErrorEmail}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.EMAIL}</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
            {!isErrorEmail ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.EMAIL}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.EMAIL}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorSex}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.SEX}</FormLabel>
            <Select
              value={sex}
              placeholder={SEX_PLACEHOLDER}
              onChange={handleSexChange}
            >
              <option>{SEX_OPTIONS.MALE}</option>
              <option>{SEX_OPTIONS.FEMALE}</option>
            </Select>
            {!isErrorCellphone ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.SEX}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.SEX}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
}

export default memo(NewClient);
