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
];

const BodyTableCellWraper = styled(TableCell)(() => ({
  textAlign: "center",
  fontWeight: 500,
  fontSize: "15.65px",
  lineHeight: " 20px",
  color: "#000000",
}));

function WellMaster() {
  const [locations, setLocations] = useState([]);
  const [installations, setInstallations] = useState({}); // To hold installations by location
  const [loading, setLoading] = useState(true);
  const organizationName = useSelector((state) => state.auth.organization);

  // Fetch all locations
  // const fetchLocations = async () => {
  //   try {
  //     const result = await getLocation(organizationName);
  //     if (result && result.data) {
  //       setLocations(result.data); // Assuming setLocations is used in the component to update state
  //       // Store the locations in localStorage
  //       localStorage.setItem("locations", JSON.stringify(result.data));
  //     }
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  // // Fetch installations for each location
  // const fetchInstallations = async () => {
  //   try {
  //     const response = await getAllInstallation(locate, organizationName); // Assuming locate is a valid location variable

  //     // Correct the condition to properly check for installations
  //     if (response && response.data) {
  //       const installationNames = response.data.map(
  //         (installation) => installation.name
  //       );
  //       setIns(installationNames); // Set the installation names in state
  //       toast.success("Installations fetched successfully");
  //     } else {
  //       toast.error("No installations found");
  //     }
  //   } catch (error) {
  //     toast.error(error.message || "Failed to fetch installations");
  //   }
  // };

  // // Effect to fetch data on component mount
  // useEffect(() => {
  //   const loadData = async () => {
  //     await fetchLocations();
  //     setLoading(false);
  //   };
  //   loadData();
  // }, [organizationName]);

  // // Effect to fetch installations after locations are fetched
  // useEffect(() => {
  //   if (locations.length > 0) {
  //     fetchInstallations();
  //   }
  // }, [locations]);

  // if (loading) {
  //   return <div>Loading...</div>; // Loading state
  // }

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const locationResponse = await getLocation(organizationName);
  //       setLocations(locationResponse.data);

  //       // Fetch installations for each location
  //       locationResponse.data.forEach(async (location) => {
  //         const installationResponse = await getAllInstallation(
  //           location,
  //           organizationName
  //         );
  //         setInstallations((prev) => ({
  //           ...prev,
  //           [location]: installationResponse.data,
  //         }));
  //       });
  //     } catch (error) {
  //       console.error("Error fetching locations or installations", error);
  //     }
  //   };

  //   fetchLocations();
  // }, [organizationName]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationResponse = await getLocation(organizationName);
        setLocations(locationResponse.data);

        // Fetch installations for each location
        locationResponse.data.forEach(async (location) => {
          const installationResponse = await getAllInstallation(
            location,
            organizationName
          );
          setInstallations((prev) => ({
            ...prev,
            [location]: installationResponse.data,
          }));
        });
      } catch (error) {
        console.error("Error fetching locations or installations", error);
      }
    };

    fetchLocations();
  }, [organizationName]);

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
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Location
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Installation
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Well Type
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Well Number
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Landmark
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="right">
                  Geolocation
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={location}>
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                ></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="right">
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
                </TableCell>
                <TableCell align="center">
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}

        {/* <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: "auto" }}>
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Location
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Installation
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Well Type
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Well Number
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => (
            installations[location] &&
            installations[location].map((installation, idx) => (
              <TableRow key={`${location}-${idx}`}>
     
                <TableCell align="center">{location}</TableCell>

                <TableCell align="center">{installation.name}</TableCell>

                <TableCell align="center">
                
                </TableCell>

                <TableCell align="center">
             
                </TableCell>

                <TableCell align="right">
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
                </TableCell>
              </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

<TableContainer component={Paper} sx={{ maxHeight: 620, overflow: "auto" }}>
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Location
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Installation
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Well Type
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="center">
              Well Number
            </TableCell>
            <TableCell sx={{ fontSize: "18px" }} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => {
            const locationInstallations = installations[location] || [];

            // Ensure that each installation is displayed
            return locationInstallations.length > 0 ? (
              locationInstallations.map((installation) => {
                const wellTypes = installation.wellTypes || [];

                // If there are well types, map through them
                if (wellTypes.length > 0) {
                  return wellTypes.map((wellType) =>
                    wellType.wellNumbers.map((wellNumber, numberIdx) => (
                      <TableRow key={`${location}-${installation.name}-${wellNumber}`}>
                        <TableCell align="center">{location}</TableCell>
                        <TableCell align="center">{installation.name}</TableCell>
                        <TableCell align="center">{wellType.wellType}</TableCell>
                        <TableCell align="center">{wellNumber}</TableCell>
                        <TableCell align="right">
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
                        </TableCell>
                      </TableRow>
                    ))
                  );
                } else {
                  // If no well types for the installation, show it with placeholders
                  return (
                    <TableRow key={`${location}-${installation.name}`}>
                      <TableCell align="center">{location}</TableCell>
                      <TableCell align="center">{installation.name}</TableCell>
                      <TableCell align="center">No Well Type</TableCell>
                      <TableCell align="center">No Well Number</TableCell>
                      <TableCell align="right">
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
                      </TableCell>
                    </TableRow>
                  );
                }
              })
            ) : (
              // If no installations for the location, show a row with no installations
              <TableRow key={location}>
                <TableCell align="center">{location}</TableCell>
                <TableCell align="center">No Installations Available</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="right">
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
