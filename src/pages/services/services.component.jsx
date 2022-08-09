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
  Textarea,
} from '@chakra-ui/react';
import {
  SERVICE_ATTRIBUTES_LABEL,
  SERVICE_ERROR,
  SERVICE_PAGE_DESCRIPTION,
  SERVICE_PAGE_TITLE,
  SERVICE_TIPS_LABEL,
} from './services.constants';
import { CREATE_BUTTON_LABEL } from '../pages.constants';

function Services() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  // TODO Make error checking handler
  const isErrorName = false;
  const isErrorPrice = false;
  const isErrorDescription = false;

  return (
    <>
      <Heading w="65%" minW="512px">
        {SERVICE_PAGE_TITLE}
      </Heading>
      <FormLabel ml="16px" minW="512px" w="65%">
        {SERVICE_PAGE_DESCRIPTION}
      </FormLabel>
      <Flex flexDir="column" w="65%" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorName}>
            <FormLabel>{SERVICE_ATTRIBUTES_LABEL.NAME}</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
            {!isErrorName ? (
              <FormHelperText>{SERVICE_TIPS_LABEL.NAME}</FormHelperText>
            ) : (
              <FormErrorMessage>{SERVICE_ERROR.NAME}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorPrice}>
            <FormLabel>{SERVICE_ATTRIBUTES_LABEL.PRICE}</FormLabel>
            <NumberInput
              allowMouseWheel
              value={price}
              onChange={handlePriceChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {!isErrorPrice ? (
              <FormHelperText>{SERVICE_TIPS_LABEL.PRICE}</FormHelperText>
            ) : (
              <FormErrorMessage>{SERVICE_ERROR.PRICE}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <Flex marginTop="32px" w="100%" alignSelf="center">
          <FormControl isInvalid={isErrorDescription}>
            <FormLabel>{SERVICE_ATTRIBUTES_LABEL.DESCRIPTION}</FormLabel>
            <Textarea value={description} onChange={handleDescriptionChange} />
            {!isErrorDescription ? (
              <FormHelperText>{SERVICE_TIPS_LABEL.DESCRIPTION}</FormHelperText>
            ) : (
              <FormErrorMessage>{SERVICE_ERROR.DESCRIPTION}</FormErrorMessage>
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

export default memo(Services);
