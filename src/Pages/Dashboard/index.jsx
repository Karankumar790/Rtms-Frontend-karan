import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/DashHeader.jsx";
import Sidebar from "../../components/SideBar/SideBar.jsx";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme?.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerToggle = () => {
    setOpen(!open);
};
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex"}}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle }/>
      <Box component="main" sx={{ flexGrow: 1, p: 1, overflowY: "auto"}}>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 1, transition: 'margin 0.3s', marginLeft: open ? 240 : 0 }}
            >
              </Box>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
