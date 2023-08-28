import { Box, Button } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../../atoms/Typography'
import './index.css';


const CashKickCard = ({handleNewCashKick}) => {
  return (
    <Box className="cashkickcard-container">
      <Box className="cashkickcard-textcontainer">
        <TypographyComponent variant="h2">Launch a new Cash Kick</TypographyComponent>
        <TypographyComponent variant="body1">You have upto <strong>$25,80,000.00</strong> available for a new cash advance</TypographyComponent>
      </Box>
      <Button className='cashkickcard-button' onClick={handleNewCashKick}>
        New Cash Kick
      </Button>
    </Box>
  )
}

export default CashKickCard