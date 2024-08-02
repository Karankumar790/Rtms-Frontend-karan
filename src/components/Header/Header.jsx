import React from 'react'
import logo from '../../../public/assets/logo.svg'
import MQTT1 from '../../../public/assets/MQTT1.png'
import { AppBar, colors, Grid, Toolbar, Typography, Box, Hidden } from '@mui/material'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Height } from '@mui/icons-material';

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#000" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>

              <img src={logo} style={{ objectFit: 'cover', width: '76px', height: "70px" }} />
            </IconButton>
            <Grid container display={'flex ' } justifyContent={'space-between'}>

              <Grid>

                <Typography variant="h6" component="div" fontSize={"x-large"} sx={{ flexGrow: 1 }}>
                  OIL AND NATURAL GAS CORPORATION </Typography>
                <Typography variant="h6">Real Time Well Monitoring System</Typography>
              </Grid>

              <Grid item sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }}>
                <Typography variant="h5" >Technical Support</Typography>
                <img src={MQTT1} style={{ objectFit: 'cover', width: '76px', height: "70px" }} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
