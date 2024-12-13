import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import { Box } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

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
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};

let Tata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};
let Mata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};

let Sata = {
  "Complain No.": "1",
  "Data/Time": "New York",
  "Notification No.": "01/01/2021",
  "Raiser Name": "40.7128 N",
  "Taker Name": "74.0060 W",
  Description: "All Good",
};
// ------------------------Table for Desktop-----------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B", // Customize background color
    color: theme.palette.common.white, // Text color
    padding: "10px", // Custom padding
    height: "20px", // Specific height for the header row
    fontSize: "16px", // Font size for the header
    textAlign: "left", // Center-align header content (optional)
    // lineHeight: '1.5', // Adjust line height
    // borderBottom: 2px solid ${theme.palette.secondary.main}, // Add border
    position: "sticky", // Sticky positioning
    zIndex: 1, // Ensure it stays above the rows
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
  // createData('2'),
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  CardOverflow: "scroll",
  overflowY: "scroll",
  height: "70vh",
  width: "55%",

  bgcolor: "white",
  borderRadius: "5px",
};

const options = {
  responsive: true, // makes the chart responsive
  maintainAspectRatio: false, // important for custom sizing
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
};

// Sample chart data for both charts
const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sample Data",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function Simulator() {
  const [selectedValue, setSelectedValue] = useState("");

  // Define data that will be shown based on the selected value
  const data = {
    0: "Data for 00",
    2: "Data for 01",
    3: "Data for 10",
    4: "Data for 11",
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Paper>
        <Grid container>
          <Box display={"flex"}>
            <IconButton>
              <DeviceHubIcon sx={{ fontSize: "50px", color: "red" }} />
            </IconButton>
            <Typography variant="h3" mt={1}>
              Simulator
            </Typography>
          </Box>
        </Grid>
        <Grid container p={1}>
          <Grid item lg={6} display={"flex"}>
            <Typography variant="h5">Security Code</Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{ width: "75%", ml: "26px" }}
            ></TextField>
          </Grid>
          <Grid item lg={6} display={"flex"}>
            <Typography variant="h5">Client ID</Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{ width: "50%", ml: "26px" }}
            ></TextField>
          </Grid>
        </Grid>
        {/* -------------------------packet=------------------ */}
        <Grid container>
          <Box width="100%" display={"flex"} p={1}>
            <Typography variant="h5" mr={12}>
              Packet{" "}
            </Typography>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue=""
                name="radio-buttons-group"
                sx={{ display: "flex" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"150%"}
                >
                  <FormControlLabel
                    value="Indivisual"
                    control={<Radio />}
                    label="Indivisual"
                  />
                  <FormControlLabel
                    value="combined"
                    control={<Radio />}
                    label="combined"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item p={1} display={"flex"}>
          <Box width="8.5%">
            <Typography variant="h5">Network </Typography>
          </Box>
          <Box width={"50%"} justifyContent={"space-evenly"}>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                // sx={{ display: "flex" }}
              >
                <Box
                  display={"flex"}
                  width={"208%"}
                  justifyContent={"space-between"}
                >
                  <FormControlLabel
                    value="LoRa"
                    control={<Radio />}
                    label="LoRa"
                  />
                  <FormControlLabel
                    value="GSM"
                    control={<Radio />}
                    label="GSM"
                  />
                  <FormControlLabel
                    value="LoRa + GSM"
                    control={<Radio />}
                    label="LoRa + GSM"
                  />
                  <FormControlLabel
                    value="Rotate"
                    control={<Radio />}
                    label="Rotate"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid container p={1}>
          <Typography variant="h5">Interval</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>
        <Grid container p={1}>
          <Typography variant="h5">Node</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "3%" }}
          ></TextField>
          <Typography variant="h5" ml={"2%"}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>
        <Grid container p={1}>
          <Typography variant="h5">Battery</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Typography variant="h5">Solar</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "3%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>
        <Grid container p={1}>
          <Typography variant="h5">Port 1</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2.5%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Typography variant="h5">Port 2</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2.5%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Typography variant="h5">Port 3</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2.5%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Typography variant="h5">Port 4</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2.5%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Typography variant="h5">Port 5</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2.5%" }}
          ></TextField>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            To
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>

          <Typography variant="h5" sx={{ ml: "2%" }}>
            Increase/Decrease
          </Typography>
          <Typography variant="h5" sx={{ ml: "2%" }}>
            Value
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: "2%" }}
          ></TextField>
        </Grid>

        <Grid container p={1}>
          <Box width="100%">
            <Typography variant="h5">Packet Send</Typography>
            <Box
              sx={{ height: "100px", width: "100%", border: "1px solid black" }}
            ></Box>
          </Box>
        </Grid>

        <Grid container p={1}>
          <Box width="100%">
            <Typography variant="h5">Packet Decoded</Typography>
            <Box
              sx={{ height: "300px", width: "100%", border: "1px solid black" }}
            ></Box>
          </Box>
        </Grid>

        <Grid container p={1}>
          <Box width="100%">
            <Typography variant="h5">Result</Typography>
            <Box
              sx={{ height: "150px", width: "100%", border: "1px solid black" }}
            ></Box>
          </Box>
        </Grid>

        <Grid container p={1} gap={2} justifyContent={"end"}>
          <Box width={120}>
            <Button sx={{ width: "120px" }} variant="contained">
              START
            </Button>
          </Box>
          <Box width={120}>
            <Button sx={{ width: "120px" }} variant="contained">
              STOP
            </Button>
          </Box>
          <Box width={120}>
            <Button sx={{ width: "120px" }} variant="contained">
              CLEAR
            </Button>
          </Box>
        </Grid>
      </Paper>
      {/* --------------------------Table view ------------------------------- */}
      {/* <Paper>
        <Grid
          container
          md={12}
          lg={12}
          sm={5}
          xs={4}
          sx={{
            display: { sm: "none", xs: "none", md: "block", lg: "block" },
            height: "100%",
          }}
          mt={1}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 620,
              height: 1000,
              overflowY: "auto",
            }}
          >
            <Table
              aria-label="customized table"
              stickyHeader
              sx={{
                minWidth: "800px", // Set minimum width for horizontal scrolling
              }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Organization ID
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Device ID
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Network
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Time(s)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Battery(%)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Solar(V)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Port 1
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Port 2
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Port 3
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Port 4
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "9%" }}>
                    Port 5
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ width: "9%" }}
                    >
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ width: "9%" }}
                    ></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper> */}
    </>
  );
}

export default Simulator;
