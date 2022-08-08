import React, { memo } from 'react';
import { Icon } from '@chakra-ui/react';

import { FiSettings } from 'react-icons/fi';

const Configuration = () => {
  return <Icon as={FiSettings} mr="32px" />;
};

export default memo(Configuration);
