import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { FiTrash, FiEdit3 } from 'react-icons/fi';

const RowActions = props => {
  const { rowData, handleDelete, handleEdit } = props;
  const { original: objectData } = rowData;
  const { id } = objectData;

  return (
    <>
      <Box display="flex">
        <Box pr="8px">
          <FiEdit3 onClick={() => handleEdit(objectData)} />
        </Box>
        <Box />
        <FiTrash onClick={() => handleDelete(id)} />
        <Box />
      </Box>
    </>
  );
};

export default memo(RowActions);
