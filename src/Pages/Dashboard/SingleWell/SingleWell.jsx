import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Paper,
  Divider,
  TableCell,
  tableCellClasses,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

//----------------import icons ------------------------------------------
import well from "../../../../public/assets/WELL.png";
import pressure from "../../../../public/assets/PRESSURE.png";
import battery from "../../../../public/assets/battery.png";
import solar from "../../../../public/assets/SOLAR1.png";
import network from "../../../../public/assets/Network.png";
import map from "../../../../public/assets/map.jpg";

import Chart from "react-apexcharts";

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
    createData('3'),
    createData('4'),
    createData('5'),
    createData('3'),
    createData('4'),
    createData('5'),
];



function SingleWell() {
  const images = [
    { src: well, name: "Well" },
    { src: well, name: "Well" },
    { src: well, name: "Well" },
    { src: pressure, name: "pressure" },
    { src: solar, name: "solar" },
    { src: battery, name: "battery" },
    { src: network, name: "network" },
    { src: network, name: "network" },
  ];

  const lineChartOptions = {
    chart: {
      type: "line",
    },
    stroke: {
      width: 2, // Adjust the width here
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const lineChartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <Grid container>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {images.map((text, index) => (
            <Grid item key={index} lg={1} md={2} sm={3} xs={6}>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                  <img
                    height={"60px"}
                    width={"60px"}
                    border="2px solid black"
                    src={text.src}
                    alt={text.name}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ textDecoration: "none" }}
                />
              </ListItem>
            </Grid>
          ))}
        </List>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={12} sm={4} md={3} lg={6} justifyContent={"space-evenly"}>
          <Typography variant="h4">Physical Details</Typography>
          <Box display={"flex"} flexDirection={"row"} >
            <Box  width={"50%"}>
              <Typography variant="h6" lineHeight={2.2}>
                Well number
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Well Location
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Well installation
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Geolocation latitude
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Geolocation longitude
              </Typography>
            </Box>
            <Box  width={"50%"}>
              <Typography variant="h6" lineHeight={2.2}>
                Well number
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Well Location
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Well installation
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Geolocation latitude
              </Typography>
              <Typography variant="h6" lineHeight={2.2}>
                Geolocation longitude
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={6}  >
          <img height={'220px'} width={'auto'} src={map} alt="map" />
        </Grid>

        {/* <Grid item xs={12} sm={4} md={6} lg={5.3}>
          <Paper>
            <Chart
              options={lineChartOptions}
              series={lineChartSeries}
              type="line"
              height={200}
            />
          </Paper>
        </Grid> */}
      </Grid>
      <Grid
        container
        sx={{
          border: "1px solid black",
          height: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead >
                            <TableRow  >
                                <StyledTableCell>Well Number</StyledTableCell>
                                <StyledTableCell align="left">Well Location</StyledTableCell>
                                <StyledTableCell align="left">Well Installation</StyledTableCell>
                                <StyledTableCell align="left">Latitude</StyledTableCell>
                                <StyledTableCell align="left">Longitude</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">1</StyledTableCell>
                                    <StyledTableCell align="left">5/6/2024</StyledTableCell>
                                    <StyledTableCell align="left">gbz</StyledTableCell>
                                    <StyledTableCell align="left">yes</StyledTableCell>
                                    {/* <StyledTableCell align="left">1</StyledTableCell> */}


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </Grid>
    </>
  );
}

export default SingleWell;
