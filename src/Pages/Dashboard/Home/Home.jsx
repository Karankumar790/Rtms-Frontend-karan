import React, { useEffect, useState } from "react";
import {
  Box,
  CardContent,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { Card } from "@mui/joy";

import well from "/assets/WELL.png";
import pressure from "/assets/PRESSURE.png";
import battery from "/assets/battery.png";
import solar from "/assets/SOLAR1.png";
import network from "/assets/Network.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import complaints from "../../../../public/assets/com.jpg";
// -------------import for table--------------------------------//
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "react-tabs/style/react-tabs.css";
import { FlowingWell, NotFlowingWell } from "../../../apis/wellService";

// ---------FUNCTIONS OF TABLE--------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px",
    height: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
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
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  ".card-Content-text": {
    padding: "0 !important",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// -----------------------------Table for Moblie-------------------------------------

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
}));

// let data = {
//   "Well No": "1",
//   Location: "New York",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
// };

// let Tata = {
//   "Well No": "2",
//   Location: "Delhi",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
// };

// let Mata = {
//   "Well No": "3",
//   Location: "UP",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
// };

// let Sata = {
//   "Well No": "4",
//   Location: "MP",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
// };

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



const rows = [createData("1")];

export default function BasicCard() {

  // -------NotFlowing-----------------//
const [notFlowing, setNotFlowing] = useState(0);

useEffect(()=>{
  const fetchNotFlowing = async () => {
    const data = await NotFlowingWell();
    if(data && data.totalNotFlowingConditions){
      const count = data.totalNotFlowingConditions || 0;
      setNotFlowing(count);
    }
  };
  fetchNotFlowing();
},[]);

const [Flowing,setFlowing] = useState(0);

useEffect(()=>{
  const fetchFlowingWell = async () => {
    const data = await FlowingWell();
    if(data && data.totalFlowingConditions){
      const count = data.totalFlowingConditions || 0;
      setFlowing(count);
    }
  };
  fetchFlowingWell();
},[]);

  return (
    <Grid container gap={2}>
      <Grid container spacing={2}>
        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={well} alt="" />
              <Box fontSize="x-large">0</Box>
            </Box>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Total Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={well} alt="" />
              <Box fontSize="x-large">{Flowing}</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={well} alt="" />
              <Box fontSize="x-large">{notFlowing}</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Non Flowing Wells</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img
                src={pressure}
                alt=""
                style={{ objectFit: "cover", width: "7rem" }}
              />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">CHP-THP&lt;10KSc</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img
                src={pressure}
                alt=""
                style={{ objectFit: "cover", width: "7rem" }}
              />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Well THP=ABP</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={battery} alt="" />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Low Battery</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={solar} alt="" />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Low Solar Power</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={network} alt="noImg" />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Network Error</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <img height={'100px'} width={'100px'} src={notifications} alt="noImg" /> */}
              <NotificationsNoneIcon
                sx={{ height: "100px", width: "100px", color: "red" }}
              />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Current Notification</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>

        <Grid item lg={2.4} md={3} sm={6} xs={12}>
          <CardWrapper>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img
                height={"100px"}
                width={"100px"}
                src={complaints}
                alt="noImg"
              />
              <Box fontSize="x-large">0</Box>
            </Grid>
            <CardContent className="card-Content-text">
              <Typography fontSize="large">Open Complaint</Typography>
            </CardContent>
          </CardWrapper>
        </Grid>
      </Grid>
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          marginTop: "10px",
          height: {
            xs: "15rem",
            sm: "20rem",
            md: "25rem",
            lg: "27rem",
          },
        }}
      >
        <Grid container p={1}>
          <Box display={"flex"} gap={2}>
            <Box display="flex">
              <NotificationsNoneIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
              <Typography variant="h6" sx={{color:"blue"}}>Notifications</Typography>
            </Box>
            <Box display="flex">
              <img
                height={"30px"}
                width={"30px"}
                src={complaints}
                alt="noImg"
                style={{ cursor: "pointer" }}
              />
              <Typography sx={{color:"blue"}} ml={0.6} variant="h6">
              Complaints
              </Typography>
            </Box>
          </Box>
          <Grid
            container
            md={12}
            lg={12}
            sm={5}
            xs={4}
            sx={{
              display: { sm: "none", xs: "none", md: "block", lg: "block" },
              height: "100%",
            }}
            mt={1}
          >
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: 620,
                height: 320,
                overflowY: "auto",
              }}
            >
              <Table
                aria-label="customized table"
                stickyHeader
                sx={{
                  minWidth: "800px", // Set minimum width for horizontal scrolling
                }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Notification No.</StyledTableCell>
                    <StyledTableCell>Data/Time</StyledTableCell>
                    <StyledTableCell>Well Number</StyledTableCell>
                    {/* <StyledTableCell>Node ID</StyledTableCell> */}
                    <StyledTableCell>Location</StyledTableCell>
                    <StyledTableCell>Installation</StyledTableCell>
                    {/* <StyledTableCell >Well Port</StyledTableCell> */}
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>View</StyledTableCell>
                    {/* <StyledTableCell> History View</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        // sx={{ width: "13%" }}
                      >
                        {/* {row.name} */}
                      </StyledTableCell>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell
                      // align="left"
                      // sx={{ width: "13%" }}
                      ></StyledTableCell>
                      {/* <StyledTableCell
                  align="left"
                  sx={{ width: "13%" }}
                  ></StyledTableCell> */}
                      <StyledTableCell
                      // align="left"
                      // sx={{ width: "13%" }}
                      ></StyledTableCell>
                      {/* <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell> */}
                      <StyledTableCell
                      // align="left"
                      // sx={{ width: "13%" }}
                      ></StyledTableCell>
                      <StyledTableCell
                      
                      ></StyledTableCell>
                      <StyledTableCell></StyledTableCell>
                      <IconButton
                        sx={{
                          color: "grey",
                          "&:hover": { color: "darkred" },
                          marginRight: "5px",
                        }}
                        // onClick={handleOpen}
                      >
                        <VisibilityIcon fontSize="large" />
                      </IconButton>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>
      <Grid container justifyContent={"end"}>
        <Stack spacing={2}>
          {/* <Pagination count={25} shape="rounded" /> */}
          <Pagination count={25} variant="outlined" shape="rounded" />
        </Stack>
      </Grid>
    </Grid>
  );
}