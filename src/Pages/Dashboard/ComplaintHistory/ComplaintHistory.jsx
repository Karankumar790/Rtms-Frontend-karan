import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import PrintIcon from "@mui/icons-material/Print";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import ComplaintIcon from "@mui/icons-material/AccessAlarm";
import CheckIcon from "@mui/icons-material/Check";

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

// -------------------------------Table for  Moblie --------------------------
const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom:` 1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom:` 1px solid ${theme.palette.divider}`,
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
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "8px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "18px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    textAlign: "center",
    padding: "5px",
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
  height: "51vh",
  width: "40%",

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

function ComplaintHistory() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpen(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [chartType, setChartType] = useState("line");
  const [installation, setInstallation] = useState("");
   const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
  
    // Handlers for date and time changes
    const handleTimeChange = (event) => {
      setSelectedTime(event.target.value);
    };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDateChange2 = (event) => {
    setSelectedDate2(event.target.value);
  };

  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
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
  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  const stepss = [
    { label: 'Complaint', value: '12' },
    { label: 'Date/Time', value: '2024-11-28T15:30' },
    { label: 'Sender', value: 'Dubey' },
    { label: 'Department', value: 'Site Alpha, Block B' },
    { label: 'Reciever Name', value: 'Anil' },
    { label: 'Department', value: 'Ground Department ' },
    { label: 'Description', value: 'well number 10 is not working' },
    { label: 'Status', value:`${showTime} PM` },
  ];

  const StepIcon = () => {
    return (
      <Box
        sx={{
          backgroundColor: "green", // Orange background for the icon
          color: "white", // White check icon
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
        }}
      >
        <CheckIcon />
      </Box>
    );
  };

  return (
    <div
      style={{
        filter: open ? "blur(8px)" : "none",
        transition: "filter 0.1s ease",
      }}
    >
      <Grid container>
        <IconButton>
          <ComplaintIcon sx={{ fontSize: "40px", color: "red" }} />
        </IconButton>
        <Typography variant="h4" mt={1}>
          Complaint History
        </Typography>
        <IconButton sx={{position:'absolute', right:'15px'}}>
        <PrintIcon sx={{ fontSize: "40px", color: "red" }} />
        </IconButton>
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
              value={""}
              onChange={handleDateChange2}
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
          <Box display="flex" alignItems="center">
            <FormControl fullWidth size="small">
              <InputLabel id="activity-label">Department</InputLabel>
              <Select
                labelId="activity-label"
                id="activity-select"
                value={installation}
                label="Activity"
                onChange={handleChangeInstallation}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value={10}>Well</MenuItem>
                <MenuItem value={20}>Router</MenuItem>
                <MenuItem value={30}>Device</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <FormControl fullWidth size="small">
            <TextField variant="outlined" size="small" label="Complaint No." />
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
              <MenuItem value={1}>Open Complaint</MenuItem>
              <MenuItem value={2}>Close Complaint </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container display={"flex"} justifyContent={"end"} pt={2} gap={2}>
      <Grid item lg={1.3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8C000B", // Change button color to green
              "&:hover": {
                backgroundColor: "#8C000B", // Optional: Change color on hover
              },
              fontSize: "16px",
            }}
            fullWidth
          >
            Reset
          </Button>
          </Grid>
        
        <Grid item lg={1.3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
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
              minWidth: "900px", // Set minimum width for horizontal scrolling
              tableLayout: "fixed",
              width: "100%",
            }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Complaint No.</StyledTableCell>
                <StyledTableCell>Date/Time</StyledTableCell>
                <StyledTableCell>Sender Name</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Receiver Name</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
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
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  {/* <StyledTableCell align="center" sx={{ width: '13%' }}></StyledTableCell> */}
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ width: "13%" }}
                  ></StyledTableCell>
                  <StyledTableCell align="center">
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
        <Grid container justifyContent={"end"} mt={1}>
          <Stack spacing={2}>
            <Pagination count={1} variant="outlined" shape="rounded" />
          </Stack>
        </Grid>
      </Grid>

      {/* ------------------------------notification view --------------------------- */}

      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ width: "100%", height: "77%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 2,
                paddingLeft: 2,
                pt: 2,
              }}
            >
              <Box>
                <Typography variant="h4"> Complaint History</Typography>
              </Box>
              <Box
                position="absolute"
                sx={{
                  top: "5%",
                  right: "-2.2%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <IconButton onClick={handleCloses} color=" solid black">
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{ padding: 2, borderRadius: 2, width: "95%", height: "83%" }}
            >
              <Stepper
                activeStep={0} // Only the first step is active
                orientation="vertical"
                connector={
                  <StepConnector
                    sx={{
                      "& .MuiStepConnector-line": {
                        minHeight: "100%", // Ensures the connector spans the full height
                        borderColor: "#ccc", // Maintains the color
                      },
                    }}
                  />
                }
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  padding: 2, // Adds padding for spacing
                  height: "100%",
                }}
              >
                {/* First step with all content */}
                <Step key="all-steps">
                  <StepLabel StepIconComponent={StepIcon}>Step 1</StepLabel>
                  <StepContent>
                    {stepss.map((step) => (
                      <div
                        key={step.label}
                        style={{
                          marginBottom: "3px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            fontSize:
                              step.label === "Notification"
                                ? "1.8rem"
                                : "1.3rem",
                            fontWeight:
                              step.label === "Notification" ? "bold" : "bold", // Adjust font weight here
                            marginRight: "10px",
                          }}
                        >
                          {step.label}:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            fontSize: step.value === "12" ? "1.8rem" : "1.3rem",
                            fontWeight: step.value === "12" ? "bold" : "400", // Adjust font weight here
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {step.value}
                        </Typography>
                      </div>
                    ))}
                  </StepContent>
                </Step>

                {/* Second step without content */}
                {/* <Step key="empty-step">
                  <StepLabel StepIconComponent={StepIcon}>
                    Step 2
                  </StepLabel>
                  <StepContent>
                    {/* No content displayed here */}
                {/* </StepContent>
                </Step> */}

                {/* Additional steps, if any, can be left empty or hidden */}
                {stepss.length > 2 && <Step sx={{ visibility: "hidden" }} />}
                {stepss.length > 3 && <Step sx={{ visibility: "hidden" }} />}
                {stepss.length > 4 && <Step sx={{ visibility: "hidden" }} />}
                {stepss.length > 5 && <Step sx={{ visibility: "hidden" }} />}
              </Stepper>
            </Box>
            <Box display={"flex"} justifyContent={"end"} p={3}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green", // Change button color to green
                  "&:hover": {
                    backgroundColor: "darkgreen", // Optional: Change color on hover
                  },
                  fontSize: "16px",
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>

        {/* <Grid container sx={style}> */}
        {/* <Grid container p={2}> */}
        {/* <IconButton
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
            </IconButton> */}
        {/* <HistoryModal /> */}
        {/* --------------------------------Textfield Values------------------------------------- */}
        {/* <Grid container mx={2} mt={1}>
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
                      Complaint Details
                    </Typography>
                  </Grid>
                  {/* ---------------------- view -------------------------- */}
        {/* <Box>
                    <Grid container>
                      <Grid item lg={12} md={3} sm={6} xs={12} pl={2}>
                        {[{ label: "Complaint No. :", value: "" }].map(
                          (item, index) => (
                            <Box key={index}>
                              <Typography
                                variant="h5"
                                color={"blue"}
                                fontWeight={600}
                              >
                                {item.label}
                              </Typography>
                              {/* <TextField size="small" variant="standard" disabled fullWidth value={item.value} /> */}
        {/* </Box> */}
        {/* )
                        )}
                      </Grid> */}

        {/* <Grid item lg={12} md={3} sm={6} xs={12} pl={2} mb={3}>
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
        {/* </Box> */}
        {/* ))} */}
        {/* </Grid> */}
        {/* </Grid> */}
        {/* </Box>  */}
        {/* </Paper> */}
        {/* </Grid> */}
        {/* </Grid>  */}

        {/* --------------------------------chart------------------------------------- */}
        {/* <Grid container p={2}>
              <Grid item lg={9}>
                <Paper elevation={2} sx={{ pb: "5px" }}>
                  <Grid container>
                    <Typography ml={2} mt={2} fontSize={25} fontWeight={500}>
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
            </Grid> */}

        {/* ------------------Status ----------------------*/}
        {/* <Grid container component={Paper} ml={2} width={"990px"}>
              <Grid container>
                <Typography ml={2} mb={2} fontSize={25} fontWeight={500}>
                  Forward
                </Typography>
              </Grid>
              <Grid item lg={8} md={2} sm={4} xs={12} display={"flex"} gap={3}>
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
                  <InputLabel id="simple-select-label">Department</InputLabel>
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
              <Grid container>
                <Grid item lg={8} md={3} sm={6} xs={12} mb={2} mt={1}>
                  {[
                    { label: "To ", value: formData.to, name: "to" },
                    { label: "Cc", value: formData.cc, name: "cc" },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      p={1}
                      gap={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ pl: 2 }}
                    >
                      <Grid item lg={4}>
                        <Typography
                          variant="h5"
                          display={"flex"}
                          justifyContent={"end"}
                          alignItems={"end"}
                          width={182}
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
            </Grid> */}

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
        {/* <Grid container component={Paper} p={2} m={2}>
              <Grid container>
                <Typography ml={2} mb={2} fontSize={25} fontWeight={500}>
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
            </Grid> */}
        {/* <Box width="100%" textAlign="end" mx={1} fullWidth mt={1}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ m: "10px", width: "200px", fontSize: "15px" }}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
              <Button
                variant="contained"
                sx={{ m: "10px", width: "200px", fontSize: "15px" }}
              >
                CLOSE COMPLAINT
              </Button>
              <Button
                variant="contained"
                sx={{ m: "10px", width: "200px", fontSize: "15px" }}
              >
                UNABLE TO CLOSE
              </Button>
            </Box> */}
        {/* </Grid> */}
        {/* </Grid> */}
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

export default ComplaintHistory;