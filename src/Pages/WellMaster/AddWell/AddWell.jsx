import {
  Autocomplete,
  Button,
  FormControl,
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
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { useSelector } from "react-redux";
import { deviceData, saveFlowingCondition, saveWellDetails } from "../../../apis/wellService";
import SearchIcon from "@mui/icons-material/Search";
import { borderRadius, Box, style } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";


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


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    const storedWellDetails = localStorage.getItem("wellDetails");
    if (storedWellDetails) {
      try {
        const parsedDetails = JSON.parse(storedWellDetails);
        setWellDetails(parsedDetails);
      } catch (error) {
        console.error("Invalid JSON in localStorage for 'wellDetails':", error);
      }
    }
  }, []);


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
  // }

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

  // const [parameterValues, setParameterValues] = useState({
  //   process: "",
  //   ports: "",
  //   name: "",
  //   description: "",
  //   unit: "",
  //   sensorOutput: "",
  //   minVal: "",
  //   maxVal: "",
  //   normAlertValue: "",
  //   normalCondition: "",
  //   normalDescription: "",
  //   normalDeadband: "",
  //   criticalAlertValue: "",
  //   criticalCondition: "",
  //   criticalDescription: "",
  //   criticalDeadband: "",
  // });

  // const handleChangeParameter = (e) => {
  //   const { name, value } = e.target;
  //   setParameterValues((prev) => {
  //     const updatedValues = {
  //       ...prev,
  //       [name]: value,
  //     };
  //     console.log("Updated Form Values:", updatedValues); // Log the updated values immediately
  //     return updatedValues;
  //   });

  // };

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

  // --------For Value Field-----------
  const sign = '>'
  const sign1 = '<'

  const [formData, setFormData] = useState({
    pressure1: '',
    pressure2: '',
    valueLessThan1: '',
    valueGreaterThan1: '',
    comparison: '',
    valueLessThan2: '',
    valueGreaterThan2: ''
  });

  const handleFlowingChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmits = async () => {
    console.log(formData); // Log the form data to see if it's correct
    const flowingCondition = {
      pressures: {
        pressure1: formData.pressure1,
        valueLessThan1: formData.valueLessThan1,
        valueGreaterThan1: formData.valueGreaterThan1,
        comparison: formData.comparison,
        pressure2: formData.pressure2,
        valueLessThan2: formData.valueLessThan2,
        valueGreaterThan2: formData.valueGreaterThan2,
      },
    };
  
    try {
      const resp = await saveFlowingCondition(flowingCondition);
      console.log(resp); // Check if the response is as expected
      if (resp) {
        console.log("data saved successfully!");
      }
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  


  return (
    <div>
      <Grid container component={Paper} p={1}>
        <Grid container>
          <Grid item sx={{ height: '100%', width: '3%' }}>
            <img src="/assets/WELL2.png" alt="well" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Typography variant="h4" mt={1}>
            Well Detail
          </Typography>
        </Grid>
        <Grid
          container
          p={1.7}
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Input Fields */}
          <Grid item sm={6} md={3} xs={12} lg={3} >
            <TextField
              size="small"
              label="Location"
              variant="outlined"
              name="location"
              value={wellDetails.location}
              fullWidth
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
            // onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Latitude"
              variant="outlined"
              name="latitude"
            // onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Longitude"
              variant="outlined"
              name="longitude"
            // onChange={(e) => handleChangeParameter(e)}
            />
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1} display="flex" gap={2}>
            <Grid item sm={6} md={3} xs={12} lg={6}>
              <TextField
                fullWidth
                size="small"
                label="Node ID"
                variant="outlined"
                name="nodeId"
              // value={formValues.nodeId || ""}
              // onChange={(e) => handleChangeParameter(e)}
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
                // value={formValues.dip || ""}
                onChange={(e) => handleChangeParameter(e)}

              />
            </Grid>
            <Grid item sm={6} md={3} xs={12} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgrey' }}>
              <Button> <SearchIcon sx={{ fontSize: '25px' }} /></Button>
            </Grid>
            {/* <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              lg={2}
            >
              {/* <CircularProgress /> */}
            {/* </Grid>  */}
          </Grid>
        </Grid>
        <Grid container display={"flex"} justifyContent={'end'} pr={1.7} mb={1.5} >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
              fontSize: "16px",
              width: "120px", // Set the desired width
            }}
            onClick={handleSubmit} // Call handleSubmit on click
          >
            Save
          </Button>
        </Grid>
      </Grid>

      <Grid container display={"flex"} gap={2.5} p={2}>
        {/* Row 1: Flowing */}
        <Grid container >
          <Grid item sx={{ display: 'flex' }} gap={2} lg={6}>
            <Grid item sx={{ height: '100%', width: '3%' }}>
              <img src="/assets/WELL2.png" alt="well" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Grid>
            <Typography variant="h4" mt={1}>
              Flowing Condition{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={12} display={"flex"} gap={3}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography>Parameter</Typography>
            <FormControl fullWidth size="small">
              <Select
                name="pressure1"
                value={formData.pressure1}
                onChange={(e) => handleFlowingChange("pressure1", e.target.value)}
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
            <Typography>Value = &lt;</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="valueLessThan1"
              fullWidth
              value={formData.valueLessThan1}
              onChange={(e) =>
                handleFlowingChange("valueLessThan1", e.target.value)
              }
            />
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography>Value = &gt;</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="valueGreaterThan1"
              fullWidth
              value={formData.valueGreaterThan1}
              onChange={(e) =>
                handleFlowingChange("valueGreaterThan1", e.target.value)
              }
            />
          </Grid>
          <Grid item lg={0.5} md={6} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "end" }}>
            <FormControl fullWidth size="small">
              <Select
                name="comparison"
                value={formData.comparison}
                onChange={(e) => handleFlowingChange("comparison", e.target.value)}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="&&">&&</MenuItem>
                <MenuItem value="OR">OR</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography>Parameter</Typography>
            <FormControl fullWidth size="small">
              <Select
                name="pressure2"
                value={formData.pressure2}
                onChange={(e) => handleFlowingChange("pressure2", e.target.value)}
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
            <Typography>Value = &lt;</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="valueLessThan2"
              fullWidth
              value={formData.valueLessThan2}
              onChange={(e) =>
                handleFlowingChange("valueLessThan2", e.target.value)
              }
            />
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography>Value = &gt;</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="valueGreaterThan2"
              fullWidth
              value={formData.valueGreaterThan2}
              onChange={(e) =>
                handleFlowingChange("valueGreaterThan2", e.target.value)
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container display={"flex"} justifyContent={"end"} pr={1.7}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
            fontSize: "16px",
            width: "120px",
          }}
          onClick={handleSubmits}
        >
          Save
        </Button>
      </Grid>

      <Grid container spacing={0.8} component={Paper} mt={2} p={1}>
        <Grid container >
          <Grid item sx={{ display: 'flex' }} gap={2} lg={6}>
            <Grid item sx={{ height: '100%', width: '3%' }}>
              <img src="/assets/WELL2.png" alt="well" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Grid>
            <Typography variant="h4" mt={1}>
              Not Flowing Condition{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid container display={"flex"} gap={2.5} p={2}>
          {/* Row 1: Flowing */}

          <Grid item lg={12} display={"flex"} gap={3}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Parameter</Typography>
              <FormControl fullWidth size="small">
                <Select
                  labelId="pressure-label"
                  name="pressure1"
                  // value={formValues.flowing.pressures[0].pressure1}
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
              <Typography>Value ={sign}</Typography>
              <TextField
                variant="outlined"
                size="small"
                // value={formValues.flowing.pressures[0].tolerance}
                // onChange={(e) =>
                //   handleFlowingChange(0, "tolerance", e.target.value)
                // }
                fullWidth
              />
              {/* <FormControl fullWidth size="small">
                <InputLabel id="comparison-label">Value ={sign}</InputLabel>
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
              </FormControl> */}
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Value ={sign1}</Typography>
              <TextField
                variant="outlined"
                size="small"
                // value={formValues.flowing.pressures[0].tolerance}
                // onChange={(e) =>
                //   handleFlowingChange(0, "tolerance", e.target.value)
                // }
                fullWidth
              />
              {/* <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Value={sign1}</InputLabel>
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
              </FormControl> */}
            </Grid>
            <Grid item lg={0.5} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
              <FormControl fullWidth size="small">
                {/* <InputLabel id="pressure-label">Logic</InputLabel> */}
                <Select
                  labelId="pressure-label"
                  name="pressure2"
                  // value={formValues.flowing.pressures[0].pressure2}
                  onChange={(e) =>
                    handleFlowingChange(0, "pressure2", e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="GIP">&&</MenuItem>
                  <MenuItem value="THP">OR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Parameter</Typography>
              <FormControl fullWidth size="small">
                <Select
                  labelId="pressure-label"
                  name="pressure1"
                  // value={formValues.flowing.pressures[0].pressure1}
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
              <Typography>Value ={sign}</Typography>
              <TextField
                variant="outlined"
                size="small"
                // value={formValues.flowing.pressures[0].tolerance}
                // onChange={(e) =>
                //   handleFlowingChange(0, "tolerance", e.target.value)
                // }
                fullWidth
              />
              {/* <FormControl fullWidth size="small">
                <InputLabel id="comparison-label">Value ={sign}</InputLabel>
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
              </FormControl> */}
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography>Value ={sign1}</Typography>
              <TextField
                variant="outlined"
                size="small"
                // value={formValues.flowing.pressures[0].tolerance}
                // onChange={(e) =>
                //   handleFlowingChange(0, "tolerance", e.target.value)
                // }
                fullWidth
              />
              {/* <FormControl fullWidth size="small">
                <InputLabel id="pressure-label">Value={sign1}</InputLabel>
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
              </FormControl> */}
            </Grid>
          </Grid>
          <Grid container display={"flex"} justifyContent={'end'}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
                fontSize: "16px",
                width: "120px",
              }}
              onClick={handleSubmit} // Call handleSubmit on click
            >
              Save
            </Button>
          </Grid>
        </Grid>

      </Grid>

      {/* Dialog (Modal) */}
      <Modal
        open={open}
      // onClose={handleClose}
      // aria-labelledby="modal-title"
      // aria-describedby="modal-description"
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
            <Typography variant="h4">Add Parameter</Typography>
            <Grid item lg={12}>
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
              {/* <Grid item lg={3} gap={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">Process</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      fullWidth
                      size="small"
                      name="process"
                      // value={parameterValues.process}
                      // onChange={handleChangeParameter}
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
              </Grid> */}
              <Grid item lg={3} gap={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">Variables</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      fullWidth
                      size="small"
                      name="ports"
                      // value={parameterValues.ports}
                      // onChange={handleChangeParameter}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210,
                            overflowY: "scroll",
                          },
                        },
                      }}
                    >
                      <MenuItem value={20}>Port 1</MenuItem>
                      <MenuItem value={20}>Port 2</MenuItem>
                      <MenuItem value={20}>Port 3</MenuItem>
                      <MenuItem value={20}>Port 4</MenuItem>
                      <MenuItem value={20}>Port 5</MenuItem>
                      <MenuItem value={20}>Solor</MenuItem>
                      <MenuItem value={20}>Battery</MenuItem>
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
                    // value={parameterValues.name}
                    // onChange={handleChangeParameter}
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
                    // value={parameterValues.description}
                    // onChange={handleChangeParameter}
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
                      // value={parameterValues.unit}
                      // onChange={handleChangeParameter}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 210, // Set max height for dropdown
                          },
                        },
                      }}
                    >
                      <MenuItem value={"°C"}>Units</MenuItem>
                      <MenuItem value={"°C"}>°C</MenuItem>
                      <MenuItem value={"Kg/cm²"}>Kg/cm²</MenuItem>
                      <MenuItem value={"meter"}>Meter</MenuItem>
                      <MenuItem value={"m³/H"}>m³/H</MenuItem>
                      <MenuItem value={"galon/H"}>Gal/H</MenuItem>
                      <MenuItem value={"rpm"}>RPM</MenuItem>
                      <MenuItem value={"Volt"}>Volt</MenuItem>
                      <MenuItem value={"ampere"}>Amp</MenuItem>
                      <MenuItem value={"hz"}>Hz</MenuItem>
                      <MenuItem value={"KWH"}>KWH </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Signal Minimum</Typography>
                  <TextField
                    variant="outlined"
                    label="Signal Minimum"
                    size="small"
                    fullWidth
                    name="minVal"
                  // value={parameterValues.minVal}
                  // onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Signal Maximum</Typography>
                  <TextField
                    variant="outlined"
                    label="Signal Maximum"
                    size="small"
                    fullWidth
                    name="minVal"
                  // value={parameterValues.minVal}
                  // onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={1}>
                  <Typography variant="h5">Display Minimum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Minimum"
                    size="small"
                    fullWidth
                    name="minVal"
                  // value={parameterValues.minVal}
                  // onChange={handleChangeParameter}
                  ></TextField>
                </Stack>
              </Grid>
              <Grid item lg={3} spacing={2} gap={1}>
                <Stack spacing={1}>
                  <Typography variant="h5">Display Maximum</Typography>
                  <TextField
                    variant="outlined"
                    label="Value Maximum"
                    size="small"
                    fullWidth
                    name="maxVal"
                  // value={parameterValues.maxVal}
                  // onChange={handleChangeParameter}
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
                  // value={parameterValues.normAlertValue}
                  // onChange={handleChangeParameter}
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
                    // value={parameterValues.normalCondition}
                    // onChange={handleChangeParameter}
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
                  // value={parameterValues.normalDescription}
                  // onChange={handleChangeParameter}
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
                  // value={parameterValues.normalDeadband}
                  // onChange={handleChangeParameter}
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
                  // value={parameterValues.criticalAlertValue}
                  // onChange={handleChangeParameter}
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
                    // value={parameterValues.criticalCondition}
                    // onChange={handleChangeParameter}
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
                  // value={parameterValues.criticalDescription}
                  // onChange={handleChangeParameter}
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
                  // value={parameterValues.criticalDeadband}
                  // onChange={handleChangeParameter}
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
            <Box display={'flex'}>
              <DeviceThermostatIcon sx={{ color: 'red', fontSize: "40px" }} />
              <Typography variant="h4" mt={1}>
                Parameters
              </Typography>
            </Box>


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
        <Paper >
          <Grid container spacing={3} p={1} mt={2}  >
            <Box width="99%" display="flex" justifyContent="space-between">
              <Typography pl={3} fontSize={"25px"}>
                ABP (After Beam Pressure)
              </Typography>
              <Box>
                <IconButton onClick={handleOpen}>
                  <EditIcon fontSize="large" />
                </IconButton>
                <IconButton>
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>

            {/* <Grid item xs={12} sm={6} md={3} lg={3}>
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
            </Grid> */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Stack spacing={1} >
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
                <Typography variant="h5">Signal Minimum</Typography>
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
                <Typography variant="h5">Signal Maximum</Typography>
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
                <Typography variant="h5">Display Minimum</Typography>
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
                <Typography variant="h5">Display Maximum</Typography>
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
                  value={"Value is high"}
                >

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

                  90 %
                </TextField>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Grid container></Grid>
      )}

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
            width: "120px",
          }}
        >
          Cancel
        </Button>
        <Link to={'/dashboard/wellmaster'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
              fontSize: "16px",
              width: "160px",
            }}
          >
            Back to Page
          </Button>
        </Link>

      </Grid>
    </div>
  );
}

export default AddWell;