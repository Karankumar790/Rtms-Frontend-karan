import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Line, Bar, Pie } from "react-chartjs-2";
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
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import PendingIcon from "@mui/icons-material/Pending";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Textarea } from "flowbite-react";
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

const steps = [
  {
    label: "Employee",
    description: ``,
  },
  {
    label: "Manager",
    description: "",
  },
  {
    label: "Owner",
    description: ``,
  },
];

// -------------------------------Table for  Moblie --------------------------
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
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};

let Tata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};
let Mata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};

let Sata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};
// ------------------------Table for Desktop-----------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B", // Customize background color
    color: theme.palette.common.white, // Text color
    padding: "10px", // Custom padding
    height: "20px", // Specific height for the header row
    fontSize: "16px", // Font size for the header
    textAlign: "left", // Center-align header content (optional)
    // lineHeight: '1.5', // Adjust line height
    // borderBottom: `2px solid ${theme.palette.secondary.main}`, // Add border
    position: "sticky", // Sticky positioning
    zIndex: 1, // Ensure it stays above the rows
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1"),
  // createData('2'),
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  CardOverflow: "scroll",
  overflowY: "scroll",
  height: "70vh",
  width: "47%",
  // bgcolor: "background.paper",
  // bgcolor={"yellow"}

  bgcolor: "white",
  // border: "2px solid black",
  // boxShadow: 24,
  // p: 2,
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

function NotificationHistory() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [chartType, setChartType] = useState("line");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
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
    width: 920px;
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

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Grid container>
        <IconButton>
          <NotificationsIcon sx={{ fontSize: "40px", color: "red" }} />
        </IconButton>
        <Typography variant="h4" mt={1}>
          Notification History
        </Typography>
      </Grid>
      <Grid container spacing={3} pt={3}>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              type="date"
              size="small"
              label="Start Date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true, // Ensures the label is always visible
              }}
              inputProps={{
                min: "2001-02-16",
                max: "2024-08-07",
              }}
              sx={{
                // Optional: Customize the TextField styling as needed
                ".MuiInputBase-root": {
                  // Optional: Style the input field if needed
                },
                "& .MuiInputLabel-root": {
                  // Optional: Style the label if needed
                },
                "& .MuiInputBase-input": {
                  // Optional: Style the input value if needed
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth size="small">
            <TextField
              fullWidth
              type="date"
              size="small"
              label="End Date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true, // Ensures the label is always visible
              }}
              inputProps={{
                min: "2001-02-16",
                max: "2024-08-07",
              }}
              sx={{
                // Optional: Customize the TextField styling as needed
                ".MuiInputBase-root": {
                  // Optional: Style the input field if needed
                },
                "& .MuiInputLabel-root": {
                  // Optional: Style the label if needed
                },
                "& .MuiInputBase-input": {
                  // Optional: Style the input value if needed
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth size="small">
            <TextField
              variant="outlined"
              size="small"
              label="Notification No."
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth size="small">
            <TextField variant="outlined" size="small" label="Well Number" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Custom Search</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={parameter}
              label="Well Location"
              onChange={handleChangeParameter}
            >
              <MenuItem value={0}>
                <em>All</em>
              </MenuItem>
              <MenuItem value={1}>Open Notification</MenuItem>
              <MenuItem value={2}>Close with comment </MenuItem>
              <MenuItem value={3}>Conveted to complaint</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container display={"flex"} justifyContent={"end"} pt={2}>
        <Grid item lg={1.3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
            }}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid container display={"flex"}>
        <Typography variant="h5" mt={2} sx={{ color: "darkgrey" }}>
          Records Found:
        </Typography>
      </Grid>
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
            height: 1000,
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
                <StyledTableCell>Notification</StyledTableCell>
                <StyledTableCell>Data/Time</StyledTableCell>
                <StyledTableCell>Well Number</StyledTableCell>
                <StyledTableCell>Node ID</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Installation</StyledTableCell>
                {/* <StyledTableCell >Well Port</StyledTableCell> */}
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ width: "13%" }}
                  >
                    {/* {row.name} */}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  {/* <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell> */}
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell align="left">
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
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* ------------------------------notification view --------------------------- */}

      <Modal open={open} onClose={handleClose}>
        <Grid container sx={style}>
          <Grid container>
            {/* --------------------------------Textfield Values------------------------------------- */}
            <Grid container mx={2} mt={3}>
              <Grid container>
                <Paper sx={{ mr: "20px" }}>
                  <Grid item lg={12} md={3} sm={6} xs={12} m={2}>
                    <Box>
                      <Typography variant="h5"> Date/Time:</Typography>
                    </Box>
                  </Grid>
                </Paper>
                {/* ----------------------Steper view -------------------------- */}
                <Paper sx={{ p: "20px", mr: "20px" }}>
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label}>
                          <StepLabel
                            optional={
                              index === steps.length - 1 ? (
                                <Typography variant="caption"></Typography>
                              ) : null
                            }
                          >
                            {step.label}
                          </StepLabel>
                          <StepContent>
                            {/* <Typography>{step.description}</Typography> */}
                            {/* <Box sx={{ mb: 2 }}>
                            <Button
                              variant="contained"
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1
                                ? ""
                                : ""}
                            </Button>
                            <Button
                              disabled={index === 0}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              
                            </Button>
                          </Box> */}
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                    {activeStep === steps.length && (
                      <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>
                          All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                          Reset
                        </Button>
                      </Paper>
                    )}
                  </Box>
                </Paper>

                <Paper sx={{ width: "570px" }}>
                  <Grid item lg={12} md={3} sm={6} xs={12} m={2}>
                    {[
                      { label: "Notification No. :", value: "" },
                      { label: "Installation :", value: "" },
                    ].map((item, index) => (
                      <Box key={index}>
                        <Typography variant="h5">{item.label}</Typography>
                        {/* <TextField size="small" variant="standard" disabled fullWidth value={item.value} /> */}
                      </Box>
                    ))}
                  </Grid>

                  <Grid item lg={12} md={3} sm={6} xs={12} m={2}>
                    {[
                      { label: "Well Number :", value: "" },
                      { label: "Description :", value: "" },
                    ].map((item, index) => (
                      <Box key={index}>
                        <Typography variant="h5">{item.label}</Typography>
                        {/* <TextField size="small" fullWidth value={item.value} /> */}
                      </Box>
                    ))}
                  </Grid>

                  <Grid item lg={12} md={3} sm={6} xs={12} m={2}>
                    {[
                      { label: "Location :", value: "" },
                      { label: "Status :", value: "" },
                    ].map((item, index) => (
                      <Box key={index}>
                        <Typography variant="h5">{item.label}</Typography>
                        {/* <TextField size="small" fullWidth value={item.value} /> */}
                      </Box>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            {/* --------------------------------chart------------------------------------- */}
            <Grid container p={2} mt={3}>
              <Grid item lg={9}>
                <Paper elevation={2} sx={{ pb: "5px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      gap: 2,
                    }}
                  >
                    <IconButton
                      onClick={() => setChartType("line")}
                      color={chartType === "line" ? "primary" : "default"}
                    >
                      <ShowChartIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton
                      onClick={() => setChartType("bar")}
                      color={chartType === "bar" ? "primary" : "default"}
                    >
                      <BarChartIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton
                      onClick={() => setChartType("pie")}
                      color={chartType === "pie" ? "primary" : "default"}
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
                      maxHeight: 455,
                      height: 1150,
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
                      After Beam Pressure {"(ABP)"}
                    </Typography>
                    <Typography variant="h4" color={"red"}>
                      2 Kg/cm<sup>2</sup>
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                      Tubing Head Pressure {"(THP)"}
                    </Typography>
                    <Typography variant="h4" color={"green"}>
                      2 Kg/cm<sup>2</sup>
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                      Cashing Head Pressure {"(CHP)"}
                    </Typography>
                    <Typography variant="h4" color={"blue"}>
                      5.326 Kg/cm<sup>2</sup>{" "}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                      Battery {"(%)"}
                    </Typography>
                    <Typography variant="h4" color={"red"}>
                      12%
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#aaaaaa" }}>
                      Solar Voltage {"(V)"}
                    </Typography>
                    <Typography variant="h4" color={"green"}>
                      {" "}
                      12V
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* ------------------Status ----------------------*/}
            <Grid container component={Paper} p={2} mt={2} justifyContent={"space-between"}>
              <Grid
                item
                lg={5.5}
                md={2}
                sm={4}
                xs={12}
                display="flex"
                alignItems="center"
              >
                <FormControl fullWidth size="small">
                  <InputLabel id="simple-select-label">Department</InputLabel>
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
              <Grid
                item
                lg={5.5}
                md={2}
                sm={4}
                xs={12}
                display="flex"
                alignItems="center"
              >
                <FormControl fullWidth size="small">
                  <InputLabel id="simple-select-label">Position</InputLabel>
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
            <Grid container component={Paper} p={2} mt={3}>
              <Grid
                item
                lg={12}
                md={2}
                sm={4}
                xs={12}
                display="flex"
                alignItems="center"
              >
                <Textarea
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="REMARK"
                />
              </Grid>
            </Grid>
            <Box width="100%" textAlign="end" mx={1} fullWidth mt={3}>
              <Button
                variant="contained"
                sx={{ m: "10px", width: "100px", fontSize: "15px" }}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                sx={{ m: "10px", width: "100px", fontSize: "15px" }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{ m: "10px", width: "100px", fontSize: "15px" }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Modal>
      {/* ------------------------------Table for Desktop---------------------------- */}
      <Grid
        container
        md={12}
        lg={12}
        sm={12}
        xs={12}
        mt={2}
        sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
      >
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
          <Grid container mt={2} direction="column">
            {Object.keys(data).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={6}>
                  <Typography variant="body1">{data[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Tata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={6}>
                  <Typography variant="body1">{Tata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Mata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={6}>
                  <Typography variant="body1">{Mata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Sata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={6}>
                  <Typography variant="body1">{Sata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default NotificationHistory;
