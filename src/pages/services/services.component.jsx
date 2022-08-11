import React, { memo, useState } from 'react';

import {
  Heading,
  FormLabel,
  Text,
  Flex,
  Button,
  Input,
} from '@chakra-ui/react';

import {
  NEW_SERVICE_BUTTON,
  VIEW_SERVICES_DESCRIPTION,
  VIEW_SERVICES_PAGE_TITLE,
  SERVICE_MODAL_TITLE,
  SERVICE_MODAL_CANCEL,
  SERVICE_MODAL_ACTION_LABEL,
  servicesColumns,
  servicesMockData,
} from './services.constants';

import { FiPlus } from 'react-icons/fi';

import NewService from './new';
import { Pagination, Table, Modal } from '../../components';

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);
  return (
    <>
      <Modal
        onModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        modalTitle={SERVICE_MODAL_TITLE}
        closeButtonLabel={SERVICE_MODAL_CANCEL}
        actionLabel={SERVICE_MODAL_ACTION_LABEL}
        modalSize="2xl"
      >
        <NewService />
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
        <Input placeholder="Buscar cliente" maxWidth="256px" />
      </Flex>
      <FormLabel minW="512px" w="100%" ml="16px">
        {VIEW_SERVICES_DESCRIPTION}
      </FormLabel>
      <Table columns={servicesColumns} data={servicesMockData} />
      <Flex justifyContent="space-between" w="98%" mt="32px">
        <Text>Mostrando de 1 até 10 de 6.079 registros</Text>
        <Pagination />
      </Flex>
    </>
  );
}

export default memo(Services);
