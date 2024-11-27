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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { useSelector } from "react-redux";
import { addParametersForWell, deviceData, saveWellDetails } from "../../../apis/WellService";
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
  // border: "2px solid black",
  // boxShadow: 24,
  // p: 1,
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

  const handleChangeParameter = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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

  // const handleSubmit = async () => {
  //   if (!organizationName) {
  //     toast.error("Organization name is missing");
  //     return;
  //   }
  //   try {
  //     // localStorage.setItem("wellDetails", JSON.stringify(detailsToStore));

  //     // Prepare data for API call
  //     const details = {
  //       location: wellDetails.location,
  //       installation: wellDetails.installation,
  //       wellType: wellDetails.wellType,
  //       wellNumber: wellDetails.wellNumber,
  //       ...formValues,
  //       alarmSettings: employeeData, // Pass employee data directly or transform as needed
  //       flowing: {
  //         pressures: formValues.flowing.pressures,
  //       },
  //       notFlowing: {
  //         pressures: formValues.notFlowing.pressures,
  //       },
  //     };

  //     const response = await saveWellDetails(details);
  //     console.log("Well saved successfully:", response);
  //     // You may want to reset form or show a success message here
  //   } catch (error) {
  //     console.error("Error saving well:", error);
  //   }
  // };

  const handleSubmit = async () => {
    if (!organizationName) {
      toast.error("Organization name is missing");
      return;
    }
    try {
      // Prepare data for API call
      const alarmSettings = {
        gip: {
          normalAlert: {
            normalalert: formValues.gipNormalAlert || "GIP Normal Alert", // Use values from formValues
            condition: formValues.gipNormalCondition || "Low",
            description:
              formValues.gipNormalDescription || "GIP normal alert description",
          },
          criticalAlert: {
            criticalalert: formValues.gipCriticalAlert || "GIP Critical Alert",
            condition: formValues.gipCriticalCondition || "High",
            description:
              formValues.gipCriticalDescription ||
              "GIP critical alert description",
          },
        },
        // Repeat for other keys: chp, thp, lowBattery, solarVoltage
        // Example for "chp":
        chp: {
          normalAlert: {
            normalalert: formValues.chpNormalAlert || "CHP Normal Alert",
            condition: formValues.chpNormalCondition || "Low",
            description:
              formValues.chpNormalDescription || "CHP normal alert description",
          },
          criticalAlert: {
            criticalalert: formValues.chpCriticalAlert || "CHP Critical Alert",
            condition: formValues.chpCriticalCondition || "High",
            description:
              formValues.chpCriticalDescription ||
              "CHP critical alert description",
          },
        },

        thp: {
          normalAlert: {
            normalalert: formValues.thpNormalAlert || "CHP Normal Alert",
            condition: formValues.thpNormalCondition || "Low",
            description:
              formValues.thpNormalDescription || "CHP normal alert description",
          },
          criticalAlert: {
            criticalalert: formValues.thpCriticalAlert || "CHP Critical Alert",
            condition: formValues.thpCriticalCondition || "High",
            description:
              formValues.thpCriticalDescription ||
              "CHP critical alert description",
          },
        },

        lowBattery: {
          normalAlert: {
            normalalert: formValues.lowBatteryNormalAlert || "CHP Normal Alert",
            condition: formValues.lowBatteryNormalCondition || "Low",
            description:
              formValues.lowBatteryNormalDescription ||
              "CHP normal alert description",
          },
          criticalAlert: {
            criticalalert:
              formValues.lowBatteryCriticalAlert || "CHP Critical Alert",
            condition: formValues.lowBatteryCriticalCondition || "High",
            description:
              formValues.lowBatteryCriticalDescription ||
              "CHP critical alert description",
          },
        },
        solarVoltage: {
          normalAlert: {
            normalalert:
              formValues.solarVoltageNormalAlert || "CHP Normal Alert",
            condition: formValues.solarVoltageNormalCondition || "Low",
            description:
              formValues.solarVoltageNormalDescription ||
              "CHP normal alert description",
          },
          criticalAlert: {
            criticalalert:
              formValues.solarVoltageCriticalAlert || "CHP Critical Alert",
            condition: formValues.solarVoltageCriticalCondition || "High",
            description:
              formValues.solarVoltageCriticalDescription ||
              "CHP critical alert description",
          },
        },
      };

      const details = {
        location: wellDetails.location,
        installation: wellDetails.installation,
        wellType: wellDetails.wellType,
        wellNumber: wellDetails.wellNumber,
        ...formValues,
        alarmSettings, // Pass transformed alarmSettings
        flowing: {
          pressures: formValues.flowing?.pressures || [], // Ensure flowing.pressures is passed as an array
        },
        notFlowing: {
          pressures: formValues.notFlowing?.pressures || [], // Ensure notFlowing.pressures is passed as an array
        },
      };

      const response = await saveWellDetails(details);
      console.log("Well saved successfully:", response);
      toast.success("Well saved successfully!");
      // Reset form or additional logic here
    } catch (error) {
      console.error("Error saving well:", error);
      toast.error("Error saving well");
    }
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

  const [formData, setFormData] = useState({
    organizationName: "Abhi Company",
    wellNumber: "",
    parameterPORTName: "",
    alertData: {
      process: "",
      displayName: "",
      parametersDescription: "",
      units: "",
      sensorOutput: "",
      valueMinimum: "",
      valueMaximum: "",
      normalAlert: "",
      normalCondition: "",
      normalDescription: "",
      normalDeadbandPercentage: "",
      criticalAlert: "",
      criticalCondition: "",
      criticalDescription: "",
      criticalDeadbandPercentage: "",
    },
  });

  // Handle input changes
  const handleInputChange = (field, value, nested) => {
    if (nested) {
      setFormData((prev) => ({
        ...prev,
        alertData: {
          ...prev.alertData,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  // Save data
  const handleAddParameter = async () => {
    try {
      const response = await addParametersForWell(formData);
      if (response?.success) {
        toast.success("Parameters added successfully!");
        handleClose(); // Close the dialog/modal
      } else {
        toast.error(response?.message || "Failed to add parameters.");
      }
    } catch (error) {
      toast.error("An error occurred while adding parameters.");
    }
  };

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
      <Modal
        open={open}
        // onClose={handleClose}
      >
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
                      value={formData.alertData.process}
                      onChange={(e) =>
                        handleInputChange("process", e.target.value, true)
                      }
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210,
                            overflowY: "scroll",
                          },
                        },
                      }}
                    >
                      <MenuItem value={20}>Temperature</MenuItem>
                      <MenuItem value={20}>Pressure</MenuItem>
                      <MenuItem value={20}>Level</MenuItem>
                      <MenuItem value={20}>Flow Rate</MenuItem>
                      <MenuItem value={20}>Speed</MenuItem>
                      <MenuItem value={20}>Solar Power</MenuItem>
                      <MenuItem value={20}>Voltage</MenuItem>
                      <MenuItem value={20}>Current</MenuItem>
                      <MenuItem value={20}>Frequency</MenuItem>
                      <MenuItem value={20}>Power</MenuItem>
                      <MenuItem value={20}>Battery Power</MenuItem>
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
                      value={formData.parameterPORTName}
                      onChange={(e) =>
                        handleInputChange("parameterPORTName", e.target.value)
                      }
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210,
                            overflowY: "scroll",
                          },
                        },
                      }}
                    >
                      <MenuItem value={20}>GIP</MenuItem>
                      <MenuItem value={20}>CHP</MenuItem>
                      <MenuItem value={20}>THP</MenuItem>
                      <MenuItem value={20}>ABP</MenuItem>
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
                    value={formData.alertData.displayName}
                    onChange={(e) =>
                      handleInputChange("displayName", e.target.value, true)
                    }
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
                    value={formData.alertData.parametersDescription}
                    onChange={(e) =>
                      handleInputChange("parametersDescription", e.target.value, true)
                    }
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
                      value={formData.alertData.units}
                      onChange={(e) => handleInputChange(e, "units", "alertData")}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210, // Set max height for dropdown
                          },
                        },
                      }}
                    >
                      <MenuItem value={30}>
                        <Typography>°C</Typography>
                      </MenuItem>
                      <MenuItem value={30}>
                        <Typography>
                          Kg/cm<sup>2</sup>
                        </Typography>
                      </MenuItem>
                      <MenuItem value={20}>%</MenuItem>
                      <MenuItem value={20}>meter</MenuItem>
                      <MenuItem value={20}>centimeter</MenuItem>
                      <MenuItem value={20}>
                        <Typography>
                          m<sup>3</sup>/H
                        </Typography>
                      </MenuItem>
                      <MenuItem value={20}>galon/H</MenuItem>
                      <MenuItem value={20}>rpm</MenuItem>
                      <MenuItem value={20}>Volt</MenuItem>
                      <MenuItem value={20}>ampere</MenuItem>
                      <MenuItem value={20}>hz</MenuItem>
                      <MenuItem value={30}>KWH </MenuItem>
                      <MenuItem value={30}>0-3 V </MenuItem>
                      <MenuItem value={30}>0-100 mV </MenuItem>
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
                      value={formData.alertData.units}
                      onChange={(e) => handleInputChange(e, "units", "alertData")}
                    >
                      <MenuItem value={30}>all </MenuItem>
                      <MenuItem value={30}>
                        <Typography>{/* Kg/cm<sup>2</sup> */}</Typography>
                      </MenuItem>
                      <MenuItem value={20}></MenuItem>
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
                    value={formData.alertData.valueMinimum}
                    onChange={(e) => handleInputChange(e, "valueMinimum", "alertData")}
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
                    value={formData.alertData.valueMaximum}
                    onChange={(e) => handleInputChange(e, "valueMaximum", "alertData")}
                  ></TextField>
                </Stack>
              </Grid>
              {/* </Grid>

            <Grid container mt={1} p={2} spacing={2}> */}
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Normal Alert Value</Typography>
                  <TextField
                    variant="outlined"
                    label="Normal Alert Value"
                    size="small"
                    fullWidth
                    value={formData.alertData.normalAlert}
                    onChange={(e) => handleInputChange(e, "normalAlert", "alertData")}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Condition</Typography>
                  <FormControl fullWidth size="small">
                    <Select size="small"
                     value={formData.alertData.normalCondition}
                     onChange={(e) => handleInputChange(e, "normalCondition", "alertData")}>
                      <MenuItem value={30}>High</MenuItem>
                      <MenuItem value={20}>Low</MenuItem>
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
                    value={formData.alertData.normalDescription}
                    onChange={(e) => handleInputChange(e, "normalDescription", "alertData")}>
                  </TextField>
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
                    value={formData.alertData.normalDeadbandPercentage}
                    onChange={(e) => handleInputChange(e, "normalDeadbandPercentage", "alertData")}>
                  </TextField>
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
                    value={formData.alertData.criticalAlert}
                    onChange={(e) => handleInputChange(e, "criticalAlert", "alertData")}>
                  </TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Condition</Typography>
                  <FormControl fullWidth size="small">
                    <Select size="small">
                      <MenuItem value={30}>High</MenuItem>
                      <MenuItem value={20}>Low</MenuItem>
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
                  ></TextField>
                </Stack>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end"  mt={1} mx={2}>
              <Stack gap={2} display="flex" flexDirection={"row"}>
                <Button
                  onClick={handleClose}
                  sx={{ width: "120px", height: "45px", fontSize: "medium" }}
                  variant="contained"
                >
                  Cancel
                </Button>
                {/* </Stack>
              <Stack > */}
                <Button
                  sx={{ width: "120px", height: "45px", fontSize: "medium" }}
                  onClick={() => {
                    handleClose();
                    handleSave();
                    handleAddParameter();
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
          <Grid
            container
            alignItems="end"
          >
          </Grid>
        </Paper>
      </Grid>
      {addData ? (
        <Paper >
          <Grid container spacing={3}  p={2} mt={2}  >
            <Box width="99%" display="flex" justifyContent="space-between">
              <Typography pl={3} fontSize={"25px"}>
                ABP (After Beam Pressure)
              </Typography>
              <IconButton onClick={handleOpen}>
                <EditIcon fontSize="large" />
              </IconButton>
            </Box>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack  spacing={1}>
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
              <Stack  spacing={1} >
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
            width:"150px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
            fontSize: "16px",
          }}
          onClick={handleSubmit} // Call handleSubmit on click
        >
          Update Well
        </Button>
        <Button
          variant="contained"
          sx={{
            width:"150px",
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
