import React from 'react'
import logo from '../../../public/assets/logo.svg'
import MQTT1 from '../../../public/assets/MQTT1.png'
import { Grid, Typography, Box } from '@mui/material'

function Header() {
  return (
    <>
      <Grid container bgcolor="black" color="#fff" p={1}>

        <Grid item md={8} lg={8} sm={8} display="flex" gap="2" alignItems="center">
          <Box >
            <img src={logo} style={{width:'7rem', height:'5rem'}} />
          </Box>

          <Typography variant="h4" component="div" jus fontSize={"x-large"}>
            OIL AND NATURAL GAS CORPORATION
            <Typography >Real Time Well Monitoring System</Typography>
          </Typography>
        </Grid>

        <Grid item md={4} lg={4} sm={4} sx={{ display: { sm: 'none', xs: 'none', md: 'block', lg: 'block' } }} >

          <Box display='flex' alignItems="center" justifyContent="end" gap={1}>
            <Typography variant='h5'>Technical Support</Typography>
            <img src={MQTT1} style={{ objectFit: 'cover', width: '151px' }} />
          </Box>

          {/* <a href='' alt='contain' ><Typography style={{textDecoration:'none'}}>Technical Support</Typography></a> */}
        </Grid>

      </Grid>
    </>
  )
}

export default Header