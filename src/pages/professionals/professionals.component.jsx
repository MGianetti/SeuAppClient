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

import { FiPlus } from 'react-icons/fi';

import NewProfessional from './new';
import { Pagination, Table, Modal, RowActions } from '../../components';

import {
  NEW_PROFESSIONAL_BUTTON,
  PROFESSIONAL_MODAL_ACTION_LABEL_EDITING,
  PROFESSIONAL_MODAL_ACTION_LABEL,
  PROFESSIONAL_MODAL_CANCEL,
  PROFESSIONAL_MODAL_TITLE_EDITING,
  PROFESSIONAL_MODAL_TITLE,
  PROFESSIONAL_PAGE_TITLE_EDITING,
  PROFESSIONAL_PAGE_TITLE,
  professionalsColumns,
  SEARCH_PROFESSIONAL_PRACEHOLDER,
  VIEW_PROFESSIONALS_DESCRIPTION,
  VIEW_PROFESSIONALS_PAGE_TITLE,
} from './professionals.constants';
import { connect, useDispatch } from 'react-redux';
import {
  getAllProfessionalsAction,
  createProfessionalAction,
  deleteProfessionalAction,
  updateProfessionalAction,
} from '../../store/professionals/professionalsSlice';

const Professionals = props => {
  const { professionals, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    handleEmptyAfterSubmit();
  };
  const handleModalOpen = () => setIsModalOpen(true);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cpf, setCpf] = useState('');

  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleCellphoneChange = e => setCellphone(e.target.value);
  const handleNicknameChange = e => setNickname(e.target.value);
  const handleCnpjChange = e => setCnpj(e.target.value);
  const handleCpfChange = e => setCpf(e.target.value);

  const [professionalBeingEditedId, setProfessionalBeingEditedId] =
    useState('');
  const isUserEditingProfessional =
    professionalBeingEditedId === '' ? 'creating' : 'editing';

  const handleEmptyAfterSubmit = () => {
    setName('');
    setNickname('');
    setCellphone('');
    setEmail('');
    setCnpj('');
    setCpf('');
    setProfessionalBeingEditedId('');
  };

  const modalActionsMapper = {
    creating: {
      modalTitle: PROFESSIONAL_MODAL_TITLE,
      actionLabel: PROFESSIONAL_MODAL_ACTION_LABEL,
      pageTitle: PROFESSIONAL_PAGE_TITLE,
      handleAction: () => handleCreateProfessional(),
    },
    editing: {
      modalTitle: PROFESSIONAL_MODAL_TITLE_EDITING,
      actionLabel: PROFESSIONAL_MODAL_ACTION_LABEL_EDITING,
      pageTitle: PROFESSIONAL_PAGE_TITLE_EDITING,
      handleAction: () => handleEditProfessional(),
    },
  };

  const newProfessionalProps = {
    name,
    email,
    cellphone,
    nickname,
    cnpj,
    cpf,
    pageTitle: modalActionsMapper[isUserEditingProfessional].pageTitle,
  };
  const newProfessionalActions = {
    handleEmailChange,
    handleNameChange,
    handleCellphoneChange,
    handleNicknameChange,
    handleCnpjChange,
    handleCpfChange,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfessionalsAction());
  }, []);

  // TODO create a method and label object look up
  const handleCreateProfessional = () => {
    try {
      dispatch(createProfessionalAction(newProfessionalProps));
      handleEmptyAfterSubmit();
      alert('Professional adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleDeleteProfessional = documentId => {
    try {
      dispatch(deleteProfessionalAction(documentId));
      alert('Professional deletado com sucesso!');
    } catch (e) {}
  };

  const handleEditProfessional = () => {
    try {
      dispatch(
        updateProfessionalAction({
          professionalBeingEditedId,
          newProfessionalProps,
        })
      );
      alert('Professional editado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  const handleOpenEditModal = professionalData => {
    const { name, email, cellphone, nickname, cnpj, cpf, id } =
      professionalData;
    setProfessionalBeingEditedId(id);
    setName(name);
    setEmail(email);
    setCellphone(cellphone);
    setNickname(nickname);
    setCnpj(cnpj);
    setCpf(cpf);
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
            handleDelete={handleDeleteProfessional}
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
        closeButtonLabel={PROFESSIONAL_MODAL_CANCEL}
        modalTitle={modalActionsMapper[isUserEditingProfessional].modalTitle}
        actionLabel={modalActionsMapper[isUserEditingProfessional].actionLabel}
        handleAction={
          modalActionsMapper[isUserEditingProfessional].handleAction
        }
      >
        <NewProfessional
          newProfessionalProps={newProfessionalProps}
          newProfessionalActions={newProfessionalActions}
        />
      </Modal>
      <Button
        leftIcon={<FiPlus />}
        alignSelf="flex-start"
        mb="16px"
        onClick={handleModalOpen}
      >
        {NEW_PROFESSIONAL_BUTTON}
      </Button>
      <Flex justifyContent="space-between" w="100%">
        <Heading w="100%" minW="512px" as="h1" size="lg">
          {VIEW_PROFESSIONALS_PAGE_TITLE}
        </Heading>
        <Input placeholder={SEARCH_PROFESSIONAL_PRACEHOLDER} maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_PROFESSIONALS_DESCRIPTION}
      </FormLabel>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          columns={[...professionalsColumns, actionsCell]}
          data={professionals}
        />
      )}
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
};

const mapStateToProps = state => {
  const { professionals } = state;
  return professionals;
};

export default connect(mapStateToProps)(Professionals);
