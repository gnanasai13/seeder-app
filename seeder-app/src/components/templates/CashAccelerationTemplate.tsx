import { Grid } from '@mui/material';
import React from 'react';
import { theme } from '../../themes';
import TitleBar from '../organisms/Bars/TitleBar';
import NavigationBar from '../organisms/Bars/NavBar';
import CashKickCard from '../organisms/card/quickaccess/CashKickCard';
import Data from '../organisms/card/cashaccleration/data'
import CashAcceleration from '../organisms/card/cashaccleration/CashAcceleration';

function CashAccelerationTemplate({handleShowHome,handleShowCashAcceleration,handleNewCashKick,showMyContracts,handleButton1,handleButton2}) {
  return (
    <Grid style={{ background: theme.palette.structural.elevation0 }}>
        <TitleBar title="Cash Acceleration" caption="Place to create new cash kicks to run your business" />
        <Data/>
        <CashKickCard handleNewCashKick={handleNewCashKick}/>
        <NavigationBar handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration} />
        <CashAcceleration showMyContracts={showMyContracts} handleButton1={handleButton1} handleButton2={handleButton2} />
        
      </Grid>
  )
}

export default CashAccelerationTemplate