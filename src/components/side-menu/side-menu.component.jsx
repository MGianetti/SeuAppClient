import React, { memo } from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

import { FiUser, FiScissors, FiShoppingBag } from 'react-icons/fi';

const SideMenu = props => {
  const { isMenuExpanded, onMouseEnter, onMouseLeave } = props;

  const sideMenuStyles = isMenuExpanded ? { width: 256 } : { width: 64 };

  return (
    <Box
      h="calc(100% - 16px);"
      bg="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
      borderRadius="16px"
      ml="16px"
      padding="16px"
      alignItems="left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: `${sideMenuStyles.width}px`,
        transition: 'width 0.5s',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        w="100%"
        h="100%"
        overflow="hidden"
      >
        <Button
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          leftIcon={<FiUser h="24px" w="24px" color="white" />}
        >
          <Text ml="16px" color="white">
            Clientes
          </Text>
        </Button>
        <Button
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          leftIcon={<FiScissors h="24px" w="24px" color="white" />}
        >
          <Text ml="16px" color="white">
            Serviços
          </Text>
        </Button>
        <Button
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          leftIcon={<FiShoppingBag h="24px" w="24px" color="white" />}
        >
          <Text ml="16px" color="white">
            Produtos
          </Text>
        </Button>
        <Button
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          leftIcon={<FiUser h="24px" w="24px" color="white" />}
        >
          <Text ml="16px" color="white">
            Profissionais
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default memo(SideMenu);