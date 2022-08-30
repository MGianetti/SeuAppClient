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
  NEW_SERVICE_BUTTON,
  SEARCH_SERVICE_PLACEHOLDER,
  SERVICE_MODAL_ACTION_LABEL,
  SERVICE_MODAL_CANCEL,
  SERVICE_MODAL_TITLE,
  servicesColumns,
  VIEW_SERVICES_DESCRIPTION,
  VIEW_SERVICES_PAGE_TITLE,
  SERVICE_PAGE_TITLE,
  SERVICE_PAGE_TITLE_EDITING,
  SERVICE_MODAL_TITLE_EDITING,
  SERVICE_MODAL_ACTION_LABEL_EDITING,
} from './services.constants';

import { FiPlus } from 'react-icons/fi';

import NewService from './new';
import { Pagination, Table, Modal, RowActions } from '../../components';
import { connect, useDispatch } from 'react-redux';
import {
  getAllServicesAction,
  createServiceAction,
  deleteServiceAction,
  updateServiceAction,
} from '../../store/services/servicesSlice';

function Services(props) {
  const { services, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    handleEmptyAfterSubmit();
  };
  const handleModalOpen = () => setIsModalOpen(true);

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleDescriptionChange = e => setDescription(e.target.value);
  const handlePriceChange = valueString =>
    setPrice(valueString.replace(/^\$/, ''));

  const [serviceBeingEditedId, setServiceBeingEditedId] = useState('');
  const isUserEditingService =
    serviceBeingEditedId === '' ? 'creating' : 'editing';

  const handleEmptyAfterSubmit = () => {
    setDescription('');
    setPrice('');
    setServiceBeingEditedId('');
  };

  const modalActionsMapper = {
    creating: {
      modalTitle: SERVICE_MODAL_TITLE,
      actionLabel: SERVICE_MODAL_ACTION_LABEL,
      pageTitle: SERVICE_PAGE_TITLE,
      handleAction: () => handleCreateService(),
    },
    editing: {
      modalTitle: SERVICE_MODAL_TITLE_EDITING,
      actionLabel: SERVICE_MODAL_ACTION_LABEL_EDITING,
      pageTitle: SERVICE_PAGE_TITLE_EDITING,
      handleAction: () => handleEditService(),
    },
  };

  const newServiceProps = {
    description,
    price,
    pageTitle: modalActionsMapper[isUserEditingService].pageTitle,
  };
  const newServiceActions = { handlePriceChange, handleDescriptionChange };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServicesAction());
  }, [dispatch]);

  const handleCreateService = () => {
    try {
      dispatch(createServiceAction(newServiceProps));
      handleEmptyAfterSubmit();
      alert('Serviço adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleDeleteService = documentId => {
    try {
      dispatch(deleteServiceAction(documentId));
      alert('Servicee deletado com sucesso!');
    } catch (e) {}
  };

  const handleEditService = () => {
    try {
      dispatch(updateServiceAction({ serviceBeingEditedId, newServiceProps }));
      alert('Serviço editado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleOpenEditModal = serviceData => {
    const { description, price, id } = serviceData;
    setServiceBeingEditedId(id);
    setDescription(description);
    setPrice(price);
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
            handleDelete={handleDeleteService}
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
        closeButtonLabel={SERVICE_MODAL_CANCEL}
        modalTitle={modalActionsMapper[isUserEditingService].modalTitle}
        actionLabel={modalActionsMapper[isUserEditingService].actionLabel}
        handleAction={modalActionsMapper[isUserEditingService].handleAction}
        modalSize="2xl"
      >
        <NewService
          newServiceProps={newServiceProps}
          newServiceActions={newServiceActions}
        />
      </Modal>
      <Button
        leftIcon={<FiPlus />}
        alignSelf="flex-start"
        mb="16px"
        onClick={handleModalOpen}
      >
        {NEW_SERVICE_BUTTON}
      </Button>
      <Flex justifyContent="space-between" w="100%">
        <Heading w="100%" minW="512px" as="h1" size="lg">
          {VIEW_SERVICES_PAGE_TITLE}
        </Heading>
        <Input placeholder={SEARCH_SERVICE_PLACEHOLDER} maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_SERVICES_DESCRIPTION}
      </FormLabel>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table columns={[...servicesColumns, actionsCell]} data={services} />
      )}
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

const mapStateToProps = state => {
  const { services } = state;
  return services;
};

export default connect(mapStateToProps)(Services);
