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

import NewClient from './new';
import { Pagination, Table, Modal } from '../../components';

import {
  NEW_CLIENT_BUTTON,
  VIEW_CLIENTS_DESCRIPTION,
  VIEW_CLIENTS_PAGE_TITLE,
  CLIENT_MODAL_TITLE,
  CLIENT_MODAL_CANCEL,
  CLIENT_MODAL_ACTION_LABEL,
  clientColumn,
  clientMockData,
} from './clients.constants';

function ClientsVisualization() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={CLIENT_MODAL_TITLE}
        closeButtonLabel={CLIENT_MODAL_CANCEL}
        actionLabel={CLIENT_MODAL_ACTION_LABEL}
      >
        <NewClient />
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
        <Input placeholder="Buscar cliente" maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_CLIENTS_DESCRIPTION}
      </FormLabel>
      <Table columns={clientColumn} data={clientMockData} />
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

export default memo(ClientsVisualization);
