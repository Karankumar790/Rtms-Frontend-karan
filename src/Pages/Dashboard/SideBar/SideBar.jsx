import React from 'react';
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
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';
import DescriptionIcon from '@mui/icons-material/Description';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import ongc_logo from '/assets/ongc2.png';
import { Link } from 'react-router-dom';

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
    const theme = useTheme();

    // Define menu items with their respective icons and paths
    const menuItems = [
        { name: 'Dashboard', icon: <HomeIcon sx={{ color: 'black' }} />, path: '/dashboard' },
        { name: 'Well Monitor', icon: <MonitorIcon sx={{ color: 'black' }} />, path: '/dashboard/monitor' },
        { name: 'Virtual Flow', icon: <ClearAllIcon sx={{ color: 'black' }} />, path: '/dashboard/virtual' },
        { name: 'Crystal Report', icon: <DescriptionIcon sx={{ color: 'black' }} />, path: '/dashboard/crystal' },
        { name: 'Complaint History', icon: <HistoryIcon sx={{ color: 'black' }} />, path: '/dashboard/complaint' },
        { name: 'Notification History', icon: <NotificationsIcon sx={{ color: 'black' }} />, path: '/dashboard/notification' },
        // { name: 'Edit Profile', icon: <EditIcon sx={{ color: 'black' }} />, path: '/dashboard/edit' },
        // { name: 'Log Out', icon: <LogoutIcon sx={{ color: 'black' }} />, path: '/dashboard/logout' }
    ];

    return (
        <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'black' }}>
            <DrawerHeader>
                <img src={ongc_logo} alt='logo' width='83%' />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <List>
                <Divider sx={{ mt: 0.5, mb: 0.5 }} />
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={item.name} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding sx={{ display: 'block', borderBottom: index < menuItems.length - 1 ? '1px solid #ddd' : 'none' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}
