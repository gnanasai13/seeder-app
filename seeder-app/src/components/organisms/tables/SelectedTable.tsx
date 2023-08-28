import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Name', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'perpayment', headerName: 'Per payment', width: 130 },
  {
    field: 'termlength',
    headerName: 'Term Length',
    type: 'number',
    width: 90,
    renderCell: () => (
      <div>
        12 months
        <br />
        12.0% fee
      </div>
    ),
  },
  {
    field: 'paymentamount',
    headerName: 'Payment Amount ($)',
    width: 140,
  },
];


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles(() => ({
  dataGridRoot: {
    '& .MuiDataGrid-cell': {
      color: theme.palette.textColor.lowEmphasis,
    },
  },
}));



export default function DataTable({selectedRows,rows}) {
  const classes = useStyles();
  const selectedContracts = rows.filter(row => selectedRows.includes(row.id));

  return (
    <>
      <div style={{ width: '94%', height: '416px' }}>
        <ThemeProvider theme={darkTheme}>
          <DataGrid
            rows={selectedContracts}
            columns={columns}
            className={classes.dataGridRoot}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            
          />
        </ThemeProvider>
      </div>
      
    </>
  );
}


