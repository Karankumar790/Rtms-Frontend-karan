import React, { useEffect, useState } from "react";
import {
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  FormControl,
  Select,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import { addLocation, getLocation } from "../../apis/wellService";

function WellDetailAdd() {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  // Styled components
  const CustomTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-head": {
      backgroundColor: "#8C000B", // Customize background color
      color: theme.palette.common.white,
      padding: "15px",
      fontSize: "16px",
    },
    "&.MuiTableCell-body": {
      fontSize: "14px",
    },
  }));

  const CustomTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  // -------Adding New Location---------

  // const [location, setLocation] = useState([]);


  // const handleAddLocation = async() => {
  //   if(!location){
  //     toast.error("Location is required");
  //     return;
  //   }
  //   try{
  //     const formData = {
  //       location: location,
  //       organizationName,
  //     };
  //     const response = await addLocation(formData);
  //     if(response){
  //       toast.success(response.message);
  //       setLocation("");

  //       setLocation((prevLocation) => {
  //         const updatedLocation = [...prevLocation, formData.location];

  //         return updatedLocation;
  //       });
  //     } else {
  //       toast.error(response.message);
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong")
  //   }
  // };

  //  fetch location

  // useEffect(()=>{
  //   const fetchLocation = async () => {

  //     const data = await getLocation();
  //     if(data && data.message === "Well location fetched successfully"){
  //       setLocation(data.data);
  //     }
  //   };
  //   fetchLocation();
  // },[organizationName]);



  return (
    <div>
      <Grid container spacing={2}>
        {/* First Section */}

        <Grid item lg={4}  >
          {/* Input and Add Button */}
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={9.5} xs={12}>
              <TextField
                label="Add Location"
                size="small"
                // value={location}
                // onChange={(e) => {
                //   setLocation(e.target.value);
                // }} 
                fullWidth />
            </Grid>
            <Grid item lg={2.5} xs={12}>
              <Button
                //  onClick={handleAddLocation}
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item mt={2}>
            <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
              <Table>
                <TableBody>
                  <CustomTableRow>
                    <CustomTableCell align="right">
                      This is the only content in the table.
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      <IconButton color="primary" onClick={handleEdit}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary" onClick={handleDelete}>
                        <DeleteIcon />
                      </IconButton>
                    </CustomTableCell>
                  </CustomTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* Second Section */}
        <Grid item lg={8} >
          <Grid container spacing={2}>
            <Grid item lg={5}>
              <FormControl fullWidth size="small">
                <InputLabel id="dropdown-label">Add Location</InputLabel>

          <Grid item lg={12} sx={{ display: 'flex' }} gap={2}> 
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Add Location</InputLabel>

              <Select labelId="location-select-label" id="location-select" label="Choose Option">
                <MenuItem value="">Add location based on other fields</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Add Installation" fullWidth size="small" />
            <Grid item lg={2.7} xs={12}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>


          {/* Table */}
          <Grid item mt={2}>
            <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
              <Table>
                <TableBody>
                  <CustomTableRow>
                    <CustomTableCell align="left">Add Location</CustomTableCell>
                    <CustomTableCell align="left">Add Installation</CustomTableCell>
                    <CustomTableCell align="right">
                      <IconButton color="primary" onClick={handleEdit}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary" onClick={handleDelete}>
                        <DeleteIcon />
                      </IconButton>
                    </CustomTableCell>
                  </CustomTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={3} mb={2} spacing={3} >
        <Grid item lg={2.8}>
          <FormControl fullWidth size="small">
            <InputLabel id="dropdown-label">Locations</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={value}
              onChange={handleChange}
              label="Ch Option"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={2.7}>
          <FormControl fullWidth size="small">
            <InputLabel id="dropdown-label">Installation</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={value2}
              onChange={handleChange2}
              label="Ch Option"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={2.7}>
          <TextField label="Well Number" fullWidth size="small" />
        </Grid>
        <Grid item lg={2.8}>
          <FormControl fullWidth size="small">
            <InputLabel id="dropdown-label">Well Type</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={value3}
              onChange={handleChange3}
              label="ch Option"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="option1">Flowing</MenuItem>
              <MenuItem value="option2">Not Flowing</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={1}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            fullWidth
          >
            Add
          </Button>
        </Grid>
        {/* <Grid container p={2} mt={2.5}>
          <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
            <Table>
              <TableBody>
                <CustomTableRow>
                  <CustomTableCell sx={{width:'20%'}} align="left">Add Location</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Add Installation</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Well Type</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Well Number</CustomTableCell>
                  <CustomTableCell sx={{width:'6%'}} align="right">
                    <IconButton color="primary" onClick={handleEdit}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  </CustomTableCell>
                </CustomTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default WellDetailAdd;
