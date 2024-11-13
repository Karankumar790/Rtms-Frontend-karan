import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import well from "/assets/WELL.png";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import {wellMonitorData } from "../../../apis/WellService";
import { useSelector } from "react-redux";
import { state } from "@antv/g2plot/lib/adaptor/common";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // CardOverflow:'scr',
  // width: "35%",
  // bgcolor: "background.paper",
  bgcolor: "white",
  // border: "2px solid black",
  boxShadow: 24,
  p: 2,
};

// --------------------------Table for Moblie-----------------------
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
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Tata = {
  "Well No": "1",
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Mata = {
  "Well No": "1",
  "GIP (kg)": "New York",
  "CHP (kg)": "01/01/2021",
  "THP (kg)": "40.7128 N",
  "Battery %": "74.0060 W",
  "Solar power (V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

let Sata = {
  "Well No": "1",
  "GIP(kg)": "New York",
  "CHP(kg)": "01/01/2021",
  "THP(kg)": "40.7128 N",
  "Battery%": "74.0060 W",
  "Solar power(V)": "74.0060 W",
  Communication: "74.0060 W",
  "Flow Status": "74.0060 W",
  "Last Update": "74.0060 W",
  Alarm: "74.0060 W",
};

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

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("6"),
  createData("7"),
  createData("8"),
  createData("9"),
  createData("10"),
];

function Monitor() {
  const [age, setAge] = React.useState("");
  const [parameter, setParameter] = React.useState("");
  const [installation, setInstallation] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const organizationName = useSelector((state) => state.auth.organization);
  // const [rows, setRows] = useState([]);
   
  // useEffect(() => {
  //   const monitorTable = async () => {
  //      try {
  //       const response = await wellMonitorData(organizationName);
  //       setRows(response.wellData);
  //      } catch (error) {
  //       console.error("There is an issue for fetching data",error)
  //      }
  //   };
  //   monitorTable();
  // },[]);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div
      style={{
        filter: open ? "blur(8px)" : "none",
        transition: "filter 0.1s ease",
      }}
    >
      {/* ------------------------Img and Content-------------------------------------- */}
      <Grid container>
        <Grid item display={"flex"} lg={4} md={8} sm={12} xs={12}>
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={well} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box pt={1}>
            <Typography variant="h4">Well Monitor</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* ------------------------Inputs------------------------------------------------ */}
      <Grid container spacing={3} pt={3}>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Well Location</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={age}
              label="Well Location"
              onChange={handleChange}
            >
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">
              Well Installation
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={installation}
              label="Well  Installation"
              onChange={handleChangeInstallation}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Well Number</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={number}
              label="Well Number"
              onChange={handleChangeNumber}
            >
              <MenuItem value={10}>UP</MenuItem>
              <MenuItem value={20}>MP</MenuItem>
              <MenuItem value={30}>WB</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Parameter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={parameter}
              label="Well Location"
              onChange={handleChangeParameter}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={1}>Low Battery</MenuItem>
              <MenuItem value={2}>Low Solar Power</MenuItem>
              <MenuItem value={3}>Network Error</MenuItem>
              <MenuItem value={4}>Flowing Wells</MenuItem>
              <MenuItem value={5}>Non Flowing Wells</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* ------------------------Button------------------------------------------------ */}
      <Grid container display={"flex"} justifyContent={"end"}>
        <Grid
          item
          lg={1.3}
          md={4}
          sm={8}
          xs={12}
          paddingTop={3}
          paddingBottom={1.4}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
            }}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      {/* -----------------Table for Desktop----------------------------------- */}
      <Grid
        container
        mt={2}
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontSize: "18px" }}>
                  Well No.
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Node ID
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  GIP (kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  CHP (kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  THP (kg)
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Sensor Battery
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Solar Voltage
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Flow Status
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows?.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">{}</StyledTableCell>
                <StyledTableCell align="left">Normal</StyledTableCell>
                  <StyledTableCell align="left">
                    <IconButton
                      sx={{
                        color: "grey",
                        "&:hover": { color: "darkred" },
                        marginRight: "5px",
                      }}
                      onClick={handleOpen}
                    >
                      <VisibilityIcon fontSize="large" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* --------------------Table for Moblie--------------------------------- */}

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

      <Modal open={open}>
        <Grid container lg={5} md={8} sm={10} xs={12} borderRadius={3} overflow="auto" height="70vh" sx={style} mx={2}>
          <Box width={"100%"} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontStyle: "oblique" }}
            >
              Well Details
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Grid container sx={{ display: "flex", gap: 3, }}>
              {/* First Column */}
              <Grid lg={5.5} md={5.5} sm={6} xs={12} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "Well Number :", value: "1" },
                  { label: "Location :", value: "" },
                  { label: "Well Type :", value: "" },
                  { label: "Installation :", value: "" },
                ]?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Typography variant="h6" width={"250px"}>
                      {item.label}
                    </Typography>
                    {/* <TextField
                      size="small"
                      value={item.value}
                      disabled
                      fullWidth
                    /> */}
                  </Box>
                ))}
              </Grid>

              {/* Second Column */}
              <Grid lg={5.5} md={5.5} sm={6} xs={12} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "Landmark :", value: "" },
                  { label: "Notification ID:", value: "" },
                  { label: "Node ID :", value: "" },
                  { label: "Status :", value: "" },
                ]?.map((item, index) => (
                  <Box
                    key={index + 4}
                    sx={{ display: "flex", alignItems: "center", gap: 2}}
                  >
                    <Typography variant="h6" width={"250px"}>
                      {item.label}
                    </Typography>
                    {/* <TextField
                      size="small"
                      value={item.value}
                      disabled
                      fullWidth
                    /> */}
                  </Box>
                ))}
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", pt: "16px" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontStyle: "oblique" }}
              >
                Alarm Setting
              </Typography>
            </Box>

            <Box>
              <Box display="flex" mt={2} justifyContent={"space-evenly"} >
                <Typography mr={2} variant="h6" width={"100px"}>
                  GIP
                </Typography>
                <TextField size="small" variant="standard" disabled></TextField>
                <Typography width={"10%"} ml={2}>Normal value</Typography>
                <TextField size="small" disabled variant="standard"></TextField>
                <Typography width={"10%"} ml={2}>
                  Critical Value
                </Typography>
                <TextField size="small" disabled variant="standard"></TextField>
              </Box>
            </Box>
            <Box>
              <Box display="flex" mt={2} justifyContent={"space-evenly"}>
                <Typography mr={2} variant="h6" width={"100px"}>
                  CHP
                </Typography>
                <TextField size="small" variant="standard" disabled></TextField>
                <Typography width={"10%"} ml={2}>Normal value</Typography>
                <TextField size="small" disabled variant="standard"></TextField>
                <Typography width={"10%"} ml={2}>
                  Critical Value
                </Typography>
                <TextField size="small" disabled variant="standard"></TextField>
              </Box>
            </Box>
            <Box>
              <Box display="flex" mt={2} justifyContent={"space-evenly"}>
                <Typography mr={2} variant="h6" width={"100px"}>
                  THP
                </Typography>
                <TextField size="small" variant="standard" disabled></TextField>
                <Typography width={"10%"} ml={2}>Normal value</Typography>
                <TextField size="small" disabled variant="standard"></TextField>
                <Typography width={"10%"} ml={2}>
                  Critical Value
                </Typography>
                <TextField size="small" disabled variant="standard"></TextField>
              </Box>
            </Box>
            <Box>
              <Box display="flex" mt={2} justifyContent={"space-evenly"}>
                <Typography mr={2} variant="h6" width={"100px"}>
                  Battery(%)
                </Typography>
                <TextField size="small" variant="standard" disabled></TextField>
                <Typography width={"10%"} ml={2}>Normal value</Typography>
                <TextField size="small" disabled variant="standard"></TextField>
                <Typography width={"10%"} ml={2}>
                  Critical Value
                </Typography>
                <TextField size="small" disabled variant="standard"></TextField>
              </Box>
            </Box>
            <Box>
              <Box display="flex" mt={2} justifyContent={"space-evenly"}>
                <Typography mr={2} variant="h6" width={"100px"}>
                  Solar Voltage
                </Typography>
                <TextField size="small" variant="standard" disabled></TextField>
                <Typography width={"10%"} ml={2}>Normal value</Typography>
                <TextField size="small" disabled variant="standard"></TextField>
                <Typography width={"10%"} ml={2}>
                  Critical Value
                </Typography>
                <TextField size="small" disabled variant="standard"></TextField>
              </Box>
            </Box>
          </Box>
          <Box mt={2} width={"100%"} gap={2} sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Grid>
      </Modal>
    </div>
  );
}

export default Monitor;
