import React, { useState } from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BallotIcon from "@mui/icons-material/Ballot";
import { Box } from "@mui/system";
import { Line, Bar, Pie } from "react-chartjs-2"; // Import chart.js components
import TableContainer from "@mui/material/TableContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PrintIcon from "@mui/icons-material/Print";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
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

// Registering the necessary components for chart.js
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

// Styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "16px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
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

const rows = [createData("1")];

// Main component
function Monitor() {
  const [selectedOption, setSelectedOption] = useState("");
  const [chartType, setChartType] = useState("line"); // Add state for chart type

  // Handle dropdown change
  const handleDropChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [age, setAge] = React.useState("");
  const [parameters, setParameters] = React.useState("");
  const [report, setReport] = React.useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDates, setSelectedDates] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeParameters = (event) => {
    setParameters(event.target.value);
  };

  const handleChangeReport = (event) => {
    setReport(event.target.value);
  };
  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDateChanges = (event) => {
    setSelectedDates(event.target.value);
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

  const options = {
    responsive: true, // makes the chart responsive
    maintainAspectRatio: false, // important for custom sizing
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      {/* Dropdown to select report type */}
      <Grid container gap={1}>
        <Grid container gap={1}>
          {/* ----------------------Icon and Well Report-----------------------------------  */}
          <Typography fontSize="x-large">
            {" "}
            <IconButton>
              <SummarizeIcon sx={{ fontSize: 40, color: "blue" }} />
            </IconButton>
            Print Report
          </Typography>
          {/* --------------------------Well Report Inputs Field------------------------------------- */}
          <Grid container spacing={2}>
            <Grid item sm={6} md={3} xs={12} lg={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-large-label">
                  Well Number
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={age}
                  label="Well Location"
                  onChange={handleChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>UP</MenuItem>
                  <MenuItem value={20}>MP</MenuItem>
                  <MenuItem value={30}>WB</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} md={3} xs={12} lg={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-large-label">Parameter</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={report}
                  label="Report Type"
                  onChange={handleChangeReport}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Low Bettery</MenuItem>
                  <MenuItem value={20}>Flowing Well</MenuItem>
                  <MenuItem value={30}>Not Flowing Well</MenuItem>
                  <MenuItem value={40}>Low Solar Power</MenuItem>
                  <MenuItem value={50}>Network Error</MenuItem>
                  <MenuItem value={60}>Low Pressure</MenuItem>
                  <MenuItem value={70}>High Pressure</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} md={3} xs={12} lg={2}>
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
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} md={3} xs={12} lg={2}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  label="End Date"
                  value={selectedDates}
                  onChange={handleDateChanges}
                  InputLabelProps={{
                    shrink: true, // Ensures the label is always visible
                  }}
                  inputProps={{
                    min: "2001-02-16",
                    max: "2024-08-07",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} md={3} xs={12} lg={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-large-label">Resolution</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={parameters}
                  label="Parameters"
                  onChange={handleChangeParameters}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>1 minute</MenuItem>
                  <MenuItem value={20}>1 hour</MenuItem>
                  <MenuItem value={30}>1 day</MenuItem>
                  <MenuItem value={40}>1 week</MenuItem>
                  <MenuItem value={50}>1 month</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} md={3} xs={12} lg={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-large-label">
                  Report Type
                </InputLabel>
                <Select
                  labelId="demo-select-large-label"
                  id="demo-select-large"
                  value={selectedOption}
                  label="Report Type"
                  onChange={handleDropChange}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="Matric Report">Matric Report</MenuItem>
                  <MenuItem value="Crystal Report">Crystal Report</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Conditional rendering based on report type */}
      <Grid container mt={2}>
        {/* Conditional rendering based on report type */}
        <Grid container mt={2}>
          {/* Show chart when no report is selected */}
          {selectedOption === "" && (
            <Grid item lg={12}>
              {/* Chart Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginBottom: 4,
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
            </Grid>
          )}
        </Grid>

        {/* Matric Report */}
        <Grid item lg={12}>
          {selectedOption === "Matric Report" && (
            <TableContainer component={Paper}  sx={{ maxHeight: 640, height: 1200, overflow: "auto" }}>
              <Table aria-label="customized table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <StyledTableCell sx={{ fontSize: "18px" }}>
                      Well No.
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      GIP (kg)
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      CHP (kg)
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      THP (kg)
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      Battery %
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      Solar Power (V)
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      Communication
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                      Flow Status
                    </StyledTableCell>
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
                      <StyledTableCell align="left">all good</StyledTableCell>
                      <StyledTableCell align="left">Bad</StyledTableCell>
                      <StyledTableCell align="left">High</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>

        {/* Crystal Report */}
        <Grid item lg={10}>
          {selectedOption === "Crystal Report" && (
            <Grid container sx={{ mb: 4 }}>
              <TableContainer component={Paper}  sx={{ maxHeight: 640, height: 1200, overflow: "auto" }}>
                <Table aria-label="customized table" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{ fontSize: "18px" }}>
                        Well No.
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        GIP (kg)
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        CHP (kg)
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        THP (kg)
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        Battery %
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        Solar Power (V)
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        Communication
                      </StyledTableCell>
                      <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                        Flow Status
                      </StyledTableCell>
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
                        <StyledTableCell align="left">all good</StyledTableCell>
                        <StyledTableCell align="left">Bad</StyledTableCell>
                        <StyledTableCell align="left">High</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Chart Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginBottom: 4,
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
              {chartType === "None" && (
                <Typography variant="h6" textAlign="center">
                  Please select a chart type using the icons above.
                </Typography>
              )}
              {/* Render selected chart */}
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
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Monitor;
