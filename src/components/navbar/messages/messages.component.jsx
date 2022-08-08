import React, { memo } from 'react';
import { Icon } from '@chakra-ui/react';

import { FiMessageSquare } from 'react-icons/fi';

const Messages = () => {
  return <Icon as={FiMessageSquare} mr="32px" />;
};
export default memo(Messages);
