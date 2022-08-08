import React, { memo } from 'react';
import { Input } from '@chakra-ui/react';

const SearchInput = () => {
  return <Input placeholder="Buscar" mr="32px" />;
};

export default memo(SearchInput);
