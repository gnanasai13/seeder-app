import React from "react";
import { Box } from "@mui/material";
import BoxComponent from "../../../../atoms/Box";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import TableComponent from "../../../tables/TableComponent";
import "./YourContract.css";
import { styled } from "styled-components";

const StyledBox = styled(Box)({
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px 0px 22px 22px",
  gap: "20px",

  position: "absolute",
  width: "700px",
  height: "480px",
  left: "218px",
  top: "100px",

  background: "#201f24",

  border: "1px solid #28272b",
  borderRadius: "12px",
});

function YourContract({  selectionModel, handleRowSelectionModelChange }) {
  return (
    <StyledBox>
      <Box className="table-title">
        <BoxComponent width="180px" height="29px">
          <TypographyComponent variant="h2">Your Contracts</TypographyComponent>
        </BoxComponent>
        <InfoOutlinedIcon
          sx={{
            color: theme.palette.icon.lowEmphasis,
          }}
        />
      </Box>
      <Box className="table-body">
        <TableComponent selectionModel={selectionModel}
        handleRowSelectionModelChange={handleRowSelectionModelChange} />
      </Box>
    </StyledBox>
  );
}

export default YourContract;
