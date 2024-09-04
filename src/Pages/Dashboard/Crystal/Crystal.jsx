import React from "react";
import PageContainer from "../../../components/HOC/PageContainer";
import { Button, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chart from "react-apexcharts";
import { Box } from "@mui/system";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import { BarChart } from '@mui/x-charts/BarChart';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("5"),
];


const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'white',
}));

let data = {
  "Well No": "1",
  "Location": "New York",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Tata = {
  "Well No": "2",
  "Location": "Delhi",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Mata = {
  "Well No": "3",
  "Location": "UP",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Sata = {
  "Well No": "4",
  "Location": "MP",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};


function Monitor() {
  const [age, setAge] = React.useState("");
  const [parameters, setParameters] = React.useState("");
  const [report, setReport] = React.useState("");
  const [resolution, setResolution] = React.useState("");

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
    <div>
      <Grid container gap={1}>
        <Typography fontSize='x-large'>Well Report</Typography>
        <Grid container spacing={2}>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Well Number</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={age}
                label="Well Location"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item sm={6} md={3} xs={12} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-select-large-label">
              Well Installation
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={installation}
              label="Well Installation"
              onChange={handleChangeInstallation}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} md={3} xs={12} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-select-large-label">Well Number</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={number}
              label="Well Number"
              onChange={handleChangeNumber}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}

          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth >
              <TextField
                size="small"
                type="date"
                slotProps={{
                  input: {
                    min: "2001-02-16",
                    max: "2024-08-10",
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth >
              <TextField
                size="small"
                type="date"
                slotProps={{
                  input: {
                    min: "2001-02-16",
                    max: "2024-08-07",
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Resolution</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={parameters}
                label="Parameters"
                onChange={handleChangeParameters}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography fontSize='x-large'>Global Report</Typography>
        <Grid container spacing={3}>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Parameter</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={report}
                label="Report Type"
                onChange={handleChangeReport}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth>
              <TextField
                size="small"
                type="date"
                slotProps={{
                  input: {
                    min: "2001-02-16",
                    max: "2024-08-10",
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth >
              <TextField
                size="small"
                type="date"
                slotProps={{
                  input: {
                    min: "2001-02-16",
                    max: "2024-08-07",
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Resolution</InputLabel>
              <Select

                labelId="demo-select-small-label"
                id="demo-select-large"
                value={resolution}
                label="Resolution"
                onChange={handleChangeResolution}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* ----------------Table--------------------------- */}
        <Grid container mt={2}>
          <Tabs style={{ width: '100%', padding: '.12%' }}>
            <TabList >
              <Tab style={{ whiteSpace: 'break-spaces' }}>
                <Typography fontSize={'large'}> View Table</Typography>
              </Tab>
              <Tab>
                <Typography fontSize={'large'}>View Graph</Typography>
              </Tab>
            </TabList>
            <TabPanel >
              <Grid container sx={{ display: { sm: "block", xs: "none", md: "block", lg: "block" } }}>

                <TableContainer component={Paper} >
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ fontSize: "18px" }}>
                          Notification
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                          Data/Time
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                          Location
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                          Installation
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                          number
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                          Description
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
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              {/* ----------------------Table for Moblie-------------- */}
              <Grid container md={12}
                lg={12}
                sm={12}
                xs={12}
                sx={{ display: { sm: "none", xs: "block", md: "none", lg: "none" } }}>
                <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
                  <Grid container mt={2} direction="column">
                    {Object.keys(data).map((header, index) => (
                      <Grid container key={index}>
                        {/* Header Section */}
                        <StyledGridItem item xs={6}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
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
            </TabPanel>
            {/* ---------------chart---------------------------- */}
            <TabPanel style={{ width: '100%' }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Paper sx={{ bgcolor: "#F8F8F8" }}>
                    <Chart
                      options={lineChartOptions}
                      series={lineChartSeries}
                      type="bar"
                      height={515}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </TabPanel>
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
}

export default Monitor;
