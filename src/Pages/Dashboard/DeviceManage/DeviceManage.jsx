import { Grid, Typography } from '@mui/material'
import React from 'react'

function DeviceManage() {
  return (
    <div>
     <Grid container sx={{
        display: 'flex',
        justifyContent: 'center',  // Centers horizontally
        alignItems: 'center',       // Centers vertically
        height: '80vh',
      }} >
        <Typography variant='h2'>Under Deveploment...... </Typography>
      </Grid>
    </div>
  )
}

export default DeviceManage
