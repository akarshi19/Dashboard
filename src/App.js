// src/App.jsx
import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import FileFetch from './components/FileFetch';
import DataTable from './components/DataTable';
import './App.css'; // You can define your global styles here
import Sidebar from './components/Sidebar';

const App = () => {
  const [data, setData] = useState([]);

  const handleFileFetch = (jsonData) => {
    setData(jsonData);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <Typography variant="h2" gutterBottom>
          Dashboard
        </Typography>
        <FileFetch onFileFetch={handleFileFetch} />
        {data.length > 0 && (
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <DataTable data={data} />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default App;
