import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
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
import { Box } from "@mui/system";
import {
  addGetLocation,
  addInstallation,
  addWellType,
} from "../../apis/wellService";
import { toast } from "react-toastify";

// -------------------Styled Components-------------------------
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// -------------------Main Component-------------------------
function OtherTable() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [add, setAdd] = useState([]);
  const [locations, setLocations] = useState([]); // State to hold the fetched locations

  // ADD LOCATION
  const [formValues, setFormValues] = useState({
    location: "", // For "Locations" dropdown
    installation: "", // For "Installation" dropdown
    wellType: "", // For "Well Type" text input
    wellNumber: "", // For "Well Number" text input
  });

  // Step 2: Handle change for dropdowns and text inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  // Add installation API
  const handleAddInstallation = async () => {
    const installationName = inputRef.current?.value;

    if (!formValues.parameter1 || !installationName) {
      toast.error("Please fill in all fields");
      return;
    }

    const formdata = {
      location: formValues.parameter1, // assuming 'parameter1' represents location
      installation: installationName,
    };

    try {
      const response = await addInstallation(formdata);
      toast.success("Installation added successfully!");
      // Handle additional logic after success (e.g., clearing fields or updating state)
    } catch (error) {
      toast.error("Failed to add installation");
    }
  };

  // Step 3: Handle form submission
  const handleSubmit = async () => {
    const formData = {
      location: formValues.location,
      installation: formValues.installation,
      wellType: formValues.wellType,
      wellNumber: formValues.wellNumber,
    };

    try {
      const response = await addWellType(formData);
      console.log("API Response:", response); // Handle success (you could use toast notifications here)
    } catch (error) {
      console.error("API Error:", error); // Handle error
    }
  };

  const [location, setLocation] = useState(""); // State to store input value
  const inputRef = useRef(null);

  const handleChangeParameter = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleADD = () => {
    const value = inputRef?.current.value;
    const value1 = inputRef1?.current.value;
    const value2 = inputRef2?.current.value;
    const value3 = inputRef3?.current.value;

    setAdd([
      ...add,
      { department: value, head: value1, email: value2, phone: value3 },
    ]);

    inputRef.current.value = null;
    inputRef1.current.value = null;
    inputRef2.current.value = null;
    inputRef3.current.value = null;
  };

  const rows = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Card sx={{ my: 1 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* ------------------------ADD DEPARTMENT------------------------------ */}
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
                  onChange={(e) => setLocation(e.target.value)} // Update state on change
                  fullWidth
                />
                <Button
                  variant="contained"
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

            {/* ------------------------ADD POSITION------------------------------ */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3.5}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">
                      Locations
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      name="parameter1"
                      value={formValues.parameter1}
                      label="Locations"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      {locations.map((location, index) => (
                        <MenuItem key={index} value={location.name}>
                          {location.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Add Installation"
                  inputRef={inputRef}
                  fullWidth
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

            {/* ------------------------APPROVAL CHAIN------------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              gap={1}
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                {/* Location Dropdown */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="location-label">Locations</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      name="location"
                      value={formValues.location}
                      label="Locations"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="ghaziabad">ghaziabad</MenuItem>
                      <MenuItem value="Karnatak">Karnatak</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Installation Dropdown */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="installation-label">
                      Installation
                    </InputLabel>
                    <Select
                      labelId="installation-label"
                      id="installation"
                      name="installation"
                      value={formValues.installation}
                      label="Installation"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="New Installation ghaziabad1">
                        New Installation ghaziabad1
                      </MenuItem>
                      <MenuItem value="New Installation Karnatak">
                        New Installation Karnatak
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Well Type Input */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="wellType-label">Well Type</InputLabel>
                    <Select
                      labelId="wellType-label"
                      id="wellType"
                      name="wellType"
                      value={formValues.wellType}
                      label="Well Type"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="Self-Flowing">Self-Flowing</MenuItem>
                      <MenuItem value="Plunger Well">Plunger Well</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Well Number Input */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Well Number"
                    size="small"
                    fullWidth
                    name="wellNumber"
                    value={formValues.wellNumber}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: "green",
                      "&:hover": { backgroundColor: "darkgreen" },
                    }}
                  >
                    ADD
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default OtherTable;
