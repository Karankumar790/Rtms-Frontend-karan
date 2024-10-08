import React from "react";
import logo from "/assets/logo.svg";
import { Grid, Typography, Box } from "@mui/material";


function Header() {
  return (
    <>
      <Grid container bgcolor="#023861" color="#fff" p={0.5}>
        <Grid
          item
          md={8}
          lg={8}
          sm={12}
          display="flex"
          gap="2"
          alignItems="center"
        >
          <Box>
            <img src={logo} style={{ width: "6rem", height: "6rem" }} />
          </Box>
{/* Foxboro */}
          <Typography sx={{
            fontSize: {
              xs: '110%', // small screens
              sm: 'x-large', // medium screens
              md: 'x-large', // large screens
              lg: 'x-large', // extra-large screens
            }
          }}>
            Oil and Natrual Gas Corporation Limited
            <Typography sx={{
              fontSize: {
                xs: 'small', // small screens
                sm: 'large', // medium screens
                md: 'large', // large screens
                lg: 'large', // extra-large screens
              },
            }}>
              Real Time Well Monitoring System
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
