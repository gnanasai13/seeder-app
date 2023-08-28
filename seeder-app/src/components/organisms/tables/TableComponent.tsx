import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes';




const columns: GridColDef[] = [
  { field: 'id', headerName: 'Name', width: 100 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'perpayment', headerName: 'Per payment', width: 120 },
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
    width: 150,
  },
];

export const rows = [
  { id: 'Contract 1', type: 'Monthly', perpayment: '$12,000.25', termlength: '12 months (12.0% fee)', paymentamount: 126722.64 },
  { id: 'Contract 2', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 280000.00 },
  { id: 'Contract 3', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 163360.00 },
  { id: 'Contract 4', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 20000.00},
  { id: 'Contract 5', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 83360.00 },
  { id: 'Contract 6', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 163360.00 },
  { id: 'Contract 7', type: 'Monthly', perpayment: '$12,000.25', termlength: '12 months (12.0% fee)', paymentamount: 70000.00 },
  { id: 'Contract 8', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 91120.00 },
  { id: 'Contract 9', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 40000.00 },
  { id: 'Contract 10', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 252077.36},
  { id: 'Contract 11', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 200000.00 },
  { id: 'Contract 12', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 340000.00},
  { id: 'Contract 13', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 200000.00 },
  { id: 'Contract 14', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 60000.00},
  { id: 'Contract 15', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 260000.00 },
  { id: 'Contract 16', type: 'Monthly', perpayment: '$6,000.00', termlength: '12 months (12.0% fee)', paymentamount: 230000.00},
  
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

export default function DataTable({  selectionModel, handleRowSelectionModelChange }) {
  const classes = useStyles();
  

  return (
    <>
      <div style={{ width: '94%', height: '385px' }}>
        <ThemeProvider theme={darkTheme}>
          <DataGrid
            rows={rows}
            columns={columns}
            className={classes.dataGridRoot}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 8]}
            checkboxSelection
            rowSelectionModel={selectionModel}
            onRowSelectionModelChange={handleRowSelectionModelChange}
            
          />
        </ThemeProvider>
      </div>
      
    </>
  );
}


