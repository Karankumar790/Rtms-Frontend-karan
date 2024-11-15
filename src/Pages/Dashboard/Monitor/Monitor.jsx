import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
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
import { Box, height } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import {
  getAllInstallation,
  getLocation,
  wellMonitorData,
} from "../../../apis/WellService";
import { useSelector } from "react-redux";
import { state } from "@antv/g2plot/lib/adaptor/common";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // CardOverflow:'scr',
  // width: "35%",
  // bgcolor: "background.paper",
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("6"),
  createData("7"),
  createData("8"),
  createData("9"),
  createData("10"),
];

function Monitor() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [installation, setInstallation] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const organizationName = useSelector((state) => state.auth.organization);
  const [locate, setLocate] = useState(""); // To track the selected location
  const [allLocForPosItion, setAllLocForPosItion] = useState("");
  const [locations, setLocations] = useState([]);

  const [installations, setInstallations] = useState([]); // State to store fetched installations
  const [selectedLocation, setSelectedLocation] = useState(""); // Track selected location

  // const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   const monitorTable = async () => {
  //      try {
  //       const response = await wellMonitorData(organizationName);
  //       setRows(response.wellData);
  //      } catch (error) {
  //       console.error("There is an issue for fetching data",error)
  //      }
  //   };
  //   monitorTable();
  // },[]);

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

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getLocation(organizationName);
        if (
          response &&
          response.message === "Well locations fetched successfully"
        ) {
          setLocations(response.data);
        }
      } catch (error) {
        console.error("Error fetching locations", error);
      }
    };

    fetchLocations();
  }, [organizationName]);

  // Fetch installations when location changes
  useEffect(() => {
    const fetchInstallations = async () => {
      if (selectedLocation) {
        // Only fetch if a location is selected
        try {
          const response = await getAllInstallation(
            selectedLocation,
            organizationName
          );
          if (
            response &&
            response.message === "Installations fetched successfully"
          ) {
            setInstallations(response.data);
          }
        } catch (error) {
          console.error("Error fetching installations", error);
          setInstallations([]); // Clear installations on error
        }
      } else {
        setInstallations([]); // Clear installations if no location selected
      }
    };

    fetchInstallations();
  }, [selectedLocation, organizationName]);

  // Handle location change
  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
    setInstallation(""); // Reset installation when location changes
  };

  // Handle installation change
  const handleInstallationChange = (event) => {
    setInstallation(event.target.value);
  };

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
              value={allLocForPosItion}
              label="locate"
              onChange={(e) => {
                setAllLocForPosItion(e.target.value);
              }}
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
            <InputLabel id="installation-select-label">
              Well Installation
            </InputLabel>
            <Select
              labelId="installation-select-label"
              id="installation-select"
              value={installation}
              label="Well Installation"
              onChange={handleInstallationChange}
              disabled={!selectedLocation} // Disable if no location is selected
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {installations.map((inst, index) => (
                <MenuItem key={index} value={inst}>
                  {inst}
                </MenuItem>
              ))}
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
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
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
              {rows.map((row, index) => (
                <StyledTableRow key={index} style={{ height: "20px" }}>
                  <StyledTableCell component="th" scope="row">
                    {/* {row.data.OrgID} */}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {/* {row.data.NodeAdd} */}
                  </StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left">Normal</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
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
        <Grid
          container
          lg={5}
          md={8}
          sm={10}
          xs={12}
          borderRadius={3}
          overflow="auto"
          height="70vh"
          sx={{
            ...style,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
          }}
          mx={2}
        >
          {/* Header */}
          <Box
            width="100%"
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          >
            <Typography variant="h4" component="h2" sx={{ fontStyle: "oblique" }}>
              Well Details
            </Typography>
          </Box>

          {/* Well Details Section */}
          <Grid container spacing={3}>
            {/* First Column */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {[
                { label: "Well Number :", value: "1" },
                { label: "Location :", value: "" },
                { label: "Well Type :", value: "" },
                { label: "Installation :", value: "" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ width: "45%" }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body1" sx={{ width: "50%" }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* Second Column */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {[
                { label: "Landmark :", value: "" },
                { label: "Notification ID:", value: "" },
                { label: "Node ID :", value: "" },
                { label: "Status :", value: "" },
              ].map((item, index) => (
                <Box
                  key={index + 4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ width: "45%" }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body1" sx={{ width: "50%" }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>

          {/* Alarm Settings Section */}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontStyle: "oblique", textAlign: "center", mb: 3 }}
            >
              Alarm Setting
            </Typography>

            {[
              "GIP",
              "CHP",
              "THP",
              "Battery(%)",
              "Solar Voltage",
            ].map((label, index) => (
              <Box
                key={index}
                display="flex"
                mt={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" sx={{ width: "20%" }}>
                  {label}
                </Typography>
                <TextField
                  size="small"
                  variant="standard"
                  disabled
                  sx={{ width: "20%", mr: 2 }}
                />
                <Typography variant="body1" sx={{ width: "20%" }}>
                  Normal value
                </Typography>
                <TextField
                  size="small"
                  variant="standard"
                  disabled
                  sx={{ width: "20%", mr: 2 }}
                />
                <Typography variant="body1" sx={{ width: "20%" }}>
                  Critical Value
                </Typography>
                <TextField
                  size="small"
                  variant="standard"
                  disabled
                  sx={{ width: "20%" }}
                />
              </Box>
            ))}
          </Box>

          {/* Footer */}
          <Box
            mt={3}
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
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
      </Modal>

    </div>
  );
}

export default Monitor;
