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
        <Toolbar style={{backgroundColor:"#000"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>

            <img src={logo} style={{objectFit:'cover', width:'76px', height:"70px"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OIL AND NATURAL GAS CORPORATION
          <Typography>Real Time Well Monitoring System</Typography>
          </Typography>
            <Hidden smDown>
           <a href='' alt='contain'><Typography>Technical Support</Typography></a>
          <a href=''><img src={MQTT1} style={{objectFit:'cover', width:'76px', height:"70px"}}/></a>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
   </> 
  )
}

export default Header
