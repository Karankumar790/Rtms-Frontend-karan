import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { useSelector } from "react-redux";
import { deviceData, saveWellDetails } from "../../../apis/wellService.js";
import { setWellDetails } from "../../../apis/authSlice";
import SearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import SearchIcon from "@mui/icons-material/Search";
import { borderRadius, Box, style } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";

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

const styless = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  CardOverflow: "scroll",
  overflowY: "scroll",
  height: "70vh",
  borderRadius: "1%",

  bgcolor: "white",
};

function AddWell() {
  const [employeeData, setEmployeeData] = useState(initialData);
  const organizationName = useSelector((state) => state.auth.organization);
  const [rows, setRows] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [addData, setAddData] = useState(false);
  const [wellDetails, setWellDetails] = useState({
    location: "",
    installation: "",
    wellType: "",
    wellNumber: "",
    landmark: "",
  });
  const [formValues, setFormValues] = useState({
    organizationName,
    // wellDetails,
    landmark: "",
    latitude: "",
    longitude: "",
    nodeId: "",
    alarmSettings: [],
    flowing: {
      pressures: [
        { pressure1: "", comparison: "", pressure2: "", tolerance: "" },
      ],
    },
    notFlowing: {
      pressures: [
        { pressure1: "", comparison: "", pressure2: "", tolerance: "" },
      ],
    },
  });

  const actions = ["Km/cm", "V", "%"];
  const [open, setOpen] = useState(false);
  const [employeeDatas, setEmployeeDatas] = useState([
    // Sample data
    {
      employeeId: 1,
      Parameter: "GIP",
      NormalAlert: "",
      CriticalAlert: "",
      Condition: "",
      Description: "",
      Condition1: "",
      Description1: "",
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeInputt = (e, employeeId) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) =>
      prevData.map((item) =>
        item.employeeId === employeeId ? { ...item, [name]: value } : item
      )
    );
  };

  useEffect(() => {
    const storedWellDetails = localStorage.getItem("wellDetails");
    if (storedWellDetails) {
      setWellDetails(JSON.parse(storedWellDetails));
    }
    // console.log(wellDetails,"..........................")
  }, []);

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  // const handleChangeParameter = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handleChangeParameterwe = (event) => {
  //   const { name, value } = event.target;
  //   setWellDetails({
  //     ...wellDetails,
  //     [name]: value,
  //   });
  // };

  const handleFlowingChange = (index, name, value) => {
    const updatedFlowing = { ...formValues.flowing };
    const pressureData = updatedFlowing.pressures[index];

    if (name === "pressure1" || name === "pressure2") {
      pressureData[name] = value;
    } else if (name === "comparison") {
      pressureData.comparison = value;
    } else if (name === "tolerance") {
      pressureData.tolerance = value;
    }

    updatedFlowing.pressures[index] = pressureData;
    setFormValues({ ...formValues, flowing: updatedFlowing });
  };

  const handleNotFlowingChange = (index, name, value) => {
    const updatedNotFlowing = { ...formValues.notFlowing };
    const pressureData = updatedNotFlowing.pressures[index];

    if (name === "pressure1" || name === "pressure2") {
      pressureData[name] = value;
    } else if (name === "comparison") {
      pressureData.comparison = value;
    } else if (name === "tolerance") {
      pressureData.tolerance = value;
    }

    updatedNotFlowing.pressures[index] = pressureData;
    setFormValues({ ...formValues, notFlowing: updatedNotFlowing });
  };



  const handleSave = () => {
    setIsEditing(true);
    setAddData(true);
  };

  useEffect(() => {
    const Device = async () => {
      try {
        const response = await deviceData(organizationName);
        setRows(response.data);
      } catch (error) {
        console.error("There is an issue for fetching data", error);
      }
    };
    Device();
  }, []);

  const [parameterValues, setParameterValues] = useState({
    process: "",
    ports: "",
    name: "",
    description: "",
    unit: "",
    sensorOutput: "",
    minVal: "",
    maxVal: "",
    normAlertValue: "",
    normalCondition: "",
    normalDescription: "",
    normalDeadband: "",
    criticalAlertValue: "",
    criticalCondition: "",
    criticalDescription: "",
    criticalDeadband: "",
  });

  const handleChangeParameter = (e) => {
    const { name, value } = e.target;
    setParameterValues((prev) => {
      const updatedValues = {
        ...prev,
        [name]: value,
      };
      console.log("Updated Form Values:", updatedValues); // Log the updated values immediately
      return updatedValues;
    });
  
  };
  
  // const handleChangeParameter = (e) => {
  //   const { name, value } = e.target;
  //   setParameterValues((prev) => ({
  //     // const updatedValues = {
  //     ...prev,
  //     [name]: value,
  //     // };
  //     // console.log("Updated Form Values:", updatedValues);
  //     // return updatedValues;
  //   }));
  // };

  // Handle input changes
  // const handleInputChange = (field, value, nested) => {
  //   if (nested) {
  //     setparameterValues((prev) => ({
  //       ...prev,
  //       alertData: {
  //         ...prev.alertData,
  //         [field]: value,
  //       },
  //     }));
  //   } else {
  //     setparameterValues((prev) => ({
  //       ...prev,
  //       [field]: value,
  //     }));
  //   }
  // };

  // Save data
  // const handleAddParameter = async () => {
  //   try {
  //     const response = await addParametersForWell(parameterValues);
  //     if (response?.success) {
  //       toast.success("Parameters added successfully!");
  //       handleClose(); // Close the dialog/modal
  //     } else {
  //       toast.error(response?.message || "Failed to add parameters.");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred while adding parameters.");
  //   }
  // };

  return (
    <div>
      <Paper>
        <Grid container>
          <IconButton>
            <Brightness5Icon sx={{ fontSize: "40px", color: "red" }} />
          </IconButton>
          <Typography variant="h4" mt={1}>
            Add Well
          </Typography>
        </Grid>
        <Grid
          container
          p={1.7}
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Input Fields */}
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Location"
              variant="outlined"
              name="location"
              value={wellDetails.location}
              // onChange={(e) => handleChangeParameterwe(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Installation"
              variant="outlined"
              name="installation"
              value={wellDetails.installation}
              // onChange={(e) => handleChangeParameterwe(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Well Type"
              variant="outlined"
              name="wellType"
              value={wellDetails.wellType}
              // onChange={(e) => handleChangeParameterwe(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Well Number"
              variant="outlined"
              name="wellNumber"
              value={wellDetails.wellNumber}
              // onChange={(e) => handleChangeParameterwe(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Landmark"
              variant="outlined"
              name="landmark"
              value={wellDetails.landmark}
              onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Latitude"
              variant="outlined"
              name="latitude"
              onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Longitude"
              variant="outlined"
              name="longitude"
              onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1} display="flex" gap={2}>
            <Grid item sm={6} md={3} xs={12} lg={5.5}>
              <TextField
                fullWidth
                size="small"
                label="Node ID"
                variant="outlined"
                name="nodeId"
                value={formValues.nodeId || ""}
                onChange={(e) => handleChangeParameter(e)}
              />
            </Grid>
            <Grid
              item
              sm={6}
              md={3}
              xs={12}
              lg={5.5}
              display="flex"
              alignItems="center"
            >
              <TextField
                fullWidth
                size="small"
                label="DIP"
                variant="outlined"
                name="dip"
                value={formValues.dip || ""}
                onChange={(e) => handleChangeParameter(e)}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <Box
                //         bgcolor="transparent"
                //         display="flex"
                //         alignItems="center"
                //         justifyContent="center"
                //         sx={{
                //           padding: "0.25rem",
                //           borderRadius: "50%",
                //           cursor: "pointer",
                //         }}
                //       >
                //         <SearchIcon />
                //       </Box>
                //     </InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              lg={2}
            >
              {/* <CircularProgress /> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Dialog (Modal) */}
      <Modal open={open}>
        <Grid container lg={7} sx={styless}>
          <Grid
            container
            p={1}
            m={2}
            borderRadius={1}
            spacing={2}
            component={Paper}
          >
            <Grid item lg={12}>
              <Typography variant="h4">Add Parameter</Typography>
              <Box
                position="absolute"
                textAlign="end"
                sx={{
                  top: "3%",
                  right: "-2%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <IconButton onClick={handleClose} color=" solid black">
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
            </Grid>

            <Grid container p={2} spacing={2}>
              <Grid item lg={3} gap={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">Process</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      fullWidth
                      size="small"
                      name="process"
                      value={parameterValues.process}
                      onChange={handleChangeParameter}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210,
                            overflowY: "scroll",
                          },
                        },
                      }}
                    >
                      <MenuItem value={"Temperature"}>Temperature</MenuItem>
                      <MenuItem value={"Pressure"}>Pressure</MenuItem>
                      <MenuItem value={"Level"}>Level</MenuItem>
                      <MenuItem value={"Flow Rate"}>Flow Rate</MenuItem>
                      <MenuItem value={"Speed"}>Speed</MenuItem>
                      <MenuItem value={"Solar Power"}>Solar Power</MenuItem>
                      <MenuItem value={"Voltage"}>Voltage</MenuItem>
                      <MenuItem value={"Current"}>Current</MenuItem>
                      <MenuItem value={"Frequency"}>Frequency</MenuItem>
                      <MenuItem value={"Power"}>Power</MenuItem>
                      <MenuItem value={"Battery Power"}>Battery Power</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={3} gap={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">Ports</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      fullWidth
                      size="small"
                      name="ports"
                      value={parameterValues.ports}
                      onChange={handleChangeParameter}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210,
                            overflowY: "scroll",
                          },
                        },
                      }}
                    >
                      <MenuItem value={"GIP"}>GIP</MenuItem>
                      <MenuItem value={"CHP"}>CHP</MenuItem>
                      <MenuItem value={"THP"}>THP</MenuItem>
                      <MenuItem value={"ABP"}>ABP</MenuItem>
                      {/* <MenuItem value={20}>Speed</MenuItem> */}
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Display Name</Typography>
                  <TextField
                    variant="outlined"
                    label="Display Name"
                    size="small"
                    name="name"
                    value={parameterValues.name}
                    onChange={handleChangeParameter}
                    fullWidth
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    name="description"
                    value={parameterValues.description}
                    onChange={handleChangeParameter}
                    fullWidth
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Unit</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      size="small"
                      name="unit"
                      value={parameterValues.unit}
                      onChange={handleChangeParameter}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210, // Set max height for dropdown
                          },
                        },
                      }}
                    >
                      <MenuItem value={"°C"}>°C</MenuItem>
                      <MenuItem value={"Kg/cm²"}>Kg/cm²</MenuItem>
                      <MenuItem value={"%"}>%</MenuItem>
                      <MenuItem value={"meter"}>meter</MenuItem>
                      <MenuItem value={"centimeter"}>centimeter</MenuItem>
                      <MenuItem value={"m³/H"}>m³/H</MenuItem>
                      <MenuItem value={"galon/H"}>galon/H</MenuItem>
                      <MenuItem value={"rpm"}>rpm</MenuItem>
                      <MenuItem value={"Volt"}>Volt</MenuItem>
                      <MenuItem value={"ampere"}>ampere</MenuItem>
                      <MenuItem value={"hz"}>hz</MenuItem>
                      <MenuItem value={"KWH"}>KWH </MenuItem>
                      <MenuItem value={"0-3 V"}>0-3 V </MenuItem>
                      <MenuItem value={"0-100 mV"}>0-100 mV </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Sensor Output</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      // labelId="demo-select-small-label"
                      // label="Sensor Output"
                      size="small"
                      name="sensorOutput"
                      value={parameterValues.sensorOutput}
                      onChange={handleChangeParameter}
                    >
                      {/* <MenuItem value={""}>all </MenuItem> */}
                      <MenuItem value={""}>
                        <Typography>{/* Kg/cm<sup>2</sup> */}</Typography>
                      </MenuItem>
                      <MenuItem value={"ok"}>okk</MenuItem>
                      <MenuItem value={"ims"}>ims</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Value Minimum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Minimum"
                    size="small"
                    fullWidth
                    name="minVal"
                    value={parameterValues.minVal}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3} spacing={2} gap={1}>
                <Stack spacing={1}>
                  <Typography variant="h5">Value Maximum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Maximum"
                    size="small"
                    fullWidth
                    name="maxVal"
                    value={parameterValues.maxVal}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Normal Alert Value</Typography>
                  <TextField
                    variant="outlined"
                    label="Normal Alert Value"
                    size="small"
                    fullWidth
                    name="normAlertValue"
                    value={parameterValues.normAlertValue}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Condition</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      size="small"
                      name="normalCondition"
                      value={parameterValues.normalCondition}
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    fullWidth
                    name="normalDescription"
                    value={parameterValues.normalDescription}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Deadband (%)</Typography>
                  <TextField
                    variant="outlined"
                    label="Deadband (%)"
                    size="small"
                    fullWidth
                    name="normalDeadband"
                    value={parameterValues.normalDeadband}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Critical Alert Value</Typography>
                  <TextField
                    variant="outlined"
                    label="Critical Alert Value"
                    size="small"
                    fullWidth
                    name="criticalAlertValue"
                    value={parameterValues.criticalAlertValue}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Condition</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      size="small"
                      name="criticalCondition"
                      value={parameterValues.criticalCondition}
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    fullWidth
                    name="criticalDescription"
                    value={parameterValues.criticalDescription}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Deadband (%)</Typography>
                  <TextField
                    variant="outlined"
                    label="Deadband (%)"
                    size="small"
                    fullWidth
                    name="criticalDeadband"
                    value={parameterValues.criticalDeadband}
                    onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end" mt={1} mx={2}>
              <Stack gap={2} display="flex" flexDirection={"row"}>
                <Button
                  onClick={handleClose}
                  sx={{ width: "120px", height: "45px", fontSize: "medium" }}
                  variant="contained"
                >
                  Cancel
                </Button>

                <Button
                  sx={{ width: "120px", height: "45px", fontSize: "medium" }}
                  onClick={() => {
                    handleClose();
                    handleSave();
                    // handleAddParameter();
                  }}
                  variant="contained"
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Modal>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        mt={1}
        p={1}
      >
        <Grid container alignItems="center">
          <Box
            width={"100%"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" mt={1}>
              Parameters
            </Typography>

            <IconButton onClick={handleOpen}>
              <FaPlus fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

        <Paper>
          <Grid container alignItems="end"></Grid>
        </Paper>
      </Grid>
      {addData ? (
        <Paper>
          <Grid container spacing={3} p={2} mt={2}>
            <Box width="99%" display="flex" justifyContent="space-between">
              <Typography pl={3} fontSize={"25px"}>
                ABP (After Beam Pressure)
              </Typography>
              <IconButton onClick={handleOpen}>
                <EditIcon fontSize="large" />
              </IconButton>
            </Box>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Process</Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Pressure"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Ports</Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"ABP"}
                >
                  {" "}
                  ABP
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Display Name</Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"ABP"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Description</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"After Beam Pressure"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Unit</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={`Volt`}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Sensor Output</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Sensor Output"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Value Minimum</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                  value={"Value Minimum"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Value Maximum</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Value Maximum"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            {/* <Grid container spacing={3} p={3}> */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Normal Alert Value</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Normal Alert Value"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Condition:</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Condition"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                {" "}
                <Typography variant="h5">Description</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Value is high"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Deadband (%):</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"90%"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Critical Alert Value</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Critical Alert Value"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Condition</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Condition"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Description</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"Description"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Deadband (%)</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={"10 %"}
                >
                  {" "}
                  90 %
                </TextField>
              </Stack>
            </Grid>
            {/* </Grid> */}
          </Grid>
        </Paper>
      ) : (
        <Grid container></Grid>
      )}
      <Grid container spacing={0.8} component={Paper} mt={2} p={2}>
        <Grid container>
          <IconButton>
            <NotificationsIcon sx={{ fontSize: "40px", color: "red" }} />
          </IconButton>
          <Typography variant="h4" mt={1}>
            Flow Condition{" "}
          </Typography>
        </Grid>
        <Grid container display={"flex"} gap={2.5} p={2}>
          {/* Row 1: Flowing */}
          <Grid item lg={1}>
            <Typography mt={2}>Flowing</Typography>
          </Grid>
          <Grid item lg={9} display={"flex"} gap={3}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Pressure</InputLabel>
                <Select
                  labelId="pressure-label"
                  name="pressure1"
                  value={formValues.flowing.pressures[0].pressure1}
                  onChange={(e) =>
                    handleFlowingChange(0, "pressure1", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="GIP">GIP</MenuItem>
                  <MenuItem value="THP">THP</MenuItem>
                  <MenuItem value="CHP">CHP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="comparison-label">Comparison</InputLabel>
                <Select
                  labelId="comparison-label"
                  name="comparison"
                  value={formValues.flowing.pressures[0].comparison}
                  onChange={(e) =>
                    handleFlowingChange(0, "comparison", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value=">">&gt;</MenuItem>
                  <MenuItem value="<">&lt;</MenuItem>
                  <MenuItem value="=">=</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Pressure</InputLabel>
                <Select
                  labelId="pressure-label"
                  name="pressure2"
                  value={formValues.flowing.pressures[0].pressure2}
                  onChange={(e) =>
                    handleFlowingChange(0, "pressure2", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="GIP">GIP</MenuItem>
                  <MenuItem value="THP">THP</MenuItem>
                  <MenuItem value="CHP">CHP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Dead Band (%)</Typography>
              <TextField
                variant="outlined"
                size="small"
                value={formValues.flowing.pressures[0].tolerance}
                onChange={(e) =>
                  handleFlowingChange(0, "tolerance", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Row 2: Not Flowing */}
        <Grid container display={"flex"} gap={2.5} p={2}>
          <Grid item lg={1}>
            <Typography mt={2}>Not Flowing</Typography>
          </Grid>
          <Grid item lg={9} display={"flex"} gap={3}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Pressure</InputLabel>
                <Select
                  labelId="pressure-label"
                  name="pressure1"
                  value={formValues.notFlowing.pressures[0].pressure1}
                  onChange={(e) =>
                    handleNotFlowingChange(0, "pressure1", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="GIP">GIP</MenuItem>
                  <MenuItem value="THP">THP</MenuItem>
                  <MenuItem value="CHP">CHP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="comparison-label">Comparison</InputLabel>
                <Select
                  labelId="comparison-label"
                  name="comparison"
                  value={formValues.notFlowing.pressures[0].comparison}
                  onChange={(e) =>
                    handleNotFlowingChange(0, "comparison", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value=">">&gt;</MenuItem>
                  <MenuItem value="<">&lt;</MenuItem>
                  <MenuItem value="=">=</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Pressure</InputLabel>
                <Select
                  labelId="pressure-label"
                  name="pressure2"
                  value={formValues.notFlowing.pressures[0].pressure2}
                  onChange={(e) =>
                    handleNotFlowingChange(0, "pressure2", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="GIP">GIP</MenuItem>
                  <MenuItem value="THP">THP</MenuItem>
                  <MenuItem value="CHP">CHP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Dead Band (%)</Typography>
              <TextField
                variant="outlined"
                size="small"
                value={formValues.notFlowing.pressures[0].tolerance}
                onChange={(e) =>
                  handleNotFlowingChange(0, "tolerance", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        p={2}
        sx={{ display: "flex", justifyContent: "flex-end" }}
        gap={2}
      >
        <Button
          variant="contained"
          sx={{
            width: "150px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
            fontSize: "16px",
          }}
        >
          Update Well
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "150px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
            fontSize: "16px",
          }}
        >
          Cancel
        </Button>
      </Grid>
    </div>
  );
}

export default AddWell;
