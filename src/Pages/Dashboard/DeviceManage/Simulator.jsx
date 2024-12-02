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
    <div>
      {/* <Grid>
      <Typography>Simulator</Typography>
     </Grid> */}
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
        <Grid
          container
          p={1.7}
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Input Fields */}
          <Grid item sm={6} md={6} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Security Code"
              variant="outlined"
              name="Security Code"
              value={""}
              disabled
              helperText="hint: Prefix"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Organization ID"
              variant="outlined"
              name="Organization ID"
              value={""}
              disabled
              helperText="hint: Prefix"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3}>
            <TextField
              fullWidth
              size="small"
              label="Device ID"
              variant="outlined"
              name="Device ID"
              value={""}
              disabled
              helperText="hint: Prefix"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Network</InputLabel>
              <Select
                labelId="demo-select-large-label"
                id="demo-select-large"
                value={selectedValue}
                label="Well Location"
                onChange={handleChange}
              >
                <MenuItem value={0}>00</MenuItem>
                <MenuItem value={2}>01</MenuItem>
                <MenuItem value={3}>10</MenuItem>
                <MenuItem value={4}>11</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "gray", fontSize: "0.875rem" }}>
                hint: 00-none, 01-lora, 10-gsm, 11-both
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Time(s)"
              variant="outlined"
              name="Time"
              helperText="hint: 00s-3600s"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Battery (%)"
              variant="outlined"
              name="Battery"
              helperText="hint: 0%-100%"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Solar(V)"
              variant="outlined"
              name="Solar"
              value={""}
              helperText="hint: 0V-15V"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Port 1"
              variant="outlined"
              name="Port 1"
              value={""}
              helperText="hint: GIP(0V-3V)"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Port 2"
              variant="outlined"
              name="Port 2"
              value={""}
              helperText="hint: CHP(0V-3V)"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Port 3"
              variant="outlined"
              name="Port 3"
              value={""}
              helperText="hint: THP(0V-3V)"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Port 4"
              variant="outlined"
              name="Port 4"
              value={""}
              helperText="hint: 0V-3V"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
          <Grid item sm={6} md={6} xs={12} lg={3} mt={1}>
            <TextField
              fullWidth
              size="small"
              label="Port 5"
              variant="outlined"
              name="Port 5"
              value={""}
              helperText="hint: 0V-3V"
              FormHelperTextProps={{
                style: {
                  fontSize: "0.875rem",
                  color: "gray", // A light gray color for the hint text
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container display={"flex"} p={1.7}>
          <Grid item lg={6} md={6} sm={6} xs={6} display={"flex"} gap={1}>
            <Box>
              <Button variant="contained">INCREMENT</Button>
            </Box>
            <Box>
              <TextField
                sx={{ width: "45px", borderRadius: "7px" }}
                size="small"
              ></TextField>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={6}
            display={"flex"}
            justifyContent={"end"}
            gap={2}
          >
            <Box width={120} >
              <Button sx={{width:"120px"}} variant="contained">START</Button>
            </Box>
            <Box width={120}>
              <Button sx={{width:"120px"}} variant="contained">STOP</Button>
            </Box>
            <Box width={120}>
              <Button sx={{width:"120px"}} variant="contained">CLEAR</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* --------------------------Table view ------------------------------- */}
      <Paper>
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
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Organization ID</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Device ID</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Network</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Time(s)</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Battery(%)</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Solar(V)</StyledTableCell>
                  {/* <StyledTableCell >Well Port</StyledTableCell> */}
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Port 1</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Port 2</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Port 3</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Port 4</StyledTableCell>
                  <StyledTableCell align="center"
                      sx={{ width: "9%" }}>Port 5</StyledTableCell>
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
                      {/* {row.name} */}
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
                    {/* <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell> */}
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
      </Paper>
    </div>
  );
}

export default Simulator;