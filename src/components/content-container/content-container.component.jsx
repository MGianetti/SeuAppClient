import React, { memo } from 'react';
import { Box, Container, Image } from '@chakra-ui/react';

const ContentContainer = ({ children }) => {
  return (
    <Box w="100%" h="100%">
      <Container
        maxW="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src="../Barber.jpg"
          borderRadius="16px"
          fit="cover"
          h="512px"
          w="100%"
        />
        <Box
          borderRadius="16px"
          padding="64px 32px"
          h="auto"
          w="70%"
          bg="white"
          minW="576px"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          top="-384px"
          border="0px solid rgba(0, 0, 0, 0.125)"
          boxShadow="rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem"
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default memo(ContentContainer);
