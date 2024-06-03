import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import * as XLSX from 'xlsx';

const FileFetch = ({ onFileFetch }) => {
  const url = 'https://docs.google.com/spreadsheets/d/134ZIhplKHX5TV1kPLXft9QsKDD1y5Epmm-aQ5fBqIzs/edit?usp=sharing';

  const handleFileFetch = async () => {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const data = new Uint8Array(response.data);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      onFileFetch(jsonData);
    } catch (error) {
      console.error('Error fetching the file:', error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleFileFetch}>
        Sync
      </Button>
    </div>
  );
};

export default FileFetch;
