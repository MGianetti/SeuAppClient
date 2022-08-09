import React, { memo } from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';

import { FiUser, FiScissors, FiShoppingBag } from 'react-icons/fi';
import routes from '../../config/routes';

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
          w="100%"
          justifyContent="flex-start"
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          _hover={{ background: 'rgb(166, 166, 174, 0.4)' }}
          leftIcon={<FiUser h="24px" w="24px" color="white" />}
        >
          <Link href={routes.clients.root}>Clientes</Link>
        </Button>

        <Button
          w="100%"
          justifyContent="flex-start"
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          _hover={{ background: 'rgb(166, 166, 174, 0.4)' }}
          leftIcon={<FiScissors h="24px" w="24px" color="white" />}
        >
          <Link href={routes.services.root}>Serviços</Link>
        </Button>
        <Button
          w="100%"
          justifyContent="flex-start"
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          _hover={{ background: 'rgb(166, 166, 174, 0.4)' }}
          leftIcon={<FiShoppingBag h="24px" w="24px" color="white" />}
        >
          <Link href={routes.products.root}>Produtos</Link>
        </Button>
        <Button
          w="100%"
          justifyContent="flex-start"
          pl="8px"
          display="flex"
          alignItems="center"
          mb="16px"
          variant="unstyled"
          _hover={{ background: 'rgb(166, 166, 174, 0.4)' }}
          leftIcon={<FiUser h="24px" w="24px" color="white" />}
        >
          <Link href={routes.professionals.root}>Profissionais</Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default memo(SideMenu);
