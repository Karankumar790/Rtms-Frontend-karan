import React from "react";
import logo from "/assets/logo.svg";
import { Grid, Typography, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <Grid container bgcolor="#023861" color="#fff" p={1}>
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
            <img src={logo} style={{ width: "5rem", height: "5rem" }} />
          </Box>

          <Typography sx={{
            fontSize: {
              xs: '110%', // small screens
              sm: 'x-large', // medium screens
              md: 'x-large', // large screens
              lg: 'x-large', // extra-large screens
            }
          }}>
            Foxboro Instrument Company
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

        <Grid
          item
          md={4}
          lg={4}
          // sm={4}
          sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
        >
          <Box display="flex" alignItems="center" justifyContent="end" gap={1} mt={2}>
            <Link to={'/checkOrganization'} style={{ textDecoration: 'none' }}>
              <Button sx={{
                backgroundColor: 'darkgreen', // Set your desired background color
                color: 'green', // Set text color to white
                '&:hover': {
                  backgroundColor: '#1565c0', // Set hover color
                }
              }} >
                New Customer
              </Button>
            </Link>
            <AccountCircleIcon sx={{ color: 'white', fontSize: '300%' }} />
          </Box>

        </Grid>
      </Grid>
    </>
  );
}

export default Header;