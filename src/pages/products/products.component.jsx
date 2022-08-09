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
  Textarea,
} from '@chakra-ui/react';
import {
  CATEGORY_PLACEHOLDER,
  PRODUCT_ATTRIBUTES_LABEL,
  PRODUCT_ERROR,
  PRODUCT_PAGE_DESCRIPTION,
  PRODUCT_PAGE_TITLE,
  PRODUCT_TIPS_LABEL,
} from './products.constants';
import { CREATE_BUTTON_LABEL } from '../pages.constants';

function Client() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  // TODO Make error checking handler

  const isErrorName = false;
  const isErrorPrice = false;
  const isErrorCategory = false;
  const isErrorDescription = false;

  return (
    <>
      <Heading w="65%" minW="512px">
        {PRODUCT_PAGE_TITLE}
      </Heading>
      <FormLabel ml="16px" minW="512px" w="65%">
        {PRODUCT_PAGE_DESCRIPTION}
      </FormLabel>
      <Flex flexDir="column" w="65%" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorName}>
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.NAME}</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
            {!isErrorName ? (
              <FormHelperText>{PRODUCT_TIPS_LABEL.NAME}</FormHelperText>
            ) : (
              <FormErrorMessage>{PRODUCT_ERROR.NAME}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            isInvalid={isErrorPrice}
            onChange={handlePriceChange}
          >
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.PRICE}</FormLabel>
            <NumberInput allowMouseWheel value={price}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {!isErrorPrice ? (
              <FormHelperText>{PRODUCT_TIPS_LABEL.PRICE}</FormHelperText>
            ) : (
              <FormErrorMessage>{PRODUCT_ERROR.PRICE}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <Flex marginTop="32px" w="50%" alignSelf="self-start">
          <FormControl isInvalid={isErrorCategory}>
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.CATEGORY}</FormLabel>
            <Select
              value={category}
              placeholder={CATEGORY_PLACEHOLDER}
              onChange={handleCategoryChange}
            >
              <option>Cosméticos</option>
              <option>Bebidas</option>
            </Select>
            {!isErrorCategory ? (
              <FormHelperText>{PRODUCT_TIPS_LABEL.CATEGORY}</FormHelperText>
            ) : (
              <FormErrorMessage>{PRODUCT_ERROR.CATEGORY}.</FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <Flex marginTop="32px" w="100%" alignSelf="center">
          <FormControl isInvalid={isErrorDescription}>
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.DESCRIPTION}</FormLabel>
            <Textarea value={description} onChange={handleDescriptionChange} />
            {!isErrorDescription ? (
              <FormHelperText>{PRODUCT_TIPS_LABEL.DESCRIPTION}</FormHelperText>
            ) : (
              <FormErrorMessage>{PRODUCT_ERROR.DESCRIPTION}</FormErrorMessage>
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
