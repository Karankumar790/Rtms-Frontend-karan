import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Box, Grid } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material';

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
  return (
    <Grid container gap={6} >
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }} gap={6}>
        <Grid item>
          <Card sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Total Wells:</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item>
          <Card sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Flowing Wells:</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item>
          <Card sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>Non Flowing Wells</Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item>
          <Card sx={{ width: 320 }}>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={pressure} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize='large'>CHP-THP$lt;10KSc</Typography>
            </CardContent>
          </Card>

        </Grid>

        
        {/* <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}> */}
          <Grid item >
            <Card sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={battery} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Low Battery</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={solar} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Low Solar Power</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={network} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
                <Box fontSize='large'>2122</Box>
              </Grid>
              <CardContent orientation="horizontal">
                <Typography fontSize='large'>Network Error</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 320 }}>
              <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={network} alt="" srcset="" style={{ width: '5rem', height: '5rem' }} />
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
        <Grid item >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
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

        <Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
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
      </Grid>
    </Grid>

  );
}
