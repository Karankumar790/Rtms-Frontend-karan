import { Typography, Grid, Box, Drawer, ListItem, List, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import PageContainer from '../../components/HOC/PageContainer.jsx'
import { Link, Outlet } from 'react-router-dom'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { pink } from '@mui/material/colors';
import Home from '../Dashboard/Home/Home.jsx'

function SideBar() {

    const menuItems = [
        { name: "Home", icon: <OtherHousesOutlinedIcon sx={{ color: 'white' }} />, path: "/Home" },
        { name: "Well Monitor", icon: <LaptopOutlinedIcon sx={{ color: 'white' }} />, path: "/Monitor" },
        { name: "Virtual Flow", icon: <AssignmentOutlinedIcon sx={{ color: 'white' }} />, path: "/Virtual" },
        { name: "Crystal Report", icon: <ClearAllOutlinedIcon sx={{ color: 'white' }} />, path: "/Crystal" },
        { name: "Complaint History", icon: <HistoryOutlinedIcon sx={{ color: 'white' }} />, path: "/History" },
        { name: "Notification History", icon: <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />, path: "/Notification" },
        { name: "Edit Profile", icon: <EditCalendarOutlinedIcon sx={{ color: 'white' }} />, path: "/Profile" },
        { name: "Log Out", icon: <LogoutOutlinedIcon sx={{ color: 'white' }} />, path: "/Logout" }
    ]
    return (
        <PageContainer className='bgImg' showfooter showheader>
            <Grid container sx={{ height: '100%' }} >
                <Grid item lg={2} md={2} sm={2} xs={2} style={{ backgroundColor: 'black' }} >
                    <Box >
                        <List >
                            {menuItems.map((item) => (
                                <Grid color='white'>
                                    <ListItem key={item.name}>
                                        <ListItemIcon sx={{ minWidth: 10 }}>{item.icon}</ListItemIcon>
                                        <ListItemText sx={{ marginLeft: 1 }} primary={item.name} />
                                    </ListItem>
                                </Grid>
                            ))}
                        </List>
                    </Box>

                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>

                    <Home />
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default SideBar