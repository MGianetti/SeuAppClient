import React, { memo, useState } from 'react';

import {
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
} from '@chakra-ui/react';

import {
  PRODUCT_ATTRIBUTES_LABEL,
  PRODUCT_ERROR,
  PRODUCT_TIPS_LABEL,
  PRODUCT_PAGE_TITLE,
  CATEGORY_PLACEHOLDER,
} from '../products.constants';

const NewProduct = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleDescriptionChange = e => setDescription(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);

  // TODO Make error checking handler

  const isErrorDescription = false;
  const isErrorPrice = false;
  const isErrorCategory = false;

  return (
    <>
      <Heading w="65%" minW="512px">
        {PRODUCT_PAGE_TITLE}
      </Heading>
      <Flex flexDir="column" w="65%" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorDescription}>
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.NAME}</FormLabel>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
            {!isErrorDescription ? (
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
      </Flex>
    </>
  );
};

export default memo(NewProduct);
