import { Box } from "@mui/material";
import React from "react";
import "./index.css";
import TypographyComponent from "../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { theme } from "../../../themes";

const DataBlock = (props) => {
  return (
    <Box className="datablock-container">
      <Box className="datablock-iconcontainer">{props.icon}</Box>
      <Box className="datablock-maincontainer">
        <Box className="datablock-textcontainer">
            <TypographyComponent variant="body1">{props.text}</TypographyComponent>
            <InfoOutlinedIcon
            sx={{
                color: theme.palette.icon.lowEmphasis,
                width:'16px',
                height:'16px',
                marginTop:'3px'
            }}
            />
        </Box>
        <Box className="datablock-valuecontainer">
            <TypographyComponent variant="h2">{props.value}</TypographyComponent>
        </Box>
      </Box>
      
    </Box>
  );
};

export default DataBlock;
