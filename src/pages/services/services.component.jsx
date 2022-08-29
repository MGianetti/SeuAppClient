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
} from './services.constants';

import { FiPlus } from 'react-icons/fi';

import NewService from './new';
import { Pagination, Table, Modal } from '../../components';
import { connect, useDispatch } from 'react-redux';
import {
  addService,
  fetchAllServices,
} from '../../store/services/servicesSlice';
import { getAll } from '../../services/service.service';

function Services(props) {
  const { services, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleDescriptionChange = e => setDescription(e.target.value);
  const handlePriceChange = valueString =>
    setPrice(valueString.replace(/^\$/, ''));

  const handleEmptyAfterSubmit = () => {
    setDescription('');
    setPrice('');
  };

  const newServiceProps = { description, price };
  const newServiceActions = { handlePriceChange, handleDescriptionChange };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllServices(getAll()));
  }, [dispatch]);

  const handleSubmit = () => {
    try {
      dispatch(addService(newServiceProps));
      handleEmptyAfterSubmit();
      alert('Serviço adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleAction={handleSubmit}
        modalTitle={SERVICE_MODAL_TITLE}
        closeButtonLabel={SERVICE_MODAL_CANCEL}
        actionLabel={SERVICE_MODAL_ACTION_LABEL}
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
        <Table columns={servicesColumns} data={services} />
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
