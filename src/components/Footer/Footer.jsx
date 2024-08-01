import React from 'react'
// import '../../Stylesheet/Footer.css'
import { Box, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <>
         <Grid container lg={12} md={12} sm={12} xs={12} mt={98.6} height={42} fontWeight={30} sx={{ display:"flex ", justifyContent:"center", background:"black"} } >
         <Box >
          <Typography variant='h6' color={'white'}  >
            Foxboro Instrument company: All Right Reserved Best display resolution
          </Typography>
         </Box>
        </Grid>
    </>
  )
}

export default Footer
