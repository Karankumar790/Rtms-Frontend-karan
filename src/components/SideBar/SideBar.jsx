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
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';
import ongc_logo from '/assets/ongc2.png';
import { Link, useLocation } from 'react-router-dom';
import Wellmastericon from '@mui/icons-material/Settings';
import GeoIcon from '@mui/icons-material/Place';
import Wellmonitoricon from '@mui/icons-material/Search';
import PrintReportIcon from '@mui/icons-material/Print';
import DeviceManagerIcon from '@mui/icons-material/Memory';
import ComplaintIcon from '@mui/icons-material/AccessAlarm';
import AssetsIcon from '@mui/icons-material/AccountBalance';
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
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
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
    const location = useLocation();

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
            icon: <Wellmastericon sx={{ color: 'black' }} />,
            path: "/dashboard/wellmaster"
        },
        {
            name: "Device Manager",
            icon: <DeviceManagerIcon sx={{ color: 'black' }} />,
            path: "/dashboard/DeviceManage"
        },
        {
            name: "Well Monitor",
            icon: <Wellmonitoricon sx={{ color: 'black' }} />,
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
            name: "Geo-Location",
            icon: <GeoIcon sx={{ color: 'black' }} />,
            path: "/dashboard/virtual",

        },
        // { name: "Edit Profile", icon: <EditIcon sx={{color:'black'}}/>, path: "/dashboard/edit" },
        // { name: "Log Out", icon: <LogoutIcon sx={{color:'black'}}/>, path: "/dashboard/logout" }
    ]
    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}  >
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
                    <Link key={`sidemenu-item-${index}`} to={text.path} style={{ textDecoration: 'none', color: "black" }}>
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
