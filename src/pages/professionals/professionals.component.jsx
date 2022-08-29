import React, { memo, useEffect, useState } from 'react';

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
import { Pagination, Table, Modal } from '../../components';

import {
  NEW_PROFESSIONAL_BUTTON,
  VIEW_PROFESSIONALS_DESCRIPTION,
  VIEW_PROFESSIONALS_PAGE_TITLE,
  PROFESSIONAL_MODAL_TITLE,
  PROFESSIONAL_MODAL_CANCEL,
  PROFESSIONAL_MODAL_ACTION_LABEL,
  SEARCH_PROFESSIONAL_PRACEHOLDER,
  professionalsColumns,
} from './professionals.constants';
import { connect, useDispatch } from 'react-redux';
import {
  addProfessional,
  fetchAllProfessionals,
} from '../../store/professionals/professionalsSlice';
import { getAll } from '../../services/professional.service';

const Professionals = props => {
  const { professionals, isLoading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
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

  const handleEmptyAfterSubmit = () => {
    setName('');
    setNickname('');
    setCellphone('');
    setEmail('');
    setCnpj('');
    setCpf('');
  };

  const newProfessionalProps = { name, email, cellphone, nickname, cnpj, cpf };
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
    dispatch(fetchAllProfessionals(getAll()));
  }, [dispatch]);

  const handleSubmit = () => {
    try {
      dispatch(addProfessional(newProfessionalProps));
      handleEmptyAfterSubmit();
      alert('Professional adicionado com sucesso!');
      setIsModalOpen(false);
    } catch (e) {}
  };

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={PROFESSIONAL_MODAL_TITLE}
        closeButtonLabel={PROFESSIONAL_MODAL_CANCEL}
        actionLabel={PROFESSIONAL_MODAL_ACTION_LABEL}
        handleAction={handleSubmit}
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
        <Table columns={professionalsColumns} data={professionals} />
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
