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
import { Pagination, Table, Modal, RowActions } from '../../components';

import {
  CLIENT_MODAL_ACTION_LABEL_EDITING,
  CLIENT_MODAL_ACTION_LABEL,
  CLIENT_MODAL_CANCEL,
  CLIENT_MODAL_TITLE_EDITING,
  CLIENT_MODAL_TITLE,
  clientColumn,
  NEW_CLIENT_BUTTON,
  SEARCH_CLIENT_PLACEHOLDER,
  VIEW_CLIENTS_DESCRIPTION,
  VIEW_CLIENTS_PAGE_TITLE,
  CLIENT_PAGE_TITLE,
  CLIENT_PAGE_TITLE_EDIT,
} from './clients.constants';

import {
  getAllClientsAction,
  createClientAction,
  deleteClientAction,
  updateClientAction,
} from '../../store/clients/clientsSlice';

function Clients(props) {
  const { clients, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    handleEmptyAfterSubmit();
  };
  const handleModalOpen = () => setIsModalOpen(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [sex, setSex] = useState();
  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleSexChange = e => setSex(e.target.value);

  const [clientBeingEditedId, setClientBeingEditedId] = useState('');
  const isUserEditingClient =
    clientBeingEditedId === '' ? 'creating' : 'editing';

  const handleEmptyAfterSubmit = () => {
    setName('');
    setEmail('');
    setCellphone('');
    setSex('');
    setClientBeingEditedId('');
  };

  const modalActionsMapper = {
    creating: {
      modalTitle: CLIENT_MODAL_TITLE,
      actionLabel: CLIENT_MODAL_ACTION_LABEL,
      pageTitle: CLIENT_PAGE_TITLE,
      handleAction: () => handleCreateClient(),
    },
    editing: {
      modalTitle: CLIENT_MODAL_TITLE_EDITING,
      actionLabel: CLIENT_MODAL_ACTION_LABEL_EDITING,
      pageTitle: CLIENT_PAGE_TITLE_EDIT,
      handleAction: () => handleEditClient(),
    },
  };

  const newClientProps = {
    name,
    email,
    cellphone,
    sex,
    pageTitle: modalActionsMapper[isUserEditingClient].pageTitle,
  };
  const newClientActions = {
    handleEmailChange,
    handleNameChange,
    handleCellphoneChange,
    handleSexChange,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientsAction());
  }, []);

  // TODO create a method and label object look up
  const handleCreateClient = () => {
    try {
      dispatch(createClientAction(newClientProps));
      handleEmptyAfterSubmit();
      alert('Cliente adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleDeleteClient = documentId => {
    try {
      dispatch(deleteClientAction(documentId));
      alert('Cliente deletado com sucesso!');
    } catch (e) {}
  };

  const handleEditClient = () => {
    try {
      dispatch(updateClientAction({ clientBeingEditedId, newClientProps }));
      alert('Cliente editado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleOpenEditModal = clientData => {
    const { name, email, cellphone, sex, id } = clientData;
    setClientBeingEditedId(id);
    setName(name);
    setEmail(email);
    setCellphone(cellphone);
    setSex(sex);
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
            handleDelete={handleDeleteClient}
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
        closeButtonLabel={CLIENT_MODAL_CANCEL}
        modalTitle={modalActionsMapper[isUserEditingClient].modalTitle}
        actionLabel={modalActionsMapper[isUserEditingClient].actionLabel}
        handleAction={modalActionsMapper[isUserEditingClient].handleAction}
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
        <Table columns={[...clientColumn, actionsCell]} data={clients} />
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
