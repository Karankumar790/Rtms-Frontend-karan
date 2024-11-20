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
import { deviceData, saveWellDetails } from "../../../apis/WellService";
import { setWellDetails } from "../../../apis/authSlice";
import SearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import SearchIcon from "@mui/icons-material/Search";
import { Box, style } from "@mui/system";
import { FaPlus } from "react-icons/fa";

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
  // width: "35%",
  // bgcolor: "background.paper",
  // bgcolor={"yellow"}

  bgcolor: "white",
  // border: "2px solid black",
  // boxShadow: 24,
  // p: 2,
};

function AddWell() {
  const [employeeData, setEmployeeData] = useState(initialData);
  const organizationName = useSelector((state) => state.auth.organization);
  const [rows, setRows] = useState([]);
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
          <Grid item sm={6} md={3} xs={12} lg={1.5} mt={1}>
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
            lg={1.5}
            mt={1}
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      bgcolor="transparent"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        padding: "0.25rem",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    >
                      <SearchIcon />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Dialog (Modal) */}
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-title"
        // aria-describedby="modal-description"
      >
        <Grid container lg={8} sx={styless}>
          <Grid container  p={2} m={2} spacing={2} component={Paper}>
            <Grid item lg={12}>
              <Typography variant="h4">Add Parameter</Typography>
            </Grid>
            <Grid item lg={12} gap={2}>
              <Grid item lg={3.35}>
                <Typography variant="h5">Process:</Typography>

                <TextField
                  variant="outlined"
                  label="Process"
                  size="small"
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
            <Grid container gap={2} p={2} spacing={2}>
              <Grid item lg={3.5}>
                <Box>
                  <Typography variant="h5">Display Name</Typography>
                  <TextField
                    variant="outlined"
                    label="Display Name"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3.5}>
                <Box>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3.5}>
                <Box>
                  <Typography variant="h5">Unit</Typography>
                  <FormControl fullWidth size="small">
                    <Autocomplete
                      freeSolo // Allows users to type their own value
                      options={actions} // Provides options to select from
                      // value={approvalChains}
                      onChange={(newValue) => setApprovalChains(newValue)}
                      onInputChange={(newInputValue) =>
                        setApprovalChains(newInputValue)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Unit"
                          variant="outlined"
                          size="small"
                        />
                      )}
                    />
                  </FormControl>
                </Box>
              </Grid>

              <Grid item lg={3.5}>
                <Box>
                  <Typography variant="h5">Sensor Output</Typography>
                  <TextField
                    variant="outlined"
                    label="Sensor Output"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3.5}>
                <Box gap={2}>
                  <Typography variant="h5">Value Minimum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Minimum"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3.5}>
                <Box gap={2}>
                  <Typography variant="h5">Value Maximum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Maximum"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
            </Grid>

            <Grid container mt={3} mx={2} p={2} spacing={1}>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Normal Alert</Typography>
                  <TextField
                    variant="outlined"
                    label="Normal Alert"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Condition</Typography>
                  <TextField
                    variant="outlined"
                    label="Condition"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Alert timing Delay</Typography>
                  <TextField
                    variant="outlined"
                    label="Alert timing Delay"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>

              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Critical Alert</Typography>
                  <TextField
                    variant="outlined"
                    label="Display Name"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Condition</Typography>
                  <TextField
                    variant="outlined"
                    label="Condition"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Description</Typography>
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography variant="h5">Alert timing Delay</Typography>
                  <TextField
                    variant="outlined"
                    label="Alert timing Delay"
                    size="small"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end" spacing={2} mt={2} mx={2}>
              <Grid item>
                <Button onClick={handleClose} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleClose} variant="contained">
                  Save
                </Button>
              </Grid>
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
                Parameter
              </Typography>

              <IconButton onClick={handleOpen}>
                <FaPlus size={24} />
              </IconButton>
            </Box>
          </Grid>

          <Paper>
            <Grid
              container
              alignItems="end"
              // spacing={2}
              // p={2}
              // justifyContent={"space-between"}
            >
              {/* Dropdown field */}
              {/* <Grid item xs={12} sm={8} md={6} lg={3}>
                <FormControl fullWidth>
                  <TextField
                    select
                    label="Parameter"
                    defaultValue=""
                    size="small"
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value={1}>GIP</MenuItem>
                    <MenuItem value={2}>CHP</MenuItem>
                    <MenuItem value={3}>TPH</MenuItem>
                    <MenuItem value={4}>Solar Voltage</MenuItem>
                    <MenuItem value={5}>Battery</MenuItem>
                  </TextField>
                </FormControl>
              </Grid> */}

              {/* Plus Icon button */}
              {/* <Grid item lg={12} sx={{ textAlign: "right" }}>
                <IconButton onClick={handleOpen}>
                  <FaPlus size={24} />
                </IconButton>
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
        {/* <Paper> */}
        {/* <Grid container alignItems="center" spacing={2} p={2} justifyContent={"space-between"}> */}
        {/* Dropdown field */}
        {/* <Grid item xs={12} sm={8} md={6} lg={3}>
              <FormControl fullWidth >
                <TextField select label="Parameter" defaultValue="" size="small">
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={1}>GIP</MenuItem>
                  <MenuItem value={2}>CHP</MenuItem>
                  <MenuItem value={3}>TPH</MenuItem>
                  <MenuItem value={4}>Solar Voltage</MenuItem>
                  <MenuItem value={5}>Battery</MenuItem>
                </TextField>
              </FormControl>
            </Grid> */}

        {/* Plus Icon button */}
        {/* <Grid item xs="auto">
              <IconButton>
                <FaPlus size={24} />
              </IconButton>
            </Grid> */}
        {/* </Grid> */}
        {/* <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.5rem" }}>Parameter</TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Normal Alert
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }}>Condition</TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Description
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Critical Alert
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }}>Condition</TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Description
                  </TableCell>
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
                    Description,
                    Condition1,
                    Description1,
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
                        <FormControl variant="outlined" size="small" fullWidth>
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
                      <TableCell>
                        <TextField
                          name="Description"
                          value={Description}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
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
                        <FormControl variant="outlined" size="small" fullWidth>
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
                      <TableCell>
                        <TextField
                          name="Description1"
                          value={Description1}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table> */}
        {/* </Paper> */}
        <Paper sx={{ mt: "15px" }}>
          <Grid container spacing={0.8} p={2}>
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
        </Paper>
        <Grid
          item
          p={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
          gap={2}
        >
          <Button
            variant="contained"
            sx={{
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
      </Grid>
    </div>
  );
}

export default AddWell;
