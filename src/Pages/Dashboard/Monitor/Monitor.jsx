import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PodcastsIcon from '@mui/icons-material/Podcasts';
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
import well from "/assets/WELL.png";
import { borderRadius, Box, height, width } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  deviceData,
  getAllInstallation,
  getLocation,
  wellMonitorData,
} from "../../../apis/WellService";
import { useSelector } from "react-redux";
import { state } from "@antv/g2plot/lib/adaptor/common";
import { Line, Bar, Pie } from "react-chartjs-2";
import GeoIcon from "@mui/icons-material/Place";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  CardOverflow: "scroll",
  overflowY: "scroll",
  height: "70vh",
  // width: "35%",
  // bgcolor: "background.paper",
  // bgcolor={"yellow"}

  bgcolor: "white",
  // border: "2px solid black",
  // boxShadow: 24,
  // p: 2,
};

const containerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  height: "75vh",
  // width: "35%",
  // bgcolor: "background.paper",
  // bgcolor={"yellow"}
  borderRadius: "1rem",
  bgcolor: "white",
  // border: "2px solid black",
  boxShadow: 24,
  p: 2,
};

// --------------------------Table for Moblie-----------------------
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
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Tata = {
  "Well No": "1",
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Mata = {
  "Well No": "1",
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Sata = {
  "Well No": "1",
  "GIP(kg)": "New York",
  "CHP(kg)": "01/01/2021",
  "THP(kg)": "40.7128 N",
  "Battery%": "74.0060 W",
  "Solar power(V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

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
    padding: "6px",
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

const initialData = [
  {
    employeeId: "01",
    Parameter: "GIP (Kg/Cm²)",
    NormalAlert: "",
    CriticalAlert: "",
    Condition: "",
    Description: "",
  },
  {
    employeeId: "02",
    Parameter: "CHP (Kg/Cm²)",
    NormalAlert: "",
    CriticalAlert: "",
    Condition: "",
    Description: "",
  },
  {
    employeeId: "03",
    Parameter: "THP (Kg/Cm²)",
    NormalAlert: "",
    CriticalAlert: "",
    Condition: "",
    Description: "",
  },
  {
    employeeId: "05",
    Parameter: "Battery (%)",
    NormalAlert: "",
    CriticalAlert: "",
    Condition: "",
    Description: "",
  },
  {
    employeeId: "06",
    Parameter: "Solar (V)",
    NormalAlert: "",
    CriticalAlert: "",
    Condition: "",
    Description: "",
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1"),
  // createData("2"),
];

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

function Monitor() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [installation, setInstallation] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const organizationName = useSelector((state) => state.auth.organization);
  const [locations, setLocations] = useState([]);
  const [selectedInstallation, setSelectedInstallation] = useState("");
  const [installations, setInstallations] = useState([]);
  const [allLocForWell, setAllLocForWell] = useState("");
  const [deviceDataList, setDeviceDataList] = useState([]);
  const [wellNumber, setWellNumber] = useState([2, 8]);
  const [selectedOption, setSelectedOption] = useState("");
  const [chartType, setChartType] = useState("line"); // Add state for chart type

  // Handle dropdown change
  const handleDropChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // fetching installation
  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    setAllLocForWell(selectedLocation);

    if (selectedLocation) {
      try {
        const data = await getAllInstallation(
          selectedLocation,
          organizationName
        );
        if (data && data.message === "Installations fetched successfully") {
          setInstallations(data.data.map((inst) => inst.name)); // Extract installation names
        } else {
          setInstallations([]);
        }
      } catch (error) {
        console.error("Error fetching installations:", error);
        setInstallations([]); // Clear installations on error
      }
    } else {
      setInstallations([]); // Clear installations if no location is selected
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const [employeeData, setEmployeeData] = useState(initialData);

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
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

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocation(organizationName);
      if (data && data.message === "Well locations fetched successfully") {
        setLocations(data.data);
      }
    };

    fetchLocations();
  }, [organizationName]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await deviceData(organizationName);
        if (data.success) {
          setDeviceDataList(data.data);
          localStorage.setItem("deviceDataList", JSON.stringify(data.data));
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [organizationName]);

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, 12); // Adjust zoom level as needed
    return null;
  }

  const [coords, setCoords] = useState([0, 0]); // Initial coordinates

  useEffect(() => {
    // Retrieve coordinates from local storage
    const lat = parseFloat(localStorage.getItem("latitude"));
    const lng = parseFloat(localStorage.getItem("longitude"));

    if (!isNaN(lat) && !isNaN(lng)) {
      setCoords([lat, lng]); // Set the coordinates from local storage
    }
  }, []); // Only run on mount
  return (
    <div
      style={{
        filter: open ? "blur(8px)" : "none",
        transition: "filter 0.1s ease",
      }}
    >
      {/* ------------------------Img and Content-------------------------------------- */}
      <Grid container>
        <Grid item display={"flex"} lg={4} md={8} sm={12} xs={12}>
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={well} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box pt={1}>
            <Typography variant="h4">Well Monitor</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* ------------------------Inputs------------------------------------------------ */}
      <Grid container spacing={3} pt={3}>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="location-label">Locations</InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={allLocForWell}
              label="Location"
              onChange={handleLocationChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                    overflowY: "scroll",
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {locations.map((loc, index) => (
                <MenuItem key={index} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="installation-label">Installation</InputLabel>
            <Select
              labelId="installation-label"
              id="installation-select"
              value={selectedInstallation}
              label="Installation"
              onChange={(e) => setSelectedInstallation(e.target.value)}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                    overflowY: "scroll",
                  },
                },
              }}
            >
              {installations.length > 0 ? (
                installations?.map((installation, index) => (
                  <MenuItem key={index} value={installation}>
                    {installation}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No Installations Available</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Well Number</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={number}
              label="Well Number"
              onChange={handleChangeNumber}
            >
              <MenuItem value={10}>2</MenuItem>
              <MenuItem value={20}>8</MenuItem>
              <MenuItem value={30}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Parameter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={parameter}
              label="Well Location"
              onChange={handleChangeParameter}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={1}>Low Battery</MenuItem>
              <MenuItem value={2}>Low Solar Power</MenuItem>
              <MenuItem value={3}>Network Error</MenuItem>
              <MenuItem value={4}>Flowing Wells</MenuItem>
              <MenuItem value={5}>Non Flowing Wells</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* ------------------------Button------------------------------------------------ */}
      <Grid container display={"flex"} justifyContent={"end"}>
        <Grid
          item
          lg={1.3}
          md={4}
          sm={8}
          xs={12}
          paddingTop={3}
          paddingBottom={1.4}
        >
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

      {/* -----------------Table for Desktop----------------------------------- */}
      <Grid
        container
        mt={2}
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontSize: "18px" }}>
                  Well No.
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Node ID
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  GIP (Kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  CHP (Kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  THP (Kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Battery (%)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Solar (V)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Flow Status
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Alerts
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    2
                  </StyledTableCell>
                  <StyledTableCell align="left">.123</StyledTableCell>
                  <StyledTableCell align="left">2.45</StyledTableCell>
                  <StyledTableCell align="left">3.123</StyledTableCell>
                  <StyledTableCell align="left">2.23</StyledTableCell>
                  <StyledTableCell align="left">6.342</StyledTableCell>
                  <StyledTableCell align="left">1.89</StyledTableCell>
                  <StyledTableCell align="left">Normal</StyledTableCell>
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
              ))} */}
              {deviceDataList?.map((device, index) => (
                <StyledTableRow key={device._id} sx={{ height: "80px" }}>
                  <StyledTableCell component="th" scope="row">
                    {wellNumber[index] || "N/A"}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.NodeAdd}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.P1}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.P2}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.P3}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.Bat}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {device.data.Solar}
                  </StyledTableCell>
                  <StyledTableCell align="left"> {}</StyledTableCell>
                  <StyledTableCell align="left"> {}</StyledTableCell>

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
      {/* --------------------Table for Moblie--------------------------------- */}

      <Grid
        container
        md={12}
        lg={12}
        sm={12}
        xs={12}
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

      <Modal open={open} onClose={handleClose}>
        <Grid container lg={8.1} sx={containerStyle}>
          <Grid
            container
            lg={11.9}
            md={8}
            sm={10}
            xs={12}
            borderRadius={3}
            overflow="auto"
            // height="70vh"
            sx={style}
            // mx={2}
          >
            {/*---------------- input field -------------------     */}
            {/* <Box
                      width={"100%"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        // my: 2,
                        // bgcolor: "pink",
                      }}
                    >
                      <Typography variant="h4" component="h2">
                        Well Number
                      </Typography>
                    </Box> */}
            <Grid container>
              {/* Header */}

              <Paper sx={{ width: "100%", mt: "20px", mx: "14px" }}>
                <Grid container gap={2}>
                  <Grid
                    item
                    lg={2}
                    md={3}
                    sm={6}
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // bgcolor='pink'
                  >
                    <img
                      src={well}
                      alt="img"
                      height={"150px"}
                      width={"150px"}
                    />
                  </Grid>
                  <Grid item lg={9}>
                    <Grid container>
                      <Grid lg={12} md={3} sm={6} xs={12} p={2}>
                        <Box
                          width={"100%"}
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            // my: 2,
                            // bgcolor: "pink",
                          }}
                        >
                          <Typography variant="h4" component="h2">
                            Well Number
                          </Typography>
                        </Box>
                      </Grid>
                      {/* Second Section: Location and Installation */}
                      <Grid item lg={4} md={3} sm={6} xs={12} p={2}>
                        {[
                          { label: "Location :", value: "" },
                          { label: "Installation :", value: "" },
                        ].map((item, index) => (
                          <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h5">{item.label}</Typography>
                            {/* <TextField size="small" variant="standard" disabled fullWidth value={item.value} /> */}
                          </Box>
                        ))}
                      </Grid>

                      {/* Third Section: Well Type and Landmark */}
                      <Grid item lg={4} md={3} sm={6} xs={12} p={2}>
                        {[
                          { label: "Well Type :", value: "" },
                          { label: "Landmark :", value: "" },
                        ].map((item, index) => (
                          <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h5">{item.label}</Typography>
                            {/* <TextField size="small" fullWidth value={item.value} /> */}
                          </Box>
                        ))}
                      </Grid>

                      {/* Fourth Section: Status and Last Update */}
                      <Grid item lg={4} md={3} sm={6} xs={12} p={2}>
                        {[
                          { label: "Status :", value: "" },
                          { label: "Last Update :", value: "" },
                        ].map((item, index) => (
                          <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h5">{item.label}</Typography>
                            {/* <TextField size="small" fullWidth value={item.value} /> */}
                          </Box>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* ---------chart----------------------------- ------------- */}
            {/* <Grid container mt={5}>
            <IconButton>
              <DataThresholdingIcon sx={{ fontSize: "40px", color: "red" }} />
            </IconButton>
            <Typography variant="h4" mt={1}>
              Data Graphs
            </Typography>
          </Grid> */}
            <Grid container p={2} mt={3}>
              <Grid item lg={9}>
                {/* Chart Buttons */}
                <Paper elevation={2} sx={{ pb: "5px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      gap: 2,
                      // marginBottom: 1,
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
                      paddingRight:2 ,
                      paddingTop:1,
                      display:"flex",
                      flexDirection:'column',
                      alignItems:'flex-end',
                      gap:'0.85rem'

                    }}
                  >
                    <Typography variant="h6" sx={{color:"#aaaaaa"}}>After Beam Pressure {"(ABP)"}</Typography>
                    <Typography variant="h4" color={'red'}>2 Kg/cm<sup>2</sup></Typography>
                    <Typography variant="h6" sx={{color:"#aaaaaa"}}>Tubing Head Pressure {"(THP)"}</Typography>
                    <Typography variant="h4" color={'green'}>2 Kg/cm<sup>2</sup></Typography>
                    <Typography variant="h6" sx={{color:"#aaaaaa"}}>Cashing Head Pressure {"(CHP)"}</Typography>
                    <Typography variant="h4" color={'blue'}>5.326 Kg/cm<sup>2</sup> </Typography>
                    <Typography variant="h6" sx={{color:"#aaaaaa"}}>Battery {"(%)"}</Typography>
                    <Typography variant="h4" color={'red'}>12%</Typography>
                    <Typography variant="h6" sx={{color:"#aaaaaa"}}>Solar Voltage {"(V)"}</Typography>
                    <Typography variant="h4" color={'green'}> 12V</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Grid container mt={5}>
              <IconButton>
                <DataThresholdingIcon sx={{ fontSize: "40px", color: "red" }} />
              </IconButton>
              <Typography variant="h4" mt={1}>
                Threshold Values
              </Typography>
            </Grid>
            <Grid container>
              <Paper sx={{ mx: "15px", width: "100%" }}>
                <Grid container>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontSize: "1.5rem" }}>
                          Parameter
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                          Normal Alert
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.5rem" }}>
                          Condition
                        </TableCell>
                        {/* <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      Description
                    </TableCell> */}
                        <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                          Critical Alert
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.5rem" }}>
                          Condition
                        </TableCell>
                        {/* <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      Description
                    </TableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {employeeData?.map(
                        ({
                          employeeId,
                          Parameter,
                          NormalAlert,
                          CriticalAlert,
                          Condition,
                          // Description,
                          Condition1,
                          // Description1,
                        }) => (
                          <TableRow key={employeeId}>
                            <TableCell>
                              <Typography>{Parameter}</Typography>
                            </TableCell>
                            <TableCell>
                              <TextField
                                name="NormalAlert"
                                value={NormalAlert}
                                onChange={(e) => onChangeInput(e, employeeId)}
                                variant="outlined"
                                size="small"
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <FormControl
                                variant="outlined"
                                size="small"
                                fullWidth
                              >
                                <Select
                                  labelId={`condition-label-${employeeId}`}
                                  name="Condition1"
                                  value={Condition1}
                                  onChange={(e) => onChangeInput(e, employeeId)}
                                  size="small"
                                  fullWidth
                                >
                                  <MenuItem value="High">High</MenuItem>
                                  <MenuItem value="Low">Low</MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                            {/* <TableCell>
                          <TextField
                            name="Description"
                            value={Description}
                            onChange={(e) => onChangeInput(e, employeeId)}
                            variant="outlined"
                            size="small"
                            fullWidth
                          />
                        </TableCell> */}
                            <TableCell>
                              <TextField
                                name="CriticalAlert"
                                value={CriticalAlert}
                                onChange={(e) => onChangeInput(e, employeeId)}
                                variant="outlined"
                                size="small"
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <FormControl
                                variant="outlined"
                                size="small"
                                fullWidth
                              >
                                <Select
                                  labelId={`condition-label-${employeeId}`}
                                  name="Condition"
                                  value={Condition}
                                  onChange={(e) => onChangeInput(e, employeeId)}
                                  size="small"
                                  fullWidth
                                >
                                  <MenuItem value="High">High</MenuItem>
                                  <MenuItem value="Low">Low</MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                            {/* <TableCell>
                          <TextField
                            name="Description1"
                            value={Description1}
                            onChange={(e) => onChangeInput(e, employeeId)}
                            variant="outlined"
                            size="small"
                            fullWidth
                          />
                        </TableCell> */}
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </Grid>
              </Paper>
            </Grid>

            <Grid container mt={5}>
              <IconButton>
                <PodcastsIcon sx={{ fontSize: "40px", color: "red" }} />
              </IconButton>
              <Typography variant="h4" mt={1}>
                Communication
              </Typography>
            </Grid>

            {/* ---------communication */}
            {/* <Paper sx={{mx:"15px"}}> */}
            <Grid container component={Paper} mt={3} p={2} m={2}>
              <Grid item lg={12} md={3} sm={6} xs={12} display={"flex"} gap={3}>
                {[
                  { label: "Node ID ", value: "2" },
                  { label: "LoRa ID ", value: "2" },
                  { label: "Network ", value: "GSM" },
                  { label: "Last Update ", value: "Now" },
                ].map((item, index) => (
                  <Grid item lg={3} key={index} sx={{ mb: 2 }}>
                    <Typography variant="h4" color={"green"}>{item.label}</Typography>
                    <Typography variant="h6">{item.value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* </Paper> */}
            <Grid container gap={1} mt={3}>
              <Box display="flex">
                <IconButton>
                  <GeoIcon sx={{ fontSize: 35, color: "red" }} />
                </IconButton>
                <Typography mt={1} variant="h4">
                  Geo-Location{" "}
                </Typography>
              </Box>

              <Grid container textAlign={"center"} m={2} display={"block"}>
                <Grid item md={12} border={"1px solid black"}>
                  <MapContainer
                    center={coords}
                    zoom={12}
                    style={{ height: "500px", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={coords} />
                    <ChangeMapView coords={coords} />
                  </MapContainer>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mt={5}>
              <IconButton>
                <PendingIcon sx={{ fontSize: "40px", color: "red" }} />
              </IconButton>
              <Typography variant="h4" mt={1}>
                Pending Notification
              </Typography>
            </Grid>

            {/* ---------communication */}
            <Grid container mt={3}>
              <Box
                height={"300px"}
                width="100%"
                border="1px solid black"
                m={2}
              ></Box>
            </Grid>
            {/* Footer */}
            <Box
              mt={3}
              pr={2}
              width={"100%"}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Modal>

    </div>
  );
}

export default Monitor;
