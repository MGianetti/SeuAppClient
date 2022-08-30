import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { FiTrash, FiEdit3 } from 'react-icons/fi';

const RowActions = props => {
  const { rowData, handleDelete, handleEdit } = props;
  const { original: objectData } = rowData;
  const { id } = objectData;

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Box pr="16px" cursor="pointer" _hover={{ color: 'darkBlue' }}>
          <FiEdit3 onClick={() => handleEdit(objectData)} />
        </Box>
        <Box cursor="pointer" _hover={{ color: 'darkRed' }}>
          <FiTrash onClick={() => handleDelete(id)} />
        </Box>
      </Box>
    </>
  );
};

export default memo(RowActions);
