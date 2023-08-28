import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../../../../themes';

const rows = [
  { id: 'Contract 1', type: 'Monthly', perpayment: '$12,000.25', termlength: '12 months (12.0% fee)', paymentamount: 126722.64 },
  { id: 'Contract 3', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 163360.00 },]

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Name', width: 200 },
  { field: 'type', headerName: 'Type', width: 200 },
  { field: 'perpayment', headerName: 'Per payment', width: 200 },
  {
    field: 'termlength',
    headerName: 'Term Length',
    width: 200,
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
    width: 200,
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



export default function MyContracts() {
  const classes = useStyles();
 

  return (
    <>
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={darkTheme}>
          <DataGrid
            rows={rows}
            columns={columns}
            className={classes.dataGridRoot}
            hideFooter
          />
        </ThemeProvider>
      </div>
      
    </>
  );
}


