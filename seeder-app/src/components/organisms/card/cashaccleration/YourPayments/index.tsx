import React from "react";
import "./index.css";
import { Box } from "@mui/material";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import YourPaymentsTable from "../../../tables/YourPaymentsTable"

function YourPayments() {

    return (
      <Box className="cashacceleration-container">
        <Box className="cashacceleration-title">
          <TypographyComponent variant="h2">
            Your Payments
          </TypographyComponent>
          <InfoOutlinedIcon
            sx={{
              color: theme.palette.icon.lowEmphasis,
            }}
          />
        </Box>
        <YourPaymentsTable/>
        
      </Box>
    );
  }
 
export default YourPayments;
