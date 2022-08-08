import React, { memo } from 'react';
import { Box, Container, Image } from '@chakra-ui/react';

const ContentContainer = () => {
  return (
    <Box w="100%" h="100%">
      <Container
        maxW="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src="Barber.jpg"
          borderRadius="16px"
          fit="cover"
          h="512px"
          w="100%"
        />
        <Box
          borderRadius="16px"
          h="512px"
          w="95%"
          bg="white"
          position="relative"
          top="-384px"
          border="0px solid rgba(0, 0, 0, 0.125)"
          boxShadow="rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem"
        ></Box>
      </Container>
    </Box>
  );
};

export default memo(ContentContainer);
