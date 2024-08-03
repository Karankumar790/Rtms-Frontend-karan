import { Box } from '@mui/material'
import React from 'react'

export default function Container({children,...props}) {

  return (
    <Box height={window?.innerHeight - 128 + 'px'}  className={props?.className}>
      {children}
    </Box>
  )
}
