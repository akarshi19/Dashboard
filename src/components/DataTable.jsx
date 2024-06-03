// src/components/DataTable.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const DataTable = ({ data }) => {
  const filteredData = data.filter(row => {
    for (let key in row) {
      if (row.hasOwnProperty(key) && (row[key] === null || row[key] === undefined || row[key] === '')) {
        return false;
      }
    }
    return true;
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
