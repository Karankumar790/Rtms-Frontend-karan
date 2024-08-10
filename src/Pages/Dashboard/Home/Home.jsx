import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { Box, Grid } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const CardWrapper = styled(Card)(() => ({
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
];

export default function BasicCard() {
  const [showTable1, setShowTable1] = React.useState(true);
  const [showTable2, setShowTable2] = React.useState(false);

  const handleToggle = (table) => {
    if (table === "table1") {
      setShowTable1(true);
      setShowTable2(false);
    } else {
      setShowTable1(false);
      setShowTable2(true);
    }
  };
  return (
    <Grid container>
      <Grid container spacing={2} mb={3}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize="large">Total Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize="large">Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>

        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize="large">Non Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={pressure} alt="" style={{ objectFit: 'cover', width: '7rem' }} />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent orientation="horizontal">
              <Typography fontSize="large">CHP-THP&lt;10KSc</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} >
          <CardWrapper>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={battery} alt="" srcset="" />
              <Box fontSize='large'>2122</Box>
            </Grid>
            <CardContent >
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
            <CardContent orientation="horizontal">
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
            <CardContent orientation="horizontal">
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
            <CardContent orientation="horizontal">
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
                    <StyledTableCell>Notification No.</StyledTableCell>
                    <StyledTableCell align="left">Data</StyledTableCell>
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
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table aria-label="customized table">
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
          </TabPanel>
        </Tabs>
      </Grid>
    </Grid>
  );
}
