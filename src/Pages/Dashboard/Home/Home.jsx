import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/joy'

import well from '../../../../public/assets/WELL.png'
import pressure from '../../../../public/assets/PRESSURE.png'
import battery from '../../../../public/assets/battery.png'
import solar from '../../../../public/assets/SOLAR1.png'
import network from '../../../../public/assets/Network.png'






// -------------import for table--------------------------------//

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { shadows } from '@mui/system';
import './Home.css'




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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1'),
  createData('2'),
  createData('3'),
  createData('4'),
  createData('5'),
];

export default function BasicCard() {

  const [showTable1, setShowTable1] = useState(true);
  const [showTable2, setShowTable2] = useState(false);

  const handleToggle = (table) => {
    if (table === 'table1') {
      setShowTable1(true);
      setShowTable2(false);
    } else {
      setShowTable1(false);
      setShowTable2(true);
    }
  }
  return (
    <Grid container gap={6} >
       <Grid container sx={{ display: "flex", justifyContent: "space-between" }} gap={6}>
        <Grid item>
          <Card className='box-shadow' sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Total Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid  item>
          <Card className='box-shadow' sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Flowing Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item>
          <Card className='box-shadow' sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Non Flowing Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item >
          <Card  className='box-shadow' sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={pressure} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>CHP-THP&lt;10KSc</Typography>
            </CardContent>
          </Card>
        </Grid>

        
        {/* <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}> */}
          <Grid item >
            <Card className='box-shadow' sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={battery} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Low Battery</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className='box-shadow' sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={solar} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Low Solar Power</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className='box-shadow' sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={network} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Network Error</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className='box-shadow' sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={network} alt="" srcset="" style={{ width: '6rem', height: '6rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Network Error</Typography>
              </CardContent>
            </Card>
          </Grid>
        {/* </Grid> */}
      </Grid>


      {/* ---------------code for table------------------------------- */}
      



      <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      {showTable1 && <Grid item >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1630 }} aria-label="customized table">
              <TableHead >
                {/* <TableRow  >
                  <StyledTableCell>Current Notification</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow> */}
                <TableRow  >
                  <StyledTableCell>Notification No.</StyledTableCell>
                  <StyledTableCell align="left">Data/Time</StyledTableCell>
                  <StyledTableCell align="left">Well Location</StyledTableCell>
                  <StyledTableCell align="left">Well Installation</StyledTableCell>
                  <StyledTableCell align="left">Well number</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      }
        {showTable2 &&<Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1630 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Complaint No.</StyledTableCell>
                  <StyledTableCell align="left">Date/Time</StyledTableCell>
                  <StyledTableCell align="left">Notification No.</StyledTableCell>
                  <StyledTableCell align="left">Raiser Name</StyledTableCell>
                  <StyledTableCell align="left">Taker Name</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="left">{row.protein}</StyledTableCell>
                    <StyledTableCell align="left">{row.protein}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      }
        </Grid>
      <Button variant='contained'sx={{width:'200px'}} onClick={() => handleToggle('table1')}>Current Notification</Button>
      <Button variant='contained' sx={{width:'200px'}} onClick={() => handleToggle('table2')}> Open Complaint </Button>

    </Grid>

  );
}


