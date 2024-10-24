// import React, { useEffect, useState } from "react";
// import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { Box, color, padding } from "@mui/system";
// import master from "/assets/wellMaster.png";
// import { Link, useNavigate } from "react-router-dom";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Othertable from "./OtherTable.jsx";
// import {
//   getAllInstallation,
//   getLocation,
//   getWellDetails,
// } from "../../apis/wellService.js";
// import { useDispatch, useSelector } from "react-redux";
// import { setWellDetails } from "../../apis/authSlice.js";

// // -----------------------Table for  Moblie --------------------------
// const StyledGridItem = styled(Grid)(({ theme }) => ({
//   padding: theme.spacing(2),

//   borderBottom: `1px solid ${theme.palette.divider}`,

//   backgroundColor: theme.palette.grey[100],
// }));

// const StyledContent = styled(Grid)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   backgroundColor: "white",
// }));

// let data = {
//   Location: "1",
//   Installation: "New York",
//   WellType: "01/01/2021",
//   wellNumber: "40.7128 N",
//   Longitude: "74.0060 W",
//   Landmark: "Temple",
// };

// let Tata = {
//   "Well No": "2",
//   Location: "Delhi",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
//   Landmark: "Temple",
// };

// let Mata = {
//   "Well No": "3",
//   Location: "UP",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
//   Landmark: "Temple",
// };

// let Sata = {
//   "Well No": "4",
//   Location: "MP",
//   Installation: "01/01/2021",
//   Latitude: "40.7128 N",
//   Longitude: "74.0060 W",
//   Landmark: "Temple",
// };
// // ------------------------Table for Desktop-----------------------------

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// const rows = [
//   createData("1"),
//   createData("2"),
//   createData("3"),
//   createData("4"),
//   createData("5"),
//   createData("3"),
// ];

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#8C000B", // Customize background color
//     color: theme.palette.common.white, // Text color
//     padding: "10px", // Custom padding
//     height: "20px", // Specific height for the header row
//     fontSize: "16px", // Font size for the header
//     textAlign: "left", // Center-align header content (optional)
//     // lineHeight: '1.5', // Adjust line height
//     // borderBottom: `2px solid ${theme.palette.secondary.main}`, // Add border
//     position: "sticky", // Sticky positioning
//     zIndex: 1, // Ensure it stays above the rows
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     padding: "5px",
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const BodyTableCellWraper = styled(TableCell)(() => ({
//   textAlign: "center",
//   fontWeight: 500,
//   fontSize: "15.65px",
//   lineHeight: " 20px",
//   color: "#000000",
// }));

// function WellMaster() {
//   const [locations, setLocations] = useState([]);
//   const [installations, setInstallations] = useState({}); // To hold installations by location
//   const [loading, setLoading] = useState(true);
//   const organizationName = useSelector((state) => state.auth.organization);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         const locationResponse = await getLocation(organizationName);
//         setLocations(locationResponse.data);

//         // Fetch installations for each location
//         locationResponse.data.forEach(async (location) => {
//           const installationResponse = await getAllInstallation(
//             location,
//             organizationName
//           );
//           setInstallations((prev) => ({
//             ...prev,
//             [location]: installationResponse.data,
//           }));
//         });
//       } catch (error) {
//         console.error("Error fetching locations or installations", error);
//       }
//     };

//     fetchLocations();
//   }, [organizationName]);

//   console.log('Installations:', installations);
// console.log('Location:', location);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSettingsClick = async (
//     location,
//     installationName,
//     wellType,
//     wellNumber
//   ) => {
//     try {
//       // Call the API to get the well details
//       const wellDetails = await getWellDetails(
//         location,
//         installationName,
//         wellType,
//         wellNumber,
//         organizationName
//       );

//       // Store the well details in localStorage
//       localStorage.setItem("wellDetails", JSON.stringify(wellDetails.data));

//       // Navigate to the AddWell page
//       navigate("/dashboard/addwell");
//     } catch (error) {
//       console.error("Failed to fetch well details:", error);
//     }
//   };

//   return (
//     <div>
//       <Grid
//         container
//         sx={{ display: "flex", justifyContent: "space-between" }}
//         pt={1}
//         paddingBottom={2}
//       >
//         <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} gap={1}>
//           <Box sx={{ height: "50px", width: "50px" }}>
//             <img src={master} alt="img" height={"50px"} width={"50px"} />
//           </Box>
//           <Box>
//             <Typography variant="h4">Well Master</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid container>
//         <Othertable />
//       </Grid>
//       {/* ------------------Table for Desktop--------------------------------- */}
//       <Grid
//         container
//         md={12}
//         lg={12}
//         sm={5}
//         xs={4}
//         sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
//       >
//         <TableContainer
//           component={Paper}
//           sx={{ maxHeight: 620, overflow: "auto" }}
//         >
//           <Table aria-label="customized table" stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Location
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Installation
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Well Type
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Well Number
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Landmark
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ fontSize: "18px" }} align="center">
//                   Action
//                 </StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {locations.map((location) => {
//                 const locationInstallations = installations[location] || [];
//                 return locationInstallations.length > 0 ? (
//                   locationInstallations.map((installation) => {
//                     const wellTypes = installation.wellTypes || [];
//                     return wellTypes.length > 0 ? (
//                       wellTypes.map((wellType) =>
//                         wellType.wellNumbers.map((wellNumber) => (
//                           <StyledTableRow
//                             key={`${location}-${installation.name}-${wellNumber}`}
//                           >
//                             <StyledTableCell align="left">
//                               {location}
//                             </StyledTableCell>
//                             <StyledTableCell align="left">
//                               {installation.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="left">
//                               {wellType.wellType}
//                             </StyledTableCell>
//                             <StyledTableCell align="left">
//                               {wellNumber}
//                             </StyledTableCell>
//                             <StyledTableCell align="left"></StyledTableCell>
//                             <StyledTableCell align="left">
//                               <IconButton
//                                 onClick={() =>
//                                   handleSettingsClick(
//                                     location,
//                                     installation.name,
//                                     wellType.wellType,
//                                     wellNumber
//                                   )
//                                 }
//                                 sx={{
//                                   color: "darkblue",
//                                   "&:hover": { color: "black" },
//                                 }}
//                               >
//                                 <SettingsIcon fontSize="large" />
//                               </IconButton>
//                             </StyledTableCell>
//                           </StyledTableRow>
//                         ))
//                       )
//                     ) : (
//                       <StyledTableRow key={`${location}-${installation.name}`}>
//                         <StyledTableCell align="center">
//                           {location}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {installation.name}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           No Well Type
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           No Well Number
//                         </StyledTableCell>
//                         <StyledTableCell align="right"></StyledTableCell>
//                       </StyledTableRow>
//                     );
//                   })
//                 ) : (
//                   <TableRow key={location}>
//                     <TableCell align="center">{location}</TableCell>
//                     <TableCell align="center">
//                       No Installations Available
//                     </TableCell>
//                     <TableCell align="center">-</TableCell>
//                     <TableCell align="center">-</TableCell>
//                     <TableCell align="right"></TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid>
//       {/* ---------------------------Table for Moblie------------------------------------- */}

//       <Grid
//         container
//         md={12}
//         lg={12}
//         sm={12}
//         xs={12}
//         sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
//       >
//         <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
//           <Grid container mt={2} direction="column">
//             {Object.keys(data).map((header, index) => (
//               <Grid container key={index}>
//                 {/* Header Section */}
//                 <StyledGridItem item xs={6}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </StyledGridItem>
//                 {/* Content Section */}
//                 <StyledContent item xs={6}>
//                   <Typography variant="body1">{data[header]}</Typography>
//                 </StyledContent>
//               </Grid>
//             ))}
//           </Grid>
//           {/* ----------------------Dreak---------------------------------- */}
//           <Grid container mt={2} direction="column">
//             {Object.keys(Tata).map((header, index) => (
//               <Grid container key={index}>
//                 {/* Header Section */}
//                 <StyledGridItem item xs={6}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </StyledGridItem>
//                 {/* Content Section */}
//                 <StyledContent item xs={6}>
//                   <Typography variant="body1">{Tata[header]}</Typography>
//                 </StyledContent>
//               </Grid>
//             ))}
//           </Grid>
//           {/* ----------------------Dreak---------------------------------- */}
//           <Grid container mt={2} direction="column">
//             {Object.keys(Mata).map((header, index) => (
//               <Grid container key={index}>
//                 {/* Header Section */}
//                 <StyledGridItem item xs={6}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </StyledGridItem>
//                 {/* Content Section */}
//                 <StyledContent item xs={6}>
//                   <Typography variant="body1">{Mata[header]}</Typography>
//                 </StyledContent>
//               </Grid>
//             ))}
//           </Grid>
//           {/* ----------------------Dreak---------------------------------- */}
//           <Grid container mt={2} direction="column">
//             {Object.keys(Sata).map((header, index) => (
//               <Grid container key={index}>
//                 {/* Header Section */}
//                 <StyledGridItem item xs={6}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </StyledGridItem>
//                 {/* Content Section */}
//                 <StyledContent item xs={6}>
//                   <Typography variant="body1">{Sata[header]}</Typography>
//                 </StyledContent>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </Grid>
//     </div>
//   );
// }

// export default WellMaster;

import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import master from "/assets/wellMaster.png";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import Othertable from "./OtherTable.jsx";
import {
  getAllInstallation,
  getLocation,
  getWellDetails,
} from "../../apis/wellService.js";
import { useDispatch, useSelector } from "react-redux";
import { setWellDetails } from "../../apis/authSlice.js";

// Styled components for tables and layout
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px",
    height: "20px",
    fontSize: "16px",
    textAlign: "left",
    position: "sticky",
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const WellMaster = () => {
  const [locations, setLocations] = useState([]);
  const [installations, setInstallations] = useState({});
  const [loading, setLoading] = useState(true);
  const organizationName = useSelector((state) => state.auth.organization);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationResponse = await getLocation(organizationName);
        setLocations(locationResponse.data);

        // Fetch installations for each location
        const installationPromises = locationResponse.data.map(
          async (location) => {
            const installationResponse = await getAllInstallation(
              location,
              organizationName
            );
            return { location, installations: installationResponse.data };
          }
        );

        const results = await Promise.all(installationPromises);
        const installationsMap = results.reduce(
          (acc, { location, installations }) => {
            acc[location] = installations;
            return acc;
          },
          {}
        );

        setInstallations(installationsMap);
      } catch (error) {
        console.error("Error fetching locations or installations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [organizationName]);

  const handleSettingsClick = async (
    location,
    installationName,
    wellType,
    wellNumber
  ) => {
    try {
      const wellDetails = await getWellDetails(
        location,
        installationName,
        wellType,
        wellNumber,
        organizationName
      );
      localStorage.setItem("wellDetails", JSON.stringify(wellDetails.data));
      navigate("/dashboard/addwell");
    } catch (error) {
      console.error("Failed to fetch well details:", error);
    }
  };

  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={1}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} gap={1}>
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={master} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box>
            <Typography variant="h4">Well Master</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Othertable />
      </Grid>

      <Grid
        container
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
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Installation</StyledTableCell>
                <StyledTableCell align="center">Well Type</StyledTableCell>
                <StyledTableCell align="center">Well Number</StyledTableCell>
                <StyledTableCell align="center">Landmark</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations.map((location) => {
              {console.log(installations[location] ,"installaion...,,,,,,,")}
                const locationInstallations = installations[location] || []; // Adjusted to match the location key directly
                return locationInstallations.length > 0 ? (
                  locationInstallations?.map((installation) => {
                    const wellTypes = installation.wellTypes || [];
                    return wellTypes.length > 0 ? (
                      wellTypes?.map((wellType) =>
                        wellType.wellNumbers?.map((wellNumber) => (
                          <StyledTableRow
                            key={`${location}-${installation.name}-${wellNumber}`}
                          >
                            <StyledTableCell align="left">
                              {location} {/* First column: Location */}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {installation.name}{" "}
                              {/* Second column: Installation */}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {wellType.wellType}{" "}
                              {/* Third column: Well Type */}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {wellNumber} {/* Fourth column: Well Number */}
                            </StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left">
                              <IconButton
                                onClick={() =>
                                  handleSettingsClick(
                                    location,
                                    installation.name,
                                    wellType.wellType,
                                    wellNumber
                                  )
                                }
                                sx={{
                                  color: "darkblue",
                                  "&:hover": { color: "black" },
                                }}
                              >
                                <SettingsIcon fontSize="large" />
                              </IconButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      )
                    ) : (
                      <StyledTableRow key={`${location}-${installation.name}`}>
                        <StyledTableCell align="center">
                          {location}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {installation.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          No Well Type
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          No Well Number
                        </StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                ) : (
                  <TableRow key={location}>
                    <TableCell align="center">{location}</TableCell>
                    <TableCell align="center">
                      No Installations Available
                    </TableCell>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Add mobile view table here if necessary */}
    </div>
  );
};

export default WellMaster;
