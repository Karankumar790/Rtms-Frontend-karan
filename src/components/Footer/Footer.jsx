import React from 'react'
// import '../../Stylesheet/Footer.css'
import { Box, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
      <Grid container sx={{ display: "flex", justifyContent: "center", background: "#000", p:0.8  }} >
        <Grid item  >
          <Typography variant='h6' color={'white'}  >
            Foxboro Instrument company: All Right Reserved Best display resolution
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
