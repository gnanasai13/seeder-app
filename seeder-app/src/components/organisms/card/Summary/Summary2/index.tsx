import React, {useState} from "react";
import { Box, Button } from "@mui/material";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import "./index.css";
import NameCashkick from "../../../modals/NameCashkick";


function Summary2({ selectedRows, rows, handleShowSuccess }) {
    const [showModal, setShowModal] = useState(false);

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


  return (
    <Box className="summary2-main-container">
      <Box className="summary2-title-container">
        <TypographyComponent variant="h2">Summary</TypographyComponent>
        <InfoOutlinedIcon
          sx={{
            color: theme.palette.icon.lowEmphasis,
          }}
        />
      </Box>
      <Box className="summary2-body-container">
        <Box className="summary2-row1">
          <TypographyComponent variant="body1">Term</TypographyComponent>
          <TypographyComponent variant="body3">12 months</TypographyComponent>
        </Box>
        <Box className="summary2-row1">
          <TypographyComponent variant="body1">
            Selected Contracts
          </TypographyComponent>
          <TypographyComponent variant="body3">
            {selectedContractsCount}
          </TypographyComponent>
        </Box>
        <Box className="summary2-row1">
          <TypographyComponent variant="body1">Pay back amount</TypographyComponent>
          <TypographyComponent variant="body3">${totalPaymentAmount}</TypographyComponent>
        </Box>
        <Box className="summary2-row1">
          <TypographyComponent variant="body1">Rate %</TypographyComponent>
          <TypographyComponent variant="body3">
            ${ratePercentage.toFixed(2)}
            <TypographyComponent variant="body4">(12.00%)</TypographyComponent>
          </TypographyComponent>
        </Box>
      </Box>
      
      
      <Box className="summary2-row7">
        <TypographyComponent variant="h3">Total Payout</TypographyComponent>
        <TypographyComponent variant="h2">${totalPayable}</TypographyComponent>
      </Box>

      <Button className="summary2-review-button" variant="contained" onClick={()=>setShowModal(true)} >
        Submit Your Credit
      </Button>

      <NameCashkick show={showModal} close={() => setShowModal(false)} handleShowSuccess= {handleShowSuccess}/>
      
    </Box>
  );
} 

export default Summary2;
