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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

import {
  CLIENT_PAGE_DESCRIPTION,
  CLIENT_PAGE_TITLE,
  CLIENT_ATTRIBUTES_LABEL,
  CLIENT_TIPS_LABEL,
  CLIENT_ERROR,
  SEX_PLACEHOLDER,
  SEX_OPTIONS,
} from './clients.constants';

import { CREATE_BUTTON_LABEL } from '../pages.constants';

function Client() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [sex, setSex] = useState();
  const [age, setAge] = useState(30);

  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleSexChange = e => setSex(e.target.value);
  const handleAgeChange = age => setAge(age);

  // TODO Make error checking handler
  const isErrorEmail = false;
  const isErrorName = false;
  const isErrorCellphone = false;
  const isErrorSex = false;
  const isErrorAge = false;

  return (
    <>
      <Heading w="65%" minW="512px">
        {CLIENT_PAGE_TITLE}
      </Heading>
      <FormLabel ml="16px" minW="512px" w="65%">
        {CLIENT_PAGE_DESCRIPTION}
      </FormLabel>
      <Flex flexDir="column" w="65%" minW="512px">
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
          <FormControl isRequired isInvalid={isErrorEmail}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.EMAIL}</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
            {!isErrorEmail ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.EMAIL}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.EMAIL}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorName}>
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
        <Flex marginTop="32px" w="50%" alignSelf="center">
          <FormControl isInvalid={isErrorAge}>
            <FormLabel>{CLIENT_ATTRIBUTES_LABEL.AGE}</FormLabel>
            <Flex>
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={age}
                onChange={handleAgeChange}
                max={120}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                focusThumbOnChange={false}
                value={age}
                onChange={handleAgeChange}
              >
                <SliderTrack max={120}>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={age} />
              </Slider>
            </Flex>
            {!isErrorAge ? (
              <FormHelperText>{CLIENT_TIPS_LABEL.AGE}</FormHelperText>
            ) : (
              <FormErrorMessage>{CLIENT_ERROR.AGE}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex w="100%" justifyContent="flex-end" mt="32px">
          <Button>{CREATE_BUTTON_LABEL}</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default memo(Client);
