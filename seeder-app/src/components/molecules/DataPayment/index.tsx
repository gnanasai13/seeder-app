import React from "react";
import { Box } from "@mui/material";
import DataBlock from "../data-block";
import './index.css'

function DataPayment(props) {
  return (
    <Box className="size" sx={{left:`${props.left}`}}>
      <DataBlock icon={props.icon} text={props.text} value={props.value} />
    </Box>
  );
}

export default DataPayment;
