import React, { memo } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  TableContainer,
} from '@chakra-ui/react';

import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import { useTable, useSortBy } from 'react-table';

function DataTable(props) {
  const { columns, data } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const emptyMessage = 'Nenhum resultado encontrado';

  const isThereRowsData = rows.length;

  return (
    <TableContainer
      w="calc(100% + 64px);"
      maxWidth="calc(100% + 64px);"
      m="8px 0"
    >
      <Table
        {...getTableProps()}
        variant="striped"
        colorScheme="facebook"
        size="sm"
      >
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  <Box display="flex">
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FiArrowUp />
                        ) : (
                          <FiArrowDown />
                        )
                      ) : null}
                    </chakra.span>
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {isThereRowsData
            ? rows.map(row => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <Td
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}
                      >
                        {cell.render('Cell')}
                      </Td>
                    ))}
                  </Tr>
                );
              })
            : emptyMessage}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default memo(DataTable);
