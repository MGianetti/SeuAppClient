import React, { memo, useState } from 'react';

import {
  Heading,
  FormLabel,
  Text,
  Flex,
  Button,
  Input,
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
  professionalsMockData,
} from './professionals.constants';

function Professionals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={PROFESSIONAL_MODAL_TITLE}
        closeButtonLabel={PROFESSIONAL_MODAL_CANCEL}
        actionLabel={PROFESSIONAL_MODAL_ACTION_LABEL}
      >
        <NewProfessional />
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
      <Table columns={professionalsColumns} data={professionalsMockData} />
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

export default memo(Professionals);
