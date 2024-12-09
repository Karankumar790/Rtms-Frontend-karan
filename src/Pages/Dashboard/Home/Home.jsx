import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
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
import Modal from "@mui/material/Modal";
import { borderRadius } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FlowingWell, NotFlowingWell } from "../../../apis/wellService";

import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Line, Bar, Pie } from "react-chartjs-2";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import HistoryModal from "../HistoryModal";
import { totalWells } from "../../../apis/wellService";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

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

let data = {
  "Well No": "1",
  Location: "New York",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Tata = {
  "Well No": "2",
  Location: "Delhi",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Mata = {
  "Well No": "3",
  Location: "UP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Sata = {
  "Well No": "4",
  Location: "MP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  CardOverflow: "scroll",
  overflowY: "scroll",
  height: "70vh",
  width: "55%",

  bgcolor: "white",
  borderRadius: "5px",
};

const options = {
  responsive: true, // makes the chart responsive
  maintainAspectRatio: false, // important for custom sizing
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
};

// Sample chart data for both charts
const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sample Data",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const rows = [createData("1")];

export default function BasicCard() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [totalWellsCount, setTotalWellsCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [chartType, setChartType] = useState("line");
const [notFlowing, setNotFlowing] = useState(0);


  const [formData, setFormData] = useState({
    to: "",
    cc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 120%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  // -----------History Modal--------------------

  const [Modalopen, setModalOpen] = useState(false);

  const ModalhandleOpen = () => setModalOpen(true);
  const ModalhandleClose = () => setModalOpen(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Handlers for date and time changes
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  useEffect(() => {
    const fetchTotalWells = async () => {
      const data = await totalWells();
      // Check if data is successfully fetched and update the state
      if (data && data.totalWellNumberCount) {
        const count=data.totalWellNumberCount||0;
        setTotalWellsCount(count); // Assuming the API returns a count field
      }
    };

    fetchTotalWells();
  }, []);

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
    <div
      style={{
        filter: open ? "blur(8px)" : "none",
        transition: "filter 0.1s ease",
      }}
    >
      <Grid container gap={2}>
        <Grid container spacing={2}>
          <Grid item lg={2.4} md={3} sm={6} xs={12}>
            <CardWrapper>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={well} alt="well" />
                <Box fontSize="x-large">{totalWellsCount}</Box>
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
                <Typography variant="h6" sx={{ color: "blue" }}>
                  Notifications
                </Typography>
              </Box>
              <Box display="flex">
                <img
                  height={"30px"}
                  width={"30px"}
                  src={complaints}
                  alt="noImg"
                  style={{ cursor: "pointer" }}
                />
                <Typography sx={{ color: "blue" }} ml={0.6} variant="h6">
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
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <IconButton
                          sx={{
                            color: "grey",
                            "&:hover": { color: "darkred" },
                            marginRight: "5px",
                          }}
                          onClick={handleOpen}
                        >
                          <VisibilityIcon fontSize="large" />
                        </IconButton>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            {/* ------------------------------Modal view --------------------------- */}

            <Modal open={open}>
              <Grid container sx={style}>
                <Grid container>
                  <Grid container p={2}>
                    <Grid item>
                      <IconButton
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          top: 1,
                          right: 1,
                          fontSize: "22px",
                          color: "black",
                          bgcolor: "transparent",
                          "&:hover": {
                            bgcolor: "red",
                          },
                        }}
                      >
                        <CloseIcon fontSize="50px" />
                      </IconButton>
                    </Grid>
                    {/* --------------------------------Textfield Values------------------------------------- */}
                    <Grid container mx={2} mt={1}>
                      <Grid container>
                        <Paper
                          sx={{
                            width: "990px",
                          }}
                        >
                          <Grid container>
                            <Typography
                              ml={1}
                              mt={2}
                              fontSize={25}
                              p={1}
                              fontWeight={600}
                            >
                              Notification Details
                            </Typography>
                          </Grid>
                          {/* ---------------------- view -------------------------- */}
                          <Box>
                            <Grid container>
                              <Grid item lg={12} md={3} sm={6} xs={12} pl={2}>
                                {[
                                  { label: "Notification No. :", value: "" },
                                ].map((item, index) => (
                                  <Box key={index}>
                                    <Typography
                                      variant="h5"
                                      color={"blue"}
                                      fontWeight={600}
                                    >
                                      {item.label}
                                    </Typography>
                                    {/* <TextField size="small" variant="standard" disabled fullWidth value={item.value} /> */}
                                  </Box>
                                ))}
                              </Grid>

                              <Grid
                                item
                                lg={12}
                                md={3}
                                sm={6}
                                xs={12}
                                pl={2}
                                mb={3}
                              >
                                {[
                                  { label: "Well Number :", value: "" },
                                  { label: "Location :", value: "" },
                                  { label: "Installation :", value: "" },
                                  { label: "Date/Time :", value: "" },
                                  { label: "Description :", value: "" },
                                  { label: "Status :", value: "" },
                                ].map((item, index) => (
                                  <Box key={index}>
                                    <Typography variant="h5" mt={1}>
                                      {item.label}
                                    </Typography>
                                    {/* <TextField size="small" fullWidth value={item.value} /> */}
                                  </Box>
                                ))}
                              </Grid>
                            </Grid>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>

                    {/* --------------------------------chart------------------------------------- */}
                    <Grid container p={2}>
                      <Grid item lg={9}>
                        <Paper elevation={2} sx={{ pb: "5px" }}>
                          <Grid container>
                            <Typography
                              ml={2}
                              mt={2}
                              fontSize={25}
                              fontWeight={500}
                            >
                              Status
                            </Typography>
                          </Grid>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              gap: 2,
                            }}
                          >
                            <IconButton
                              onClick={() => setChartType("line")}
                              color={
                                chartType === "line" ? "primary" : "default"
                              }
                            >
                              <ShowChartIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                            <IconButton
                              onClick={() => setChartType("bar")}
                              color={
                                chartType === "bar" ? "primary" : "default"
                              }
                            >
                              <BarChartIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                            <IconButton
                              onClick={() => setChartType("pie")}
                              color={
                                chartType === "pie" ? "primary" : "default"
                              }
                            >
                              <PieChartIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                          </Box>

                          <div style={{ height: "400px", width: "100%" }}>
                            {chartType === "line" && (
                              <Line
                                data={chartData}
                                options={options}
                                style={{ height: "100%", width: "100%" }}
                              />
                            )}
                            {chartType === "bar" && (
                              <Bar
                                data={chartData}
                                options={options}
                                style={{ height: "100%", width: "100%" }}
                              />
                            )}
                            {chartType === "pie" && (
                              <Pie
                                data={chartData}
                                options={options}
                                style={{ height: "100%", width: "100%" }}
                              />
                            )}
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item lg={3} xs={4}>
                        <Paper>
                          <Box
                            sx={{
                              maxHeight: 505,
                              height: 1200,
                              overflow: "auto",
                              paddingRight: 2,
                              paddingTop: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-end",
                              gap: "0.85rem",
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                              After Beam Pressure(ABP)
                            </Typography>
                            <Typography variant="h5" color={"red"}>
                              2 Kg/cm<sup>2</sup>
                            </Typography>
                            <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                              Tubing Head Pressure(THP)
                            </Typography>
                            <Typography variant="h5" color={"green"}>
                              2 Kg/cm<sup>2</sup>
                            </Typography>
                            <Typography fontSize={17} sx={{ color: "#aaaaaa" }}>
                              Cashing Head Pressure(CHP)
                            </Typography>
                            <Typography variant="h5" color={"blue"}>
                              5.326 Kg/cm<sup>2</sup>
                            </Typography>
                            <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                              Battery (%)
                            </Typography>
                            <Typography variant="h5" color={"red"}>
                              12%
                            </Typography>
                            <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                              Solar Voltage(V)
                            </Typography>
                            <Typography variant="h5" color={"green"}>
                              12V
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>

                    {/* ------------------Status ----------------------*/}
                    <Grid container component={Paper} ml={2} width={"990px"}>
                      <Grid container>
                        <Typography
                          ml={2}
                          mb={2}
                          p={2}
                          fontSize={25}
                          fontWeight={500}
                        >
                          Forward
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={8}
                        md={2}
                        sm={4}
                        xs={12}
                        display={"flex"}
                        gap={3}
                      >
                        <Box>
                          <Typography
                            width={200}
                            display={"flex"}
                            justifyContent={"end"}
                            alignItems={"end"}
                            variant="h5"
                          >
                            Department
                          </Typography>
                        </Box>
                        <FormControl fullWidth size="small">
                          <InputLabel id="simple-select-label">
                            Department
                          </InputLabel>
                          <Select label="Department">
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>HR</MenuItem>
                            <MenuItem value={2}>Finance</MenuItem>
                            <MenuItem value={3}>Engineering</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        lg={8}
                        md={2}
                        sm={4}
                        xs={12}
                        display="flex"
                        alignItems="center"
                        mt={2}
                        gap={3}
                      >
                        <Box>
                          <Typography
                            width={200}
                            display={"flex"}
                            justifyContent={"end"}
                            alignItems={"end"}
                            variant="h5"
                          >
                            Position
                          </Typography>
                        </Box>
                        <FormControl fullWidth size="small">
                          <InputLabel id="simple-select-label">
                            Position
                          </InputLabel>
                          <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            label="Department"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>HR</MenuItem>
                            <MenuItem value={2}>Finance</MenuItem>
                            <MenuItem value={3}>Engineering</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid container>
                        <Grid item lg={8} md={2} sm={6} xs={12} mb={2}>
                          {[
                            { label: "To ", value: formData.to, name: "to" },
                            { label: "Cc", value: formData.cc, name: "cc" },
                          ].map((item, index) => (
                            <Box
                              key={index}
                              m={1}
                              mt={1}
                              gap={3}
                              mb={1}
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ pl: 2 }} // Adds padding to the left side of each Box to align the label-text field pairs uniformly
                            >
                              <Grid item lg={4}>
                                <Typography
                                  variant="h5"
                                  display={"flex"}
                                  justifyContent={"end"}
                                  alignItems={"end"}
                                  width={180}
                                  gap={3}
                                >
                                  {item.label}
                                </Typography>
                              </Grid>
                              <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                value={item.value}
                                name={item.name}
                                onChange={handleChange}
                              />
                            </Box>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* --------------------------------Subject------------------------------------- */}
                    {/* <Grid
              container
              component={Paper}
              p={2}
              mt={3}
              mx={2}
              // sx={{ width: "100%", mt: "20px", mx: "10px" }}
            >
              <Grid
                item
                lg={2}
                md={2}
                sm={4}
                xs={12}
                display="flex"
                alignItems="center"
              >
                <Typography variant="h4" mt={1}>
                  Subject:
                </Typography>
              </Grid>
              <Grid item lg={10} md={10} sm={8} xs={12}>
                <TextField fullWidth variant="outlined"></TextField>
              </Grid>
            </Grid> */}
                    {/* --------------------------------Remark------------------------------------- */}
                    <Grid container component={Paper} p={2} m={2}>
                      <Grid container>
                        <Typography
                          ml={2}
                          mb={2}
                          fontSize={25}
                          fontWeight={500}
                        >
                          Message
                        </Typography>
                      </Grid>
                      <Grid item lg={10} md={2} sm={4} xs={12}>
                        <Textarea
                          // aria-label="minimum height"
                          minRows={10}
                          placeholder="REMARK"
                        />
                      </Grid>
                    </Grid>
                    <Box width="100%" textAlign="end" mx={1} fullWidth mt={1}>
                      <Button
                        variant="contained"
                        sx={{ m: "10px", width: "200px", fontSize: "15px" }}
                      >
                        CREATE COMPLAINT
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ m: "10px", width: "200px", fontSize: "15px" }}
                      >
                        CLOSE NOTIFICATION
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Modal>
          </Grid>
        </Paper>
        <Grid container justifyContent={"end"}>
          <Stack spacing={2}>
            {/* <Pagination count={25} shape="rounded" /> */}
            <Pagination count={25} variant="outlined" shape="rounded" />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}