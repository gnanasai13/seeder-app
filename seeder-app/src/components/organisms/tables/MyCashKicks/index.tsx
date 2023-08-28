import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../../themes";

const rows = [
  
  {
    id: "My first advance",
    status: "Pending",
    maturity: "May 03, 2024",
    totalreceived: "$150,000.00 (12.0% fee)",
    totalfinanced: 168000.00,
  },
  
];

const columns: GridColDef[] = [
  { field: "id", headerName: "Name", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
  { field: "maturity", headerName: "Maturity", width: 200 },
  {
    field: "totalreceived",
    headerName: "Total Received",
    width: 200,
    
  },
  {
    field: "totalfinanced",
    headerName: "Total Financed ($)",
    width: 200,
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
      <div style={{ width: "100%" }}>
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
