import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, color } from "@mui/system";
import master from "/assets/wellMaster.png";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Othertable from "../Dashboard/OtherTable.jsx";
import { getAllInstallation, getLocation } from "../../apis/wellService.js";
import { useSelector } from "react-redux";

// -----------------------Table for  Moblie --------------------------
const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: ` 1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: ` 1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
}));

let data = {
  "Well No": "1",
  Location: "New York",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
  Landmark: "Temple",
};

let Tata = {
  "Well No": "2",
  Location: "Delhi",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
  Landmark: "Temple",
};

let Mata = {
  "Well No": "3",
  Location: "UP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
  Landmark: "Temple",
};

let Sata = {
  "Well No": "4",
  Location: "MP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
  Landmark: "Temple",
};
// ------------------------Table for Desktop-----------------------------

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

function WellMaster() {
  const [locations, setLocations] = useState([]);
  const [installations, setInstallations] = useState([]);
  const organizationName = useSelector((state) => state.auth.organization);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = await getLocation(organizationName);
      setLocations(locationData.data);
    };
    fetchLocations();
  }, [organizationName]);

  // Fetch installations for each location
  useEffect(() => {
    const fetchInstallationsForLocations = async () => {
      const newInstallations = {};
      for (const location of locations) {
        const installationData = await getAllInstallation(
          location,
          organizationName
        );
        newInstallations[location] = installationData.data;
      }
      setInstallations(newInstallations);
    };

    if (locations.length > 0) {
      fetchInstallationsForLocations();
    }
  }, [locations, organizationName]);
  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={1}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} gap={1}>
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={master} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box>
            <Typography variant="h4">Well Master</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Othertable />
      </Grid>
      {/* ------------------Table for Desktop--------------------------------- */}
      <Grid
        container
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        {/* <TableContainer
          component={Paper}
          sx={{ maxHeight: 620, overflow: "auto" }}
        >
          <Table aria-label="customized table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Location
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Installation
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Well Type
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Well Number
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Landmark
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="right">
                  Geolocation
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="center">
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  component="th"
                  scope="row"
                ></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="right">
                  <Link to="/dashboard/virtual">
                    <IconButton
                      sx={{
                        color: "grey",
                        "&:hover": { color: "darkred" },
                        marginRight: "5px",
                      }}
                    >
                      <LocationOnIcon fontSize="large" />
                    </IconButton>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Link to="/dashboard/addwell">
                    <IconButton
                      sx={{
                        color: "darkblue",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <SettingsIcon fontSize="large" />
                    </IconButton>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
         <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Installations</TableCell>
            <TableCell align="center">Well Types</TableCell>
            <TableCell align="center">Well Numbers</TableCell>
            <TableCell align="center">Landmark</TableCell>
            <TableCell align="right">Geolocation</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => {
            const locationInstallations = installations[location] || [];

            // Create installation names with line breaks and horizontal lines
            const installationDisplay = locationInstallations.map((inst, index) => (
              <div key={inst._id}>
                {inst.name}
                {index < locationInstallations.length - 1 && <hr />} {/* Add horizontal line except after the last item */}
              </div>
            ));

            const wellTypes = locationInstallations.flatMap(inst => inst.wellTypes.map(well => well.wellType)).join(', ') || "N/A";
            const wellNumbers = locationInstallations.flatMap(inst => inst.wellTypes.flatMap(well => well.wellNumbers)).join(', ') || "N/A";

            return (
              <TableRow key={location}>
                <TableCell align="center">{location}</TableCell>
                <TableCell align="center" style={{ whiteSpace: 'pre-line' }}>
                  {installationDisplay}
                </TableCell>
                <TableCell align="center">{wellTypes}</TableCell>
                <TableCell align="center">{wellNumbers}</TableCell>
                <TableCell align="center"></TableCell> {/* Landmark placeholder */}
                <TableCell align="right">
                  <Link to="/dashboard/virtual">
                    <IconButton sx={{ color: 'grey', '&:hover': { color: 'darkred' }, marginRight: '5px' }}>
                      <LocationOnIcon fontSize="large" />
                    </IconButton>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link to="/dashboard/addwell">
                    <IconButton sx={{ color: 'darkblue', '&:hover': { color: 'black' } }}>
                      <SettingsIcon fontSize="large" />
                    </IconButton>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      {/* ---------------------------Table for Moblie------------------------------------- */}

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
    </div>
  );
}

export default WellMaster;
