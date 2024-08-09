// import { Typography, Grid, Box, Drawer, ListItem, List, ListItemIcon, ListItemText } from '@mui/material'
// import React from 'react'
// import PageContainer from '../../../components/HOC/PageContainer'
// import { Link, Outlet } from 'react-router-dom'
// import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
// import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
// import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
// import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// function SideBar() {

//     const menuItems = [
//         { name: "Home", icon: <OtherHousesOutlinedIcon />, path: "/Home" },
//         { name: "Well Monitor", icon: <LaptopOutlinedIcon />, path: "/Monitor" },
//         { name: "Virtual Flow", icon: <AssignmentOutlinedIcon />, path: "/Virtual" },
//         { name: "Crystal Report", icon: <ClearAllOutlinedIcon />, path: "/Crystal" },
//         { name: "Complaint History", icon: <HistoryOutlinedIcon />, path: "/History" },
//         { name: "Notification History", icon: <NotificationsNoneOutlinedIcon />, path: "/Notification" },
//         { name: "Edit Profile", icon: <EditCalendarOutlinedIcon />, path: "/Profile" },
//         { name: "Log Out", icon: <LogoutOutlinedIcon />, path: "/Logout" }
//     ]
//     return (
//         <PageContainer >
//             <Grid container sx={{bgcolor:'lightskyblue'}} height={605}>
//                     <Box>
//                         <List>
//                             {menuItems.map((item) => (
//                                 <Link to={item?.path}>
//                                     <ListItem key={item.name}>
//                                         <ListItemIcon>{item.icon}</ListItemIcon>
//                                         <ListItemText primary={item.name} />
//                                     </ListItem>
//                                 </Link>
//                             ))}
//                         </List>
//                     </Box>
//             </Grid>
//         </PageContainer>
//     )
// }

// export default SideBar
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import ongc_logo from '/assets/ongc2.png'
import HomeIcon from '@mui/icons-material/Home';
import MonitorIcon from '@mui/icons-material/Monitor';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

    return (
        <Drawer variant="permanent" open={open} sx={{backgroundColor:"black"}}>
            <DrawerHeader>
                <img src={ongc_logo} alt='logo' width='83%' />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['menu', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        
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
                                {index % 2 === 0 ? <HomeIcon /> : <MonitorIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Complaint History', 'Notification History', 'Edit Profile','Log Out'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block'}}>
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
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

