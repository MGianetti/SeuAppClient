import React, { memo } from 'react';
import { Icon } from '@chakra-ui/react';

import { FiBell } from 'react-icons/fi';

const Notifications = () => {
  return <Icon as={FiBell} mr="32px" />;
};

export default memo(Notifications);
