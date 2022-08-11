import React, { memo } from 'react';

import { Flex, Button } from '@chakra-ui/react';

function Pagination() {
  return (
    <Flex>
      <Button borderRadius="60px">{'<'}</Button>
      <Button borderRadius="60px">1</Button>
      <Button borderRadius="60px">2</Button>
      <Button borderRadius="60px">3</Button>
      <Button borderRadius="60px">...</Button>
      <Button borderRadius="60px">37</Button>
      <Button borderRadius="60px">{'>'}</Button>
    </Flex>
  );
}

export default memo(Pagination);
