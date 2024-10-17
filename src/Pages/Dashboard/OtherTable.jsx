// import React, { useEffect, useRef, useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import { toast } from "react-toastify";
// import {
//   addInstallation,
//   addLocation,
//   addWellNum,
//   getAllInstallation,
//   getLocation,
// } from "../../apis/wellService";
// import { useSelector } from "react-redux";

// // -------------------Main Component-------------------------
// function OtherTable() {
//   const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
//   const [location, setLocation] = useState("");
//   // State to store fetched locations
//   const [locations, setLocations] = useState([]);

//   //state for well
//   const [installations, setInstallations] = useState([]);
//   const organizationName = useSelector((state) => state.auth.organization);
//   const [selectedInstallation, setSelectedInstallation] = useState("");
//   const [allSelectedInstallation, setAllSelectedInstallation] = useState("");
//   const [locate, setLocate] = useState(""); // To track the selected location
//   const [formValues, setFormValues] = useState({
//     wellType: "",
//     wellNumber: "",
//     // selectedInstallation,
//     // locate
//   });
//   console.log(formValues, "......../////");
//   const handleChangeWell = (event) => {
//     const { name, value } = event.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   // ----------------- ADD LOCATION -------------------------------
//   // const handleAddLocation = async () => {
//   //   if (!location) {
//   //     toast.error("Location is requirred");
//   //     return;
//   //   }
//   //   try {
//   //     const formData = {
//   //       location: location,
//   //       organizationName,
//   //     };
//   //     const response = await addLocation(formData);
//   //     if (response) {
//   //       toast.success(response.message);
//   //       setLocation("");
//   //     } else {
//   //       toast.error(response.message);
//   //     }
//   //   } catch (error) {
//   //     toast.error("something went wrong");
//   //   }
//   // };
//   const handleAddLocation = async () => {
//     if (!location) {
//       toast.error("Location is required");
//       return;
//     }
//     try {
//       const formData = {
//         location: location,
//         organizationName,
//       };
//       const response = await addLocation(formData);
//       if (response) {
//         toast.success(response.message);
//         setLocation(""); // Clear the input field
        
//         // Update the locations state to add the new location without page refresh
//         setLocations((prevLocations) => [...prevLocations, formData.location]);
//       } else {
//         toast.error(response.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   const fetchLocations = async () => {
//     try {
//       const result = await getLocation(organizationName);
//       if (result && result.data) {
//         setLocations(result.data); // Assuming setLocations is used in the component to update state
//         // Store the locations in localStorage
//         localStorage.setItem("locations", JSON.stringify(result.data));
//       }
//     } catch (error) {
//       toast.error(error);
//     }
//   };
  
//   const [ins, setIns] = useState([]);

//   // Fetch installations function
//   const locatechange = (e) => {
//     setLocate(e.target.value);
//   };
//   const fetchInstallations = async () => {
//     try {
//       const response = await getAllInstallation(locate, organizationName); // Assuming locate is a valid location variable

//       // Correct the condition to properly check for installations
//       if (response && response.data) {
//         const installationNames = response.data.map(
//           (installation) => installation.name
//         );
//         setIns(installationNames); // Set the installation names in state
//         toast.success("Installations fetched successfully");
//       } else {
//         toast.error("No installations found");
//       }
//     } catch (error) {
//       toast.error(error.message || "Failed to fetch installations");
//     }
//   };
//   // --------------to add well num type
//   const addWell = async () => {
//     const formData = {
//       location: locate,
//       organizationName,
//       installation: selectedInstallation,
//       wellType: formValues.wellType,
//       wellNumber: formValues.wellNumber,
//     };
  
//     // Proper validation for each required field
//     if (!formData.location || !formData.installation || !formData.wellType || !formData.wellNumber) {
//       toast.error("All fields are required");
//       return;
//     }
  
//     try {
//       const response = await addWellNum(formData);
//       if (response) {
//         toast.success(response.message || "Well added successfully");
//         // Reset form or do any further actions here if needed
//       }
//     } catch (error) {
//       toast.error(error.message || "Failed to add well");
//     }
//   };
  

//   useEffect(() => {
//     if (locate) {
//       fetchInstallations(locate, organizationName); // Only fetch installations if a location is selected
//     }
//   }, [locate]);
//   // Fetch locations on component mount
//   useEffect(() => {
//     fetchLocations();
//     // fetchInstallations()
//   }, []);

//   // Handle location selection change
//   const handleAllLocationChange = (event) => {
//     setAllSelectedInstallation(event.target.value); // Update selected location
//   };

//   //---------------------- ADDING INSTALLATION-----------------------
//   const handleAddInstallation = async () => {
//     const formData = {
//       location: allSelectedInstallation,
//       installation: formValues.installation,
//       organizationName,
//     };
//     if (!formData.location || !formData.installation) {
//       toast.error("All fields are required");
//       return;
//     }
//     try {
//       const response = await addInstallation(formData);
//       if (response) {
//         toast.success(response.message);
//         setFormValues({
//           location: "",
//           installation: "",
//         });
//       } else {
//         toast.error("Failed to install");
//       }
//     } catch (error) {
//       toast.error("Failed to add installation");
//     }
//   };

//   // Handle selection change
//   const handleChangeIns = (event) => {
//     setSelectedInstallation(event.target.value);
//   };

//   return (
//     <div style={{ height: "100%", width: "100%" }}>
//       <Card sx={{ my: 1 }}>
//         <CardContent>
//           <Grid container spacing={2}>
//             {/* ------------------------ADD LOCATION------------------------------ */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               lg={2.5}
//               gap={1}
//               display="flex"
//               flexDirection={"column"}
//             >
//               <Box
//                 display="flex"
//                 flexDirection={{ xs: "column", sm: "row" }}
//                 gap={1}
//               >
//                 <TextField
//                   variant="outlined"
//                   size="small"
//                   label="Add Location"
//                   // inputRef={inputRef}
//                   value={location}
//                   onChange={(e) => {
//                     setLocation(e.target.value);
//                   }}
//                   fullWidth
//                 />
//                 <Button
//                   variant="contained"
//                   // onClick={handleAdd}
//                   onClick={handleAddLocation}
//                   size="small"
//                   sx={{
//                     backgroundColor: "green",
//                     "&:hover": { backgroundColor: "darkgreen" },
//                   }}
//                 >
//                   ADD
//                 </Button>
//               </Box>
//             </Grid>

//             {/* ------------------------ADD POSITION------------------------------ */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               lg={3.5}
//               gap={1}
//               display="flex"
//               flexDirection="column"
//             >
//               <Box
//                 display="flex"
//                 flexDirection={{ xs: "column", sm: "row" }}
//                 gap={1}
//               >
//                 <Grid item lg={12} md={12} sm={12} xs={12}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel id="location-label">Locations</InputLabel>
//                     <Select
//                       labelId="location-label"
//                       id="location-select"
//                       value={allSelectedInstallation}
//                       label="Location"
//                       onChange={handleAllLocationChange}
//                       MenuProps={{
//                         PaperProps: {
//                           style: {
//                             maxHeight: 300, 
//                             overflowY:'scroll'
//                           },
//                         },
//                       }}
//                     >
//                       <MenuItem value="">
//                         <em>All</em>
//                       </MenuItem>
//                       {locations.map((loc, index) => (
//                         <MenuItem key={index} value={loc}>
//                           {loc}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <TextField
//                   variant="outlined"
//                   size="small"
//                   label="Add Installation"
//                   fullWidth
//                   name="installation"
//                   value={formValues.installation}
//                   onChange={handleChange}
//                 />

//                 <Button
//                   variant="contained"
//                   size="small"
//                   sx={{
//                     backgroundColor: "green",
//                     "&:hover": { backgroundColor: "darkgreen" },
//                   }}
//                   onClick={handleAddInstallation}
//                 >
//                   ADD
//                 </Button>
//               </Box>
//             </Grid>

//             {/* ------------------------Add Well ------------------------------ */}
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               gap={1}
//               display="flex"
//               flexDirection={"column"}
//             >
//               <Box
//                 display="flex"
//                 flexDirection={{ xs: "column", sm: "row" }}
//                 gap={1}
//               >
//                 <Grid item lg={3} md={6} sm={6} xs={12}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel id="location-label">Locations</InputLabel>
//                     {/* <Select
//                       labelId="location-label"
//                       id="location-select"
//                       value={locate}
//                       label="Location"
//                       onChange={(e) => {
//                         locatechange(setLocate(e.target.value));
//                         fetchInstallations(); // Fetch installations when location changes
//                       }}
//                     >
//                       <MenuItem value="">
//                         <em>All</em>
//                       </MenuItem>
//                       {locations.map((loc, index) => (
//                         <MenuItem key={index} value={loc}>
//                           {loc}
//                         </MenuItem>
//                       ))}
//                     </Select> */}
//                     <Select
//                       labelId="location-label"
//                       id="location-select"
//                       value={locate}
//                       label="Location"
//                       onChange={locatechange}
//                       MenuProps={{
//                         PaperProps: {
//                           style: {
//                             maxHeight: 300, 
//                             overflowY:'scroll'
//                           },
//                         },
//                       }}
//                     >
//                       <MenuItem value="">
//                         <em>All</em>
//                       </MenuItem>
//                       {locations.map((loc, index) => (
//                         <MenuItem key={index} value={loc}>
//                           {loc}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item lg={3} md={6} sm={6} xs={12}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel id="installation-label">
//                       Installation
//                     </InputLabel>
//                     <Select
//                       labelId="installation-label"
//                       id="installation-select"
//                       value={selectedInstallation} 
//                       label="Installation"
//                       onChange={handleChangeIns} 
//                       MenuProps={{
//                         PaperProps: {
//                           style: {
//                             maxHeight: 300, 
//                             overflowY:'scroll'
//                           },
//                         },
//                       }}
//                     >
//                       {ins.length > 0 ? (
//                         ins.map((installation, index) => (
//                           <MenuItem key={index} value={installation}>
//                             {installation}
//                           </MenuItem>
//                         ))
//                       ) : (
//                         <MenuItem disabled>No Installations Available</MenuItem>
//                       )}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item lg={3} md={6} sm={6} xs={12}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel id="demo-select-large-label">
//                       Well Type
//                     </InputLabel>
//                     <Select
//                       labelId="demo-select-small-label"
//                       id="demo-select-large"
//                       name="wellType"
//                       value={formValues.wellType}
//                       label="Department"
//                       onChange={handleChangeWell}
//                     >
//                       <MenuItem value="">
//                         <em>All</em>
//                       </MenuItem>
//                       <MenuItem value="self-flowing">self-flowing</MenuItem>
//                       <MenuItem value="pugger well">pugger well</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item lg={3} md={6} sm={6} xs={12}>
//                   <TextField
//                     variant="outlined"
//                     label="Well Number"
//                     size="small"
//                     name="wellNumber"
//                     value={formValues.wellNumber}
//                     onChange={handleChangeWell}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item lg={3} md={6} sm={6} xs={12}>
//                   <Button
//                     variant="contained"
//                     onClick={addWell}
//                     fullWidth
//                     sx={{
//                       backgroundColor: "green",
//                       "&:hover": { backgroundColor: "darkgreen" },
//                     }}
//                   >
//                     ADD
//                   </Button>
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default OtherTable;




import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import {
  addInstallation,
  addLocation,
  addWellNum,
  getAllInstallation,
  getLocation,
} from "../../apis/wellService"; // Ensure this path is correct
import { useSelector } from "react-redux";

function OtherTable() {
  const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]); // For storing fetched locations
  const [installations, setInstallations] = useState([]);
  const organizationName = useSelector((state) => state.auth.organization);
  const [selectedInstallation, setSelectedInstallation] = useState("");
  const [allSelectedInstallation, setAllSelectedInstallation] = useState("");
  const [locate, setLocate] = useState(""); // Tracks selected location
  const [formValues, setFormValues] = useState({
    wellType: "",
    wellNumber: "",
  });
  
  const [ins, setIns] = useState([]); // For installation names

  // Handle input changes for well form
  const handleChangeWell = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle location change in dropdown
  const handleAllLocationChange = (event) => {
    setAllSelectedInstallation(event.target.value);
  };

  const fetchLocations = async () => {
    try {
      const result = await getLocation(organizationName);
      if (result && result.data) {
        setLocations(result.data);
        localStorage.setItem("locations", JSON.stringify(result.data));
      }
    } catch (error) {
      toast.error("Failed to fetch locations");
    }
  };

  const fetchInstallations = async () => {
    try {
      const response = await getAllInstallation(locate, organizationName);
      if (response && response.data) {
        const installationNames = response.data.map((installation) => installation.name);
        setIns(installationNames);
        toast.success("Installations fetched successfully");
      } else {
        toast.error("No installations found");
      }
    } catch (error) {
      toast.error("Failed to fetch installations");
    }
  };

  const handleAddLocation = async () => {
    if (!location) {
      toast.error("Location is required");
      return;
    }
    try {
      const formData = {
        location,
        organizationName,
      };
      const response = await addLocation(formData);
      if (response) {
        toast.success(response.message);
        setLocations((prev) => [...prev, formData.location]);
        setLocation(""); // Clear the input field
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const addWell = async () => {
    const formData = {
      location: locate,
      organizationName,
      installation: selectedInstallation,
      wellType: formValues.wellType,
      wellNumber: formValues.wellNumber,
    };

    if (!formData.location || !formData.installation || !formData.wellType || !formData.wellNumber) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await addWellNum(formData);
      if (response) {
        toast.success(response.message || "Well added successfully");
        setFormValues({ wellType: "", wellNumber: "" }); // Reset form values
      }
    } catch (error) {
      toast.error("Failed to add well");
    }
  };

  const handleAddInstallation = async () => {
    const formData = {
      location: allSelectedInstallation,
      installation: formValues.installation,
      organizationName,
    };
    if (!formData.location || !formData.installation) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await addInstallation(formData);
      if (response) {
        toast.success(response.message);
        setFormValues((prev) => ({ ...prev, installation: "" })); // Reset installation input
      }
    } catch (error) {
      toast.error("Failed to add installation");
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    if (locate) {
      fetchInstallations();
    }
  }, [locate]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Card sx={{ my: 1 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Add Location */}
            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box display="flex" flexDirection="row" gap={1}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Add Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={handleAddLocation}
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                >
                  ADD
                </Button>
              </Box>
            </Grid>

            {/* Add Installation */}
            <Grid item xs={12} sm={6} md={6} lg={3.5}>
              <Box display="flex" flexDirection="row" gap={1}>
                <FormControl fullWidth size="small">
                  <InputLabel id="location-label">Locations</InputLabel>
                  <Select
                    labelId="location-label"
                    id="location-select"
                    value={allSelectedInstallation}
                    onChange={handleAllLocationChange}
                    MenuProps={{
                      PaperProps: { style: { maxHeight: 300, overflowY: "scroll" } },
                    }}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    {locations.map((loc, index) => (
                      <MenuItem key={index} value={loc}>
                        {loc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  variant="outlined"
                  size="small"
                  label="Add Installation"
                  name="installation"
                  value={formValues.installation}
                  onChange={handleChangeWell}
                  fullWidth
                />

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={handleAddInstallation}
                >
                  ADD
                </Button>
              </Box>
            </Grid>

            {/* Add Well */}
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box display="flex" flexDirection="row" gap={1}>
                <FormControl fullWidth size="small">
                  <InputLabel id="location-select-label">Locations</InputLabel>
                  <Select
                    labelId="location-select-label"
                    id="location-select"
                    value={locate}
                    onChange={(e) => setLocate(e.target.value)}
                    MenuProps={{
                      PaperProps: { style: { maxHeight: 300, overflowY: "scroll" } },
                    }}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    {locations.map((loc, index) => (
                      <MenuItem key={index} value={loc}>
                        {loc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel id="installation-select-label">Installation</InputLabel>
                  <Select
                    labelId="installation-select-label"
                    id="installation-select"
                    value={selectedInstallation}
                    onChange={(e) => setSelectedInstallation(e.target.value)}
                    MenuProps={{
                      PaperProps: { style: { maxHeight: 300, overflowY: "scroll" } },
                    }}
                  >
                    {ins.length > 0 ? (
                      ins.map((installation, index) => (
                        <MenuItem key={index} value={installation}>
                          {installation}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No Installations Available</MenuItem>
                    )}
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel id="well-type-label">Well Type</InputLabel>
                  <Select
                    labelId="well-type-label"
                    id="well-type"
                    name="wellType"
                    value={formValues.wellType}
                    onChange={handleChangeWell}
                  >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="Injection">Injection</MenuItem>
                    <MenuItem value="Production">Production</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  variant="outlined"
                  size="small"
                  label="Well Number"
                  name="wellNumber"
                  value={formValues.wellNumber}
                  onChange={handleChangeWell}
                  fullWidth
                />

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={addWell}
                >
                  ADD
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default OtherTable;
