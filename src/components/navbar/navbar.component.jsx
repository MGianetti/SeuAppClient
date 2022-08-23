import React, { memo } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';

import BreadCrumb from './bread-crumb';
import SearchInput from './search-input';
import Configuration from './configuration';
import ProfileAvatar from './profile-avatar';
import Messages from './messages';
import Notifications from './notifications';

const Navbar = props => {
  const { onHamburguerClick, isMenuExpanded } = props;

  const sideMenuStyles = isMenuExpanded ? { width: 256 } : { width: 64 };

  return (
    <Box
      w={`calc(100% - ${sideMenuStyles.width});`}
      h="64px"
      pos="sticky"
      style={{
        marginLeft: `${sideMenuStyles.width}px`,
        transition: 'margin-left 0.5s',
      }}
    >
      <Flex h="100%" justifyContent="space-between">
        <Flex alignItems="center">
          <Icon
            as={FiMenu}
            mr="32px"
            onClick={onHamburguerClick}
            cursor="pointer"
          />
          <BreadCrumb />
        </Flex>

        <Flex alignItems="center">
          <SearchInput />
          <Configuration />
          <Notifications />
          <Messages />
          <ProfileAvatar />
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(Navbar);
