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
  CATEGORY_PLACEHOLDER,
} from '../products.constants';

const NewProduct = props => {
  const { newProductProps, newProductActions } = props;
  const { description, price, category, pageTitle } = newProductProps;
  const { handleDescriptionChange, handlePriceChange, handleCategoryChange } =
    newProductActions;

  // TODO Make error checking handler
  const isErrorDescription = false;
  const isErrorPrice = false;
  const isErrorCategory = false;

  return (
    <>
      <Heading w="auto" minW="512px" as="h1" size="lg">
        {pageTitle}
      </Heading>
      <Flex flexDir="column" minW="512px">
        <Flex marginTop="32px">
          <FormControl mr="64px" isRequired isInvalid={isErrorDescription}>
            <FormLabel>{PRODUCT_ATTRIBUTES_LABEL.DESCRIPTION}</FormLabel>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
            {!isErrorDescription ? (
              <FormHelperText>{PRODUCT_TIPS_LABEL.DESCRIPTION}</FormHelperText>
            ) : (
              <FormErrorMessage>{PRODUCT_ERROR.DESCRIPTION}</FormErrorMessage>
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

        <Flex marginTop="32px" w="50%">
          <FormControl isInvalid={isErrorCategory} mr="32px">
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
