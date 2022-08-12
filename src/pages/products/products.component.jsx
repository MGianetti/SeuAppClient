import React, { memo, useState } from 'react';

import {
  Heading,
  FormLabel,
  Text,
  Flex,
  Button,
  Input,
} from '@chakra-ui/react';

import {
  NEW_PRODUCT_BUTTON,
  VIEW_PRODUCTS_DESCRIPTION,
  VIEW_PRODUCTS_PAGE_TITLE,
  PRODUCT_MODAL_TITLE,
  PRODUCT_MODAL_CANCEL,
  PRODUCT_MODAL_ACTION_LABEL,
  productsColumns,
  productsMockData,
  SEARCH_PRODUCT_PLACEHOLDER,
} from './products.constants';

import { FiPlus } from 'react-icons/fi';

import NewService from './new';
import { Pagination, Table, Modal } from '../../components';

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);
  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={PRODUCT_MODAL_TITLE}
        closeButtonLabel={PRODUCT_MODAL_CANCEL}
        actionLabel={PRODUCT_MODAL_ACTION_LABEL}
        modalSize="2xl"
      >
        <NewService />
      </Modal>
      <Button
        leftIcon={<FiPlus />}
        alignSelf="flex-start"
        mb="16px"
        onClick={handleModalOpen}
      >
        {NEW_PRODUCT_BUTTON}
      </Button>
      <Flex justifyContent="space-between" w="100%">
        <Heading w="100%" minW="512px" as="h1" size="lg">
          {VIEW_PRODUCTS_PAGE_TITLE}
        </Heading>
        <Input placeholder={SEARCH_PRODUCT_PLACEHOLDER} maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_PRODUCTS_DESCRIPTION}
      </FormLabel>
      <Table columns={productsColumns} data={productsMockData} />
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

export default memo(Products);
