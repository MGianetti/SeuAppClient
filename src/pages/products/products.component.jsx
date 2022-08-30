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
  PRODUCT_PAGE_TITLE,
  SEARCH_PRODUCT_PLACEHOLDER,
  PRODUCT_MODAL_TITLE_EDITING,
  PRODUCT_MODAL_ACTION_LABEL_EDITING,
  PRODUCT_PAGE_TITLE_EDIT,
} from './products.constants';

import { FiPlus } from 'react-icons/fi';

import NewProduct from './new';
import { Pagination, Table, Modal, RowActions } from '../../components';
import { connect, useDispatch } from 'react-redux';

import {
  getAllProductsAction,
  createProductAction,
  deleteProductAction,
  updateProductAction,
} from '../../store/products/productsSlice';

function Products(props) {
  const { products, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    handleEmptyAfterSubmit();
  };
  const handleModalOpen = () => setIsModalOpen(true);

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);

  const [productBeingEditedId, setProductBeingEditedId] = useState('');
  const isUserEditingProduct =
    productBeingEditedId === '' ? 'creating' : 'editing';

  const handleEmptyAfterSubmit = () => {
    setDescription('');
    setPrice('');
    setCategory('');
    setProductBeingEditedId('');
  };

  const modalActionsMapper = {
    creating: {
      modalTitle: PRODUCT_MODAL_TITLE,
      actionLabel: PRODUCT_MODAL_ACTION_LABEL,
      pageTitle: PRODUCT_PAGE_TITLE,
      handleAction: () => handleCreateProduct(),
    },
    editing: {
      modalTitle: PRODUCT_MODAL_TITLE_EDITING,
      actionLabel: PRODUCT_MODAL_ACTION_LABEL_EDITING,
      pageTitle: PRODUCT_PAGE_TITLE_EDIT,
      handleAction: () => handleEditProduct(),
    },
  };

  const newProductProps = {
    description,
    price,
    category,
    pageTitle: modalActionsMapper[isUserEditingProduct].pageTitle,
  };
  const newProductActions = {
    handleDescriptionChange,
    handlePriceChange,
    handleCategoryChange,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const handleCreateProduct = () => {
    try {
      dispatch(createProductAction(newProductProps));
      handleEmptyAfterSubmit();
      alert('Produto adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleDeleteProduct = documentId => {
    try {
      dispatch(deleteProductAction(documentId));
      alert('Produto deletado com sucesso!');
    } catch (e) {}
  };

  const handleEditProduct = () => {
    try {
      dispatch(updateProductAction({ productBeingEditedId, newProductProps }));
      alert('Produto editado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleOpenEditModal = productData => {
    const { description, price, category, id } = productData;
    setProductBeingEditedId(id);
    setDescription(description);
    setPrice(price);
    setCategory(category);
    setIsModalOpen(true);
  };

  const actionsCell = {
    Header: () => null,
    id: 'editor',
    Cell: ({ row }) => {
      return (
        <span>
          <RowActions
            rowData={row}
            handleDelete={handleDeleteProduct}
            handleEdit={handleOpenEditModal}
          />
        </span>
      );
    },
  };

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        closeButtonLabel={PRODUCT_MODAL_CANCEL}
        modalTitle={modalActionsMapper[isUserEditingProduct].modalTitle}
        actionLabel={modalActionsMapper[isUserEditingProduct].actionLabel}
        handleAction={modalActionsMapper[isUserEditingProduct].handleAction}
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
        <Table columns={[...productsColumns, actionsCell]} data={products} />
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
