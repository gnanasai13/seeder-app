import React from "react";
import { Box } from "@mui/material";
import BoxComponent from "../../../../atoms/Box";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import SelectedTable from "../../../tables/SelectedTable";
import "./index.css";

function SelectedContracts({ rows, selectedRows }) {
  return (
    <Box className="table1-container">
      <Box className="table1-title">
        <BoxComponent width="230px" height="29px">
          <TypographyComponent variant="h2">
            Selected Contracts
          </TypographyComponent>
        </BoxComponent>
        <InfoOutlinedIcon
          sx={{
            color: theme.palette.icon.lowEmphasis,
          }}
        />
      </Box>
      <Box className="table1-body">
        <SelectedTable rows={rows} selectedRows={selectedRows} />
      </Box>
    </Box>
  );
}

export default SelectedContracts;
