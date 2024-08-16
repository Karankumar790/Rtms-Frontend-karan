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

  return (
    <Box sx={{ display: 'flex',overflowY:'hidden' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 2}}>
        <Box sx={{ ...theme.mixins.toolbar }} />
        <Outlet />
      </Box>
    </Box>
  );
}

