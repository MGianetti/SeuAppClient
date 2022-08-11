import React, { memo } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const ShowModal = props => {
  const {
    actionLabel,
    handleAction,
    isModalOpen,
    onModalClose,
    children,
    modalTitle = 'Title',
    closeButtonLabel = 'Cancel',
    modalSize = '5xl',
  } = props;

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onModalClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="facebook"
              variant="outline"
              mr={3}
              onClick={onModalClose}
            >
              {closeButtonLabel}
            </Button>
            <Button colorScheme="facebook" onClick={handleAction}>
              {actionLabel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(ShowModal);
