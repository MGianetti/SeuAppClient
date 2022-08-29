import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Heading,
  FormLabel,
  Text,
  Flex,
  Button,
  Input,
  Spinner,
} from '@chakra-ui/react';

import { FiPlus } from 'react-icons/fi';

import NewClient from './new';
import { Pagination, Table, Modal } from '../../components';

import {
  NEW_CLIENT_BUTTON,
  VIEW_CLIENTS_DESCRIPTION,
  VIEW_CLIENTS_PAGE_TITLE,
  CLIENT_MODAL_TITLE,
  CLIENT_MODAL_CANCEL,
  CLIENT_MODAL_ACTION_LABEL,
  SEARCH_CLIENT_PLACEHOLDER,
  clientColumn,
} from './clients.constants';

import { fetchAllClients, addClient } from '../../store/clients/clientsSlice';
import { getAll } from '../../services/client.service';

function Clients(props) {
  const { clients, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [sex, setSex] = useState();
  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleSexChange = e => setSex(e.target.value);
  const handleEmptyAfterSubmit = () => {
    setName('');
    setEmail('');
    setCellphone('');
    setSex('');
  };

  const newClientProps = { name, email, cellphone, sex };
  const newClientActions = {
    handleEmailChange,
    handleNameChange,
    handleCellphoneChange,
    handleSexChange,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClients(getAll()));
  }, [dispatch]);

  const handleSubmit = () => {
    try {
      dispatch(addClient(newClientProps));
      handleEmptyAfterSubmit();
      alert('Cliente adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={CLIENT_MODAL_TITLE}
        closeButtonLabel={CLIENT_MODAL_CANCEL}
        actionLabel={CLIENT_MODAL_ACTION_LABEL}
        handleAction={handleSubmit}
      >
        <NewClient
          newClientProps={newClientProps}
          newClientActions={newClientActions}
        />
      </Modal>
      <Button
        leftIcon={<FiPlus />}
        alignSelf="flex-start"
        mb="16px"
        onClick={handleModalOpen}
      >
        {NEW_CLIENT_BUTTON}
      </Button>
      <Flex justifyContent="space-between" w="100%">
        <Heading w="100%" minW="512px" as="h1" size="lg">
          {VIEW_CLIENTS_PAGE_TITLE}
        </Heading>
        <Input placeholder={SEARCH_CLIENT_PLACEHOLDER} maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_CLIENTS_DESCRIPTION}
      </FormLabel>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table columns={clientColumn} data={clients} />
      )}
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

const mapStateToProps = state => {
  const { clients } = state;
  return clients;
};

export default connect(mapStateToProps)(Clients);
