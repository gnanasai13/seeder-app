import { Avatar, Grid } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../themes";
import TitleBar from "../organisms/Bars/TitleBar";
import NavigationBar from "../organisms/Bars/NavBar";
import CashKickCard from "../organisms/card/quickaccess/CashKickCard";
import DataPayment from "../molecules/DataPayment";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import progress from "../../../images/circular-progress.png";
import YourPayments from "../organisms/card/cashaccleration/YourPayments";
import Maintemplate from "./Maintemplate";
import CashAccelerationTemplate from "./CashAccelerationTemplate";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const monthName = months[month];

const todayDate = monthName + " " + day + ", " + year;

function HomeTemplate() {
    const [showHome,setShowHome] = useState(true);
    const [showMain,setShowMain] = useState(false);
    const [showCashAcceleration,setShowCashAcceleration] = useState(false);
    const [showMyContracts, setShowMyContracts] = useState(true);

    const handleButton1 = ()=>{
      setShowMyContracts(true);
    }
  
    const handleButton2 = ()=>{
      setShowMyContracts(false);
    }

    const handleNewCashKick = () => {
        setShowHome(false);
        setShowCashAcceleration(false);
        setShowMain(true);
    }

    const handleShowCashAcceleration =() => {
        setShowHome(false);
        setShowCashAcceleration(true);
    }

    const handleShowHome =() => {
        setShowHome(true);
        setShowCashAcceleration(false);
    }

    const handleShowSuccess =() => {
      setShowMyContracts(false);
      setShowHome(false);
      setShowCashAcceleration(true);
    }

    if(showHome){
        return (
            <Grid style={{ background: theme.palette.structural.elevation0 }}>
              <TitleBar title="Good Afternoon 🖐️" caption={todayDate} />
              <DataPayment
                icon={<ReceiptLongOutlinedIcon />}
                text="Due - Jul 03, 2023"
                value="$14,000.00"
                left="220px"
              />
        
              <DataPayment
                icon={<Avatar src={progress} />}
                text="Outstanding amount"
                value="$168,000.00"
                left="580px"
              />
              <CashKickCard handleNewCashKick={handleNewCashKick} />
              <NavigationBar handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration}/>
              <YourPayments />
            </Grid>
          );
    }
    
    else if(showCashAcceleration) {
        return (
            <CashAccelerationTemplate handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration} handleNewCashKick={handleNewCashKick} showMyContracts={showMyContracts} handleButton1={handleButton1} handleButton2={handleButton2}/>
        )
    }
    else if(showMain) {
        return (
            <Maintemplate handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration} handleShowSuccess={handleShowSuccess} />
        )
    }

  
}

export default HomeTemplate;
