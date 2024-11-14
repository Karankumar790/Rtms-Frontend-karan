import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
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

function AddWell() {
  const [employeeData, setEmployeeData] = useState(initialData);
  const organizationName = useSelector((state) => state.auth.organization);
  const [rows, setRows] = useState([]);
  const [wellDetails, setWellDetails] = useState({
    location: "",
    installation: "",
    wellType: "",
    wellNumber: "",
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

  useEffect(() => {
    const storedWellDetails = localStorage.getItem("wellDetails");
    if (storedWellDetails) {
      setWellDetails(JSON.parse(storedWellDetails));
    }
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

  const handleSubmit = async () => {
    if (!organizationName) {
      toast.error("Organization name is missing");
      return;
    }
    try {
      // // const detailsToStore = {
      // //   location: wellDetails.location,
      // //   installation: wellDetails.installation,
      // //   wellType: wellDetails.wellType,
      // //   wellNumber:wellDetails.wellNumber
      // };
      // localStorage.setItem("wellDetails", JSON.stringify(detailsToStore));

      // Prepare data for API call
      const details = {
        location: wellDetails.location,
        installation: wellDetails.installation,
        wellType: wellDetails.wellType,
        wellNumber: wellDetails.wellNumber,
        ...formValues,
        alarmSettings: employeeData, // Pass employee data directly or transform as needed
        flowing: {
          pressures: formValues.flowing.pressures,
        },
        notFlowing: {
          pressures: formValues.notFlowing.pressures,
        },
      };

      const response = await saveWellDetails(details);
      console.log("Well saved successfully:", response);
      // You may want to reset form or show a success message here
    } catch (error) {
      console.error("Error saving well:", error);
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
            Add New Well
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
          <Grid item sm={6} md={3} xs={12} lg={3} mt={1}>
            {/* <TextField
              fullWidth
              size="small"
              label="nodeId"
              variant="outlined"
              name="nodeId"
              onChange={(e) => handleChangeParameter(e)}
            /> */}
            <TextField
              fullWidth
              size="small"
              label="Node ID"
              variant="outlined"
              select
            >
              {rows?.length > 0 ? (
                rows?.map((nodeId, index) => (
                  <MenuItem key={index}>{nodeId.data.NodeAdd}</MenuItem>
                ))
              ) : (
                <MenuItem value="" disabled>
                  No NodeId available
                </MenuItem>
              )}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

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
        <Grid container>
          <IconButton>
            <NotificationsIcon sx={{ fontSize: "40px", color: "red" }} />
          </IconButton>
          <Typography variant="h4" mt={1}>
            Notification Setting
          </Typography>
        </Grid>
        <Paper>
          <Grid item>
            <Table>
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
            </Table>
          </Grid>
        </Paper>
        <Paper sx={{ mt: "15px" }}>
          <Grid container spacing={0.8} p={2}>
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
