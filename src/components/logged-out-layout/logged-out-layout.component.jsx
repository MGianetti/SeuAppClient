import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import ContentContainer from '../content-container';

const LoggedOutLayout = ({ children }) => {
  return (
    <>
      <Flex height="100vh;" minH="1024px">
        <ContentContainer maxW="512px">{children}</ContentContainer>
      </Flex>
    </>
  );
};

export default memo(LoggedOutLayout);
