import React from 'react';
import {Box} from '@mui/material';
import DataBlock from '../../../../molecules/data-block';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import './index.css';


const data = () => {
  return (
    <Box className="cashaccelerationdata-container">
        <DataBlock icon={<CalendarMonthOutlinedIcon/>} text="Term cap" value="12 months"/>
        <DataBlock icon={<AccountBalanceOutlinedIcon/>} text="Available credit" value="$2.58M"/>
        <DataBlock icon={<PercentOutlinedIcon/>} text="Max interest rate" value="12.00%"/>  
    </Box>
  )
}

export default data