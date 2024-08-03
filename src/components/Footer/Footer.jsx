import React from 'react'
// import { Grid, Typography } from '@mui/material'
// import '../../Stylesheet/Footer.css'
import { Box, Grid, Typography } from '@mui/material'
// import  from '@mui/material/Box';
function Footer() {
  return (
    <>
      <Grid container style={{ display: "grid", placeContent: "center", background: "#000"  }} >
        <Grid item  >
          <Typography variant='h6' color={'white'}  >
            Foxboro Instrument company: All Right Reserved Best display resolution
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
