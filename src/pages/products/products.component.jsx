import React, { useEffect, useState } from 'react';

import {
  Heading,
  FormLabel,
  Text,
  Flex,
  Button,
  Input,
  Spinner,
} from '@chakra-ui/react';

import {
  NEW_PRODUCT_BUTTON,
  VIEW_PRODUCTS_DESCRIPTION,
  VIEW_PRODUCTS_PAGE_TITLE,
  PRODUCT_MODAL_TITLE,
  PRODUCT_MODAL_CANCEL,
  PRODUCT_MODAL_ACTION_LABEL,
  productsColumns,
  SEARCH_PRODUCT_PLACEHOLDER,
} from './products.constants';

import { FiPlus } from 'react-icons/fi';

import NewProduct from './new';
import { Pagination, Table, Modal } from '../../components';
import { connect, useDispatch } from 'react-redux';

import {
  fetchAllProducts,
  addProduct,
} from '../../store/products/productsSlice';
import { getAll } from '../../services/product.service';

function Products(props) {
  const { products, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);

  const handleEmptyAfterSubmit = () => {
    setDescription('');
    setPrice('');
    setCategory('');
  };

  const newProductProps = { description, price, category };
  const newProductActions = {
    handleDescriptionChange,
    handlePriceChange,
    handleCategoryChange,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts(getAll()));
  }, [dispatch]);

  const handleSubmit = () => {
    try {
      dispatch(addProduct(newProductProps));
      handleEmptyAfterSubmit();
      alert('Produto adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={PRODUCT_MODAL_TITLE}
        closeButtonLabel={PRODUCT_MODAL_CANCEL}
        actionLabel={PRODUCT_MODAL_ACTION_LABEL}
        handleAction={handleSubmit}
      >
        <NewProduct
          newProductProps={newProductProps}
          newProductActions={newProductActions}
        />
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
      {isLoading ? (
        <Spinner />
      ) : (
        <Table columns={productsColumns} data={products} />
      )}
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

const mapStateToProps = state => {
  const { products } = state;
  return products;
};

export default connect(mapStateToProps)(Products);
