import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicCard() {
  const [showTable,setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(!showTable);
  }

  
  return (
    <Grid container gap={6} >
      <Grid container sx={{ display: "flex", justifyContent: "space-around" }} gap={6}>
        <Grid item  >

            <Card className='box-shadow'  sx={{ width: 270 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Total Wells:</Typography>
              </CardContent>
            </Card>
        </Grid>

        <Grid item >
          <Card className='box-shadow'  sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Flowing Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item >
          <Card className='box-shadow'  sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Non Flowing Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item >
          <Card  className='box-shadow' sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={pressure} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'> &lt;CHP-THP10KSc&gt;</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Grid item  >
          <Card className='box-shadow'  sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={battery} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Low Battery</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item >
          <Card className='box-shadow'  sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={solar} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Low Solar Power</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item >
          <Card className='box-shadow'  sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={network} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Network Error</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item >
          <Card className='box-shadow' sx={{ width: 270 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={network} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Network Error</Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
      </Grid>


      {/* ---------------code for table------------------------------- */}
      
     <button onClick={handleButtonClick}>
      {showTable ? 'Hide Current Notification' : 'Show Current Notification'}
     </button>

      {showTable && (<Grid container sx={{ display: "flex", justifyContent: 'space-evenly' }}>
        <Grid item >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1750 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Current Notification</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
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
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>)}
    </Grid>

  );
}
