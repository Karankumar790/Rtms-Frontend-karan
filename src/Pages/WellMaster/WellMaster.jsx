import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import master from "/assets/wellMaster.png";
import { Link, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  addInstallation,
  addLocation,
  addWellNum,
  getAllInstallation,
  getLocation,
  getLocationOfWell,
  getWellDetails,
} from "../../apis/WellService.js";
import { useDispatch, useSelector } from "react-redux";
import { setWellDetails } from "../../apis/authSlice.js";
import { toast } from "react-toastify";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Styled components for tables and layout
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px",
    height: "20px",
    fontSize: "18px",
    // textAlign: "left",
    position: "sticky",
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: "6px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const WellMaster = () => {
  const [locations, setLocations] = useState([]);
  const [installation, setInstallation] = useState([]);
  const [installations, setInstallations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [selectedInstallation, setSelectedInstallation] = useState("");
  // const [allSelectedInstallation, setAllSelectedInstallation] = useState("");
  const [locate, setLocate] = useState(""); // To track the selected location
  const [allLocForPosItion, setAllLocForPosItion] = useState("");
  const [allLocForWell, setAllLocForWell] = useState("");
  const [wellType, setWellType] = useState("");
  const [wellNumber, setWellNumber] = useState("");
  const organizationName = useSelector((state) => state.auth.organization);
  const navigate = useNavigate();
  const [locationsForTable, setLocationsForTable] = useState([]);
  const [installationsForTable, setInstallationsForTable] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [coordinates, setCoordinates] = useState(null);
  // Adding new location
  const handleAddLocation = async () => {
    if (!location) {
      toast.error("Location is required");
      return;
    }
    try {
      const formData = {
        location: location,
        organizationName,
      };
      const response = await addLocation(formData);
      if (response) {
        toast.success(response.message);
        setLocation(""); // Clear the input field

        // Update the locations state to add the new location without page refresh
        setLocations((prevLocations) => {
          const updatedLocations = [...prevLocations, formData.location];

          // Store updated locations in localStorage
          // localStorage.setItem("locations", JSON.stringify(updatedLocations));

          return updatedLocations;
        });

        setLocationsForTable((prevLocations) => {
          const updatedLocations = [...prevLocations, formData.location];

          // Store updated locations in localStorage
          // localStorage.setItem("locations", JSON.stringify(updatedLocations));

          return updatedLocations;
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocation(organizationName);
      if (data && data.message === "Well locations fetched successfully") {
        setLocations(data.data);
      }
    };

    fetchLocations();
  }, [organizationName]);
  //---------------------- ADDING INSTALLATION----------------------

  const handleAddInstallation = async () => {
    const formData = {
      location: allLocForPosItion,
      installation,
      organizationName,
    };

    if (!formData.location || !formData.installation) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await addInstallation(formData);
      if (response && response.data && response.message) {
        toast.success(response.message);

        setInstallationsForTable((prev) => ({
          ...prev,
          [formData.location]: [
            ...(prev[formData.location] || []),
            {
              name: formData.installation,
              wellTypes: [],
            },
          ],
        }));

        // Clear the input fields
        setInstallation("");
        setAllLocForPosItion("");
      } else {
        toast.error("Failed to install");
      }
    } catch (error) {
      toast.error("Failed to add installation");
    }
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

  // add well
  const handleAddWell = async () => {
    const formData = {
      location: allLocForWell,
      organizationName,
      installation: selectedInstallation,
      wellType,
      wellNumber,
    };

    if (
      !formData.location ||
      !formData.installation ||
      !formData.wellType ||
      !formData.wellNumber
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const response = await addWellNum(formData);
      if (response && response.message) {
        toast.success("Well added successfully!");
        // Reset fields if needed
        setAllLocForWell("");
        setSelectedInstallation("");
        setWellType("");
        setWellNumber("");
      } else {
        toast.error("Failed to add well."); // Replace with your preferred notification method
      }
    } catch (error) {
      console.error("Error adding well:", error);
      toast.error("Error adding well."); // Replace with your preferred notification method
    }
  };

  // show data in table
  useEffect(() => {
    const fetchLocationsAndInstallations = async () => {
      try {
        const locationData = await getLocation(organizationName);
        if (
          locationData &&
          locationData.message === "Well locations fetched successfully"
        ) {
          setLocationsForTable(locationData.data);
        }
        const installationData = {};
        for (const location of locationData.data) {
          const installationsForLocation = await getAllInstallation(
            location,
            organizationName
          );
          installationData[location] = installationsForLocation.data;
        }
        setInstallationsForTable(installationData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchLocationsAndInstallations();
  }, [organizationName]);

  const handleSettingsClick = async (
    location,
    installationName,
    wellType,
    wellNumber
  ) => {
    try {
      const wellDetails = await getWellDetails(
        location,
        installationName,
        wellType,
        wellNumber,
        organizationName
      );
      localStorage.setItem("wellDetails", JSON.stringify(wellDetails.data));
      console.log(wellDetails,"///////////")
      navigate("/dashboard/addwell");
    } catch (error) {
      console.error("Failed to fetch well details:", error);
    }
  };

  const handleLocationClick = async (wellNumber, organizationName) => {
    try {
      const data = await getLocationOfWell(wellNumber, organizationName);
      if (data?.success) {
        const { latitude, longitude } = data.data.well.coordinates;
        // Store coordinates in local storage
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
        console.log(latitude, longitude);

        navigate("/dashboard/virtual");
      }
    } catch (error) {
      console.error("Failed to fetch well location:", error);
    }
  };

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
            <Typography variant="h4">Well Manager</Typography>
          </Box>
        </Grid>
      </Grid>

      <Paper sx={{mb:"15px",p:'15px'}}>
        <Grid container>
          <Grid container spacing={2}>
            {/* ------------------------ADD LOCATION------------------------------ */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={2.5}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  label="Add Location"
                  // inputRef={inputRef}
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  fullWidth
                />
                <Button
                  variant="contained"
                  // onClick={handleAdd}
                  onClick={handleAddLocation}
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                >
                  ADD
                </Button>
              </Box>
            </Grid>

            {/* ------------------------ADD INSTALLATION------------------------------ */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3.5}
              gap={1}
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <Grid item lg={12} md={12} sm={12} xs={12}>
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

                <TextField
                  variant="outlined"
                  size="small"
                  label="Add Installation"
                  fullWidth
                  name="installation"
                  value={installation}
                  onChange={(e) => {
                    setInstallation(e.target.value);
                  }}
                />

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={handleAddInstallation}
                >
                  ADD
                </Button>
              </Box>
            </Grid>

            {/* ------------------------Add Well NUMBER ------------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <Grid item lg={3} md={6} sm={6} xs={12}>
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

                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="installation-label">
                      Installation
                    </InputLabel>
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
                        installations.map((installation, index) => (
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

                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">
                      Well Type
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      name="wellType"
                      // value={formValues.wellType}
                      // onChange={handleChangeWell}
                      value={wellType}
                      label="Well Type"
                      onChange={(e) => setWellType(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="self-flowing">self-flowing</MenuItem>
                      <MenuItem value="pugger well">pugger well</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Well Number"
                    size="small"
                    name="wellNumber"
                    // name="wellNumber"
                    value={wellNumber}
                    onChange={(e) => setWellNumber(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item lg={1} md={6} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleAddWell}
                    fullWidth
                    sx={{
                      backgroundColor: "green",
                      "&:hover": { backgroundColor: "darkgreen" }, p:"8px"
                    }}
                  >
                    ADD
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 620, overflow: "auto" }}
        >
          <Table aria-label="customized table" stickyHeader>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center"  sx={{bgcolor:'black'}}>Well Number</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Well Type</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Location</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Installation</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Landmark</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Geolocation</StyledTableCell>
                <StyledTableCell align="center" width={"14.2%"}> Action</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {locationsForTable?.map((location) => {
                const locationInstallations =
                  installationsForTable[location] || [];

                return locationInstallations.length > 0 ? (
                  locationInstallations?.map((installation) => {
                    const wellTypes = installation.wellTypes || [];

                    return wellTypes.length > 0 ? (
                      wellTypes?.map((wellType) =>
                        wellType?.wells?.map((well) => (
                          <StyledTableRow
                            key={`${location}-${installation.name}-${well.wellNumber}`}
                          >
                            <StyledTableCell align="center" width={"14.2%"}>
                              {well.wellNumber}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={"14.2%"}>
                              {wellType.wellType}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={"14.2%"}>
                              {location}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={"14.2%"}>
                              {installation.name}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={"14.2%"}>
                              {well.landmark || "N/A"}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {/* <Link to = "/dashboard/virtual"> */}
                              <IconButton
                                sx={{
                                  color: "grey",
                                  "&:hover": { color: "darkred" },
                                  marginRight: "5px",
                                }}
                                onClick={() =>
                                  handleLocationClick(
                                    well.wellNumber,
                                    organizationName
                                  )
                                }
                              >
                                <LocationOnIcon fontSize="large" />
                              </IconButton>
                              {/* </Link> */}
                            </StyledTableCell>
                            <StyledTableCell align="center" width={"14.2%"}>
                              <IconButton
                                onClick={() =>
                                  handleSettingsClick(
                                    location,
                                    installation.name,
                                    wellType.wellType,
                                    well.wellNumber
                                  )
                                }
                                sx={{
                                  color: "darkblue",
                                  "&:hover": { color: "black" },
                                }}
                              >
                                <SettingsIcon fontSize="large" />
                              </IconButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      )
                    ) : (
                      <StyledTableRow key={installation.name}>
                        <StyledTableCell style={{fontSize:"medium"}} align="center">
                          {location}
                        </StyledTableCell>
                        <StyledTableCell style={{fontSize:"medium"}} align="center">
                          {installation.name}
                        </StyledTableCell>
                        <StyledTableCell style={{fontSize:"medium"}} align="center">
                          No Well Type
                        </StyledTableCell>
                        <StyledTableCell style={{fontSize:"medium"}} align="center">
                          No Well Number
                        </StyledTableCell>
                        {/* <StyledTableCell align="center">
                          No Landmark
                        </StyledTableCell> */}
                        <StyledTableCell style={{fontSize:"medium"}} align="center">N/A</StyledTableCell>

                        <StyledTableCell align="center">
                          {/* <Link to = "/dashboard/virtual"> */}
                          <IconButton
                            sx={{
                              color: "grey",
                              "&:hover": { color: "darkred" },
                              marginRight: "5px",
                            }}
                          >
                            <LocationOnIcon fontSize="large" />
                          </IconButton>
                          {/* </Link> */}
                        </StyledTableCell>
                        <StyledTableCell  align="center">
                          <IconButton
                            onClick={() =>
                              handleSettingsClick(
                                location,
                                installation.name,
                                wellType.wellType,
                                well.wellNumber
                              )
                            }
                            sx={{
                              color: "darkblue",
                              "&:hover": { color: "black" },
                            }}
                          >
                            <SettingsIcon fontSize="large" />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                ) : (
                  <StyledTableRow key={location}>
                    <StyledTableCell style={{fontSize:"medium"}} align="center">{location}</StyledTableCell>
                    <StyledTableCell style={{fontSize:"medium"}} align="center">
                      No Installations Available
                    </StyledTableCell>
                    <StyledTableCell style={{fontSize:"medium"}} align="center">-</StyledTableCell>
                    <StyledTableCell style={{fontSize:"medium"}} align="center">-</StyledTableCell>
                    <StyledTableCell style={{fontSize:"medium"}} align="center">-</StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton
                        sx={{
                          color: "grey",
                          "&:hover": { color: "darkred" },
                          marginRight: "5px",
                        }}
                      >
                        <LocationOnIcon fontSize="large" />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton
                        onClick={() => handleSettingsClick(location)}
                        sx={{
                          color: "darkblue",
                          "&:hover": { color: "black" },
                        }}
                      >
                        <SettingsIcon fontSize="large" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default WellMaster;
