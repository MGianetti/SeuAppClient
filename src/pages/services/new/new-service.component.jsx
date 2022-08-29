import React, { memo } from 'react';

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Heading,
} from '@chakra-ui/react';

import {
  SERVICE_ATTRIBUTES_LABEL,
  SERVICE_ERROR,
  SERVICE_TIPS_LABEL,
  SERVICE_PAGE_TITLE,
} from '../services.constants';

const NewService = props => {
  const { newServiceProps, newServiceActions } = props;
  const { description, price } = newServiceProps;
  const { handlePriceChange, handleDescriptionChange } = newServiceActions;

  // TODO Make error checking handler
  const isErrorPrice = false;
  const isErrorDescription = false;

  return (
    <>
      <Heading w="auto" minW="512px" as="h1" size="lg">
        {SERVICE_PAGE_TITLE}
      </Heading>
      <Flex flexDir="column" w="100%" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorDescription}>
            <FormLabel>{SERVICE_ATTRIBUTES_LABEL.DESCRIPTION}</FormLabel>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
            {!isErrorDescription ? (
              <FormHelperText>{SERVICE_TIPS_LABEL.DESCRIPTION}</FormHelperText>
            ) : (
              <FormErrorMessage>{SERVICE_ERROR.DESCRIPTION}</FormErrorMessage>
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
      </Flex>
    </>
  );
};

export default memo(NewService);
