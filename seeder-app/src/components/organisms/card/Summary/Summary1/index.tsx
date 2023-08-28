import React from "react";
import { Box, Button, Slider } from "@mui/material";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import "./index.css";

function Summary1({
  handleReviewButtonClick,
  selectedRows,
  rows,
  handleReset,
  handleRowSelectionModelChange,
}) {
  const selectedContractsCount = selectedRows.length;
  let totalPaymentAmount = selectedRows.reduce(
    (total, rowId) =>
      total + rows.find((row) => row.id === rowId).paymentamount,
    0
  );

  totalPaymentAmount = parseFloat(totalPaymentAmount.toFixed(2));

  let ratePercentage = (totalPaymentAmount * 12) / 100;
  ratePercentage = parseFloat(ratePercentage.toFixed(2));

  let totalPayable = totalPaymentAmount + ratePercentage;
  totalPayable = parseFloat(totalPayable.toFixed(2));

  const handleResetClick = () => {
    handleReset();
  };

  const handleSliderChange = (event,newValue) => {
    const selectedRows = rows
      .filter((row) => row.paymentamount <= newValue)
      .map((row) => row.id);
    handleRowSelectionModelChange(selectedRows);
  };

  return (
    <Box className="summary1-main-container">
      <Box className="summary1-title-container">
        <TypographyComponent variant="h2">Summary</TypographyComponent>
        <InfoOutlinedIcon
          sx={{
            color: theme.palette.icon.lowEmphasis,
          }}
        />
      </Box>
      <Box className="summary1-body-container">
        <Box className="summary1-row1">
          <TypographyComponent variant="body1">Term</TypographyComponent>
          <TypographyComponent variant="body3">12 months</TypographyComponent>
        </Box>
        <Box className="summary1-row1">
          <TypographyComponent variant="body1">
            Selected Contracts
          </TypographyComponent>
          <TypographyComponent variant="body3">
            {selectedContractsCount}
          </TypographyComponent>
        </Box>
      </Box>
      <Box className="summary1-row2">
        <Box className="summary1-row3">
          <TypographyComponent variant="body1">
            Slide to autoselect
          </TypographyComponent>
          <Button
            className="summary1-reset-button"
            variant="contained"
            onClick={handleResetClick}
          >
            Reset
          </Button>
        </Box>
        <Box className="summary1-row4">
          <Slider
            value={totalPaymentAmount}
            step={100}
            min={0}
            max={2580000}
            onChange={handleSliderChange}
            marks={[
              { value: 0 },
              { value: 2580000 },
            ]}
            sx={{
              color: theme.palette.primaryColor.primary500,
            }}
            
          />
        </Box>
        <Box className="summary1-row5">
          <TypographyComponent variant="body1">
            ${totalPaymentAmount} selected of{" "}
          </TypographyComponent>
          <TypographyComponent variant="body3">
            ${(2580000).toFixed(2)}
          </TypographyComponent>
        </Box>
      </Box>
      <Box className="summary1-row6">
        <Box className="summary1-row1">
          <TypographyComponent variant="body1">
            Pay back amount
          </TypographyComponent>
          <TypographyComponent variant="body3">
            ${totalPaymentAmount}
          </TypographyComponent>
        </Box>
        <Box className="summary1-row1">
          <TypographyComponent variant="body1">Rate %</TypographyComponent>
          <TypographyComponent variant="body3">
            ${ratePercentage.toFixed(2)}
            <TypographyComponent variant="body4">(12.00%)</TypographyComponent>
          </TypographyComponent>
        </Box>
      </Box>
      <Box className="summary1-row7">
        <TypographyComponent variant="h3">Total Payable</TypographyComponent>
        <TypographyComponent variant="h2">${totalPayable}</TypographyComponent>
      </Box>

      <Button
        className="summary1-review-button"
        variant="contained"
        onClick={handleReviewButtonClick}
      >
        Review Your Credit
      </Button>
    </Box>
  );
}

export default Summary1;
