import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, textAlign } from "@mui/system";
import Network from "../../../../public/assets/NetworkWire2.jpg";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import StoreIcon from "@mui/icons-material/Store";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { deviceData } from "../../../apis/wellService";
import { useSelector } from "react-redux";

// ----------------------Table for Moblie------------------------------

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
  Location: "New York",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Tata = {
  "Well No": "2",
  Location: "Delhi",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Mata = {
  "Well No": "3",
  Location: "UP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Sata = {
  "Well No": "4",
  Location: "MP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "18px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
    textAlign:"center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    textAlign:"center",
    padding: "3px"
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
  padding: "5px",
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [];

function DeviceManage() {
  const organizationName = useSelector((state) => state.auth.organization);
  const [deviceDataList, setDeviceDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const data = await deviceData(organizationName);
        if (data.success) {
          setDeviceDataList(data.data);
          localStorage.setItem("deviceDataList", JSON.stringify(data.data));
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [organizationName]);

  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={2}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} gap={1} >
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={Network} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box>
            <Typography variant="h4">Node Monitor</Typography>
          </Box>
        </Grid>
        <Grid item lg={1} display={"flex"} justifyContent={"end"} md={2} sm={2} xs={12} >
          <Link to="/dashboard/simulator">
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
            Simulator
          </Button>
          </Link>
        </Grid>
      </Grid>

      {/* ------------------Table for Desktop--------------------------------- */}
      <Paper sx={{ height: "75vh" }}>
        <Grid
          container
          mt={2}
          md={12}
          lg={12}
          sm={5}
          xs={4}
          sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
        >
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 620, overflow: "auto" }}
          >
            <Table aria-label="customized table" stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell  >
                    Client ID{" "}
                  </StyledTableCell>
                  <StyledTableCell  >
                    Node ID{" "}
                  </StyledTableCell>
                  <StyledTableCell  >
                    LoRa ID
                  </StyledTableCell>
                  <StyledTableCell  >
                    Network
                  </StyledTableCell>
                  <StyledTableCell  >
                    Time (s)
                  </StyledTableCell>
                  <StyledTableCell  >
                    Battery (%)
                  </StyledTableCell>
                  <StyledTableCell  >
                    Solar (V)
                  </StyledTableCell>
                  <StyledTableCell  >
                    P1{" "}
                  </StyledTableCell>
                  <StyledTableCell  >
                    P2
                  </StyledTableCell>
                  <StyledTableCell  >
                    P3
                  </StyledTableCell>
                  <StyledTableCell  >
                    P4
                  </StyledTableCell>
                  <StyledTableCell  >
                    P5
                  </StyledTableCell>
                  <StyledTableCell  >
                    E
                  </StyledTableCell>
                  <StyledTableCell  >
                    CRC
                  </StyledTableCell>
                  <StyledTableCell  >
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {deviceDataList?.map((device) => (
                <StyledTableRow key={device._id} sx={{height: "80px"}}>
                  <StyledTableCell component="th" scope="row">
                    1
                  </StyledTableCell>
                  <StyledTableCell align="left">{device.data.NodeAdd}</StyledTableCell>
                  <StyledTableCell align="left"> {device.data.NodeAdd}</StyledTableCell>
                  <StyledTableCell align="left"> {}</StyledTableCell>
                  <StyledTableCell align="left"> 1 min</StyledTableCell>
                  <StyledTableCell align="left"> {device.data.P1}</StyledTableCell>
                  <StyledTableCell align="left">{device.data.P2}</StyledTableCell>
                  <StyledTableCell align="left">{device.data.P3}</StyledTableCell>
                  <StyledTableCell align="left">{device.data.Bat}</StyledTableCell>
                  <StyledTableCell align="left">{device.data.Solar}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Link to="/dashboard/Lora">
                      <IconButton sx={{ color: 'grey', '&:hover': { color: 'darkred' }, marginRight: '5px' }}>
                      <SettingsIcon fontSize='large' />
                      </IconButton>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              </TableBody> */}
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={11} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  deviceDataList?.map((device) => (
                    <StyledTableRow key={device._id} >
                      <StyledTableCell component="th" scope="row">
                        1
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.NodeAdd}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.NodeAdd}
                      </StyledTableCell>
                      <StyledTableCell ></StyledTableCell>
                      <StyledTableCell >1 min</StyledTableCell>
                      <StyledTableCell >
                        {device.data.P1}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.P2}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.P3}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Bat}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Solar}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Solar}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Solar}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Solar}
                      </StyledTableCell>
                      <StyledTableCell >
                        {device.data.Solar}
                      </StyledTableCell>
                      <StyledTableCell >
                        <Link to="/dashboard/Lora">
                          <IconButton
                            sx={{
                              color: "grey",
                              "&:hover": { color: "darkred" },
                              marginRight: "5px",
                            }}
                          >
                            <SettingsIcon fontSize="large" />
                          </IconButton>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>

      {/* ---------------------------Table for Moblie------------------------------------- */}

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
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
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
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
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
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
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
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Sata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default DeviceManage;
