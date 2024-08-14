import React, { useState } from 'react'
import { Box, Button, CardContent, Grid, Typography } from '@mui/material'
import { Card } from '@mui/joy'

import well from '/assets/WELL.png'
import pressure from '/assets/PRESSURE.png'
import battery from '/assets/battery.png'
import solar from '/assets/SOLAR1.png'
import network from '/assets/Network.png'
// -------------import for table--------------------------------//
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// ---------FUNCTIONS OF TABLE--------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const CardWrapper = styled(Card)(() => ({
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  '.card-Content-text': {
    padding:'0 !important',
  }
}))

export default function BasicCard() {
  return (
    <Grid container>
      <Grid container spacing={2} mb={3}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Box>
            <CardContent className='card-Content-text'>
              <Typography fontSize='large'>Total Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>

        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Non Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={pressure} alt="" style={{ objectFit: 'cover', width: '7rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>CHP-THP&lt;10KSc</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} >
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={battery} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Low Battery</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={solar} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Low Solar Power</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={network} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Network Error</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={network} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent className='card-Content-text' >
              <Typography fontSize='large'>Network Error</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
      </Grid>
      {/* ---------------code for table------------------------------- */}
      <Grid container>
        <Tabs style={{ width: '100%' }}>
          <TabList>
            <Tab>
              <Typography fontSize={'large'}>Current Notification</Typography>
            </Tab>
            <Tab>
              <Typography fontSize={'large'}> Open Complaint</Typography>

            </Tab>
          </TabList>
          <TabPanel>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead >
                  <TableRow  >
                    <StyledTableCell sx={{fontSize:'18px'}}>Notification No.</StyledTableCell>
                    <StyledTableCell sx={{fontSize:'1px'}} align="left">Date/Time</StyledTableCell>
                    <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Location</StyledTableCell>
                    <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Installation</StyledTableCell>
                    <StyledTableCell sx={{fontSize:'18px'}} align="left">Well number</StyledTableCell>
                    <StyledTableCell sx={{fontSize:'18px'}} align="left">Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row"> Notification No.</StyledTableCell>
                    <StyledTableCell>25kalori</StyledTableCell>
                    <StyledTableCell>shyam</StyledTableCell>
                    <StyledTableCell>Ramu singh</StyledTableCell>
                    <StyledTableCell>225</StyledTableCell>
                    <StyledTableCell>44555</StyledTableCell>

                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead >
                  <TableRow>
                    <StyledTableCell>Notification No.</StyledTableCell>
                    <StyledTableCell align="left">Data/TIme</StyledTableCell>
                    <StyledTableCell align="left">Well Location</StyledTableCell>
                    <StyledTableCell align="left">Well Installation</StyledTableCell>
                    <StyledTableCell align="left">Well number</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row"> Notification No.</StyledTableCell>
                    <StyledTableCell>25kalori</StyledTableCell>
                    <StyledTableCell>shyam</StyledTableCell>
                    <StyledTableCell>Ramu singh</StyledTableCell>
                    <StyledTableCell>225</StyledTableCell>
                    <StyledTableCell>44555</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Tabs>
      </Grid>
    </Grid>
  );
}


