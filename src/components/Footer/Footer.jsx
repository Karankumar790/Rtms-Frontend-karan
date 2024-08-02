import React from 'react'
// import '../../Stylesheet/Footer.css'
import { Box, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <>
         <Grid container   fontWeight={30} sx={{ display:"flex ", justifyContent:"center", background:"#000"} } >
         <Grid item md={12} sm={12} xs={12}  >
          <Typography variant='h6' color={'white'}  >
            Foxboro Instrument company: All Right Reserved Best display resolution
          </Typography>
         </Grid>
        </Grid>
    </>
  )
}

export default Footer
