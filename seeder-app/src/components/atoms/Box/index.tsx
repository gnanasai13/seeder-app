import React from 'react';
import {Box} from '@mui/material';

function BoxComponent(props) {
  return (
    <Box width={props.width} height={props.height}>
      {props.children}
    </Box>
  )
}

export default BoxComponent