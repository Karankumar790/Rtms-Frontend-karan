<<<<<<< HEAD:src/Pages/Dashboard/index.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../../components/DashboardHeader/DashboardHeader.jsx';
import Sidebar from './SideBar/SideBar.jsx';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
=======
import { Typography,Grid } from '@mui/material'
import React from 'react'
import PageContainer from '../../components/HOC/PageContainer'
import { Link, Outlet } from 'react-router-dom'
>>>>>>> 39b26a963521c00ba62d3e6d0a15aed2f3838da5:src/Pages/Dashboard/Sidebar.jsx

  return (
<<<<<<< HEAD:src/Pages/Dashboard/index.jsx
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ ...theme.mixins.toolbar }} />
        <Outlet/>
      </Box>
    </Box>
  );
}
=======
    <PageContainer bgcolor='#8590AD' showheader showfooter>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Grid item>
                  {
                   mainuItems.map((v,i)=>(

                    <Grid key={i}>
                      <Link to={v.path}><button><Typography>{v?.name}</Typography></button></Link>
                    </Grid>
                   )) 
                  }
                </Grid>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9}>
                  <Outlet/>
              </Grid>
           </Grid>
    </PageContainer>
  )
}

export default Dash
>>>>>>> 39b26a963521c00ba62d3e6d0a15aed2f3838da5:src/Pages/Dashboard/Sidebar.jsx
