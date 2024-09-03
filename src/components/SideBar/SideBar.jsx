import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import ongc_logo from '/assets/ongc2.png';
import { Link, useLocation } from 'react-router-dom';
import WellMasterIcon from '@mui/icons-material/OilBarrel';
import PrintReportIcon from '@mui/icons-material/Print';
import DeviceManagerIcon from '@mui/icons-material/Memory';
import ComplaintIcon from '@mui/icons-material/AccessAlarm';
import AssetsIcon from '@mui/icons-material/AccountBalance';
import Networkicon from '@mui/icons-material/CellTower';
import { useMediaQuery } from '@mui/material';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar({ open, handleDrawerClose }) {
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const mainuItems = [
        {
            name: "Dashboard",
            icon: <HomeIcon sx={{ color: 'black' }} />,
            path: "/dashboard"
        },
        {
            name: "Organization",
            icon: <AssetsIcon sx={{ color: 'black', }} />,
            path: "/dashboard/ManageAsset"
        },
        {
            name: "Well Master",
            icon: <WellMasterIcon sx={{ color: 'black' }} />,
            path: "/dashboard/wellmaster"
        },
        {
            name: "Device Manager",
            icon: <DeviceManagerIcon sx={{ color: 'black' }} />,
            path: "/dashboard/DeviceManage"
        },
        {
            name: "Network Manager",
            icon: <Networkicon sx={{ color: 'black' }} />,
            path: "/dashboard/Network"
        },
        {
            name: "Well Monitor",
            icon: <MonitorIcon sx={{ color: 'black' }} />,
            path: "/dashboard/monitor"
        },
        {
            name: "Complaints",
            icon: <ComplaintIcon sx={{ color: 'black' }} />,
            path: "/dashboard/complaint"
        },
        {
            name: "Notifications",
            icon: < NotificationsIcon sx={{ color: 'black' }} />,
            path: "/dashboard/notification",

        },
        {
            name: "Print Report",
            icon: <PrintReportIcon sx={{ color: 'black' }} />,
            path: "/dashboard/crystal",

        },
        {
            // name: "Live Capture",
            // icon: <Camera sx={{ color: 'black' }} />,
            // path: "/dashboard/virtual",

        },
        // { name: "Edit Profile", icon: <EditIcon sx={{color:'black'}}/>, path: "/dashboard/edit" },
        // { name: "Log Out", icon: <LogoutIcon sx={{color:'black'}}/>, path: "/dashboard/logout" }
    ]

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <img src={ongc_logo} alt='logo' width='83%' />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <List sx={{mt:1}}>
                {/* <Divider sx={{ py: 1 }} /> */}
                {/* {['Dashboard', 'Well Monitor', 'Virtual Flow', 'Crystal Report', 'Complaint History', 'Notification  History','Edit Profile','Log Out'] */}


                {mainuItems?.map((text, index) => (
                    <Link key={`sidemenu-item-${index}`} to={text.path} style={{ textDecoration: 'none', color: "black" }} onClick={handleDrawerClose}>
                        <ListItem key={text} disablePadding sx={{
                            display: 'block', borderBottom: index < 7 ? '1px solid #ddd' : 'none',
                           

                        }} >

                            <ListItemButton
                            
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === text.path ? 'lightgrey' : 'white',
                                    '&:hover': {
                                        backgroundColor:'lightgrey',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {text.icon}
                                </ListItemIcon>

                                <ListItemText primary={text.name} sx={{
                                    opacity: open ? 1 : 0, textDecoration: 'none',
                                   
                                }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}