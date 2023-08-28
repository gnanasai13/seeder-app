import React from "react";
import "./index.css";
import { Box, Button } from "@mui/material";
import TypographyComponent from "../../../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../../../themes";
import MyContracts from "../../../tables/MyContracts";
import MyCashKicks from "../../../tables/MyCashKicks"


function CashAcceleration({showMyContracts,handleButton1,handleButton2}) {

  if(showMyContracts){
    return (
      <Box className="cashacceleration-container">
        <Box className="cashacceleration-title">
          <TypographyComponent variant="h2">
            Cash Acceleration
          </TypographyComponent>
          <InfoOutlinedIcon
            sx={{
              color: theme.palette.icon.lowEmphasis,
            }}
          />
        </Box>
        <Box className="cashacceleration-tab">
          <Button className="cashacceleration-button" onClick={handleButton1}>My Contracts</Button>
          <Button className="cashacceleration-button" onClick={handleButton2}>My Cash Kicks</Button>
        </Box>
        <MyContracts />
      </Box>
    );
  }
  else {
    return (
      <Box className="cashacceleration-container">
        <Box className="cashacceleration-title">
          <TypographyComponent variant="h2">
            Cash Acceleration
          </TypographyComponent>
          <InfoOutlinedIcon
            sx={{
              color: theme.palette.icon.lowEmphasis,
            }}
          />
        </Box>
        <Box className="cashacceleration-tab">
          <Button className="cashacceleration-button" onClick={handleButton1}>My Contracts</Button>
          <Button className="cashacceleration-button" onClick={handleButton2}>My Cash Kicks</Button>
        </Box>
        <MyCashKicks/>
      </Box>
    );
  }


  
}

export default CashAcceleration;
