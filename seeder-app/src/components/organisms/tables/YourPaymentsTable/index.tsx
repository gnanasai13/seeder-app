import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../../themes";

const rows = [
  {
    id: "Jul 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 154000.0,
  },
  {
    id: "Aug 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 140000.0,
  },
  {
    id: "Sep 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 126000.0,
  },
  {
    id: "Oct 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 112000.0,
  },
  {
    id: "Nov 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 98000.0,
  },
  {
    id: "Dec 03, 2023",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 84000.0,
  },
  {
    id: "Jan 03, 2024",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 70000.0,
  },
  {
    id: "Feb 03, 2024",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 56000.0,
  },
  {
    id: "Mar 03, 2024",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 42000.0,
  },
  {
    id: "Apr 03, 2024",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 28000.0,
  },
  {
    id: "May 03, 2024",
    status: "Monthly",
    expectedamount: "-$14,000.00",
    outstanding: 14000.0,
  },
  
];

const columns: GridColDef[] = [
  { field: "id", headerName: "Due Date", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
  { field: "expectedamount", headerName: "Expected Amount", width: 250 },
  {
    field: "outstanding",
    headerName: "Outstanding",
    width: 250,
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const useStyles = makeStyles(() => ({
  dataGridRoot: {
    "& .MuiDataGrid-cell": {
      color: theme.palette.textColor.lowEmphasis,
    },
  },
}));

export default function MyContracts() {
  const classes = useStyles();

  return (
    <>
      <div style={{ width: "100%",height:'210px' }}>
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
