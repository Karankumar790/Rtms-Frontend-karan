import React from 'react'
// import { Grid, Typography } from '@mui/material'
// import '../../Stylesheet/Footer.css'
import { Box, Grid, Typography } from '@mui/material'
// import  from '@mui/material/Box';
function Footer() {
  return (
    <div>
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
