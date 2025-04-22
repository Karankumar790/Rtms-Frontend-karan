import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PageContainer from "../../components/HOC/PageContainer";
import CallIcon from "@mui/icons-material/Call";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate, Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { setRegisterDetails } from "../../apis/authSlice";
import { toast } from "react-toastify";
import {
  departmentDropdown,
  getPosition,
  organizationDropDown,
  sendOtpRegister,
} from "../../apis/Service";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPhotoName, setSelectedPhotoName] = useState(null);
  const [idCardName, setIdCardName] = useState(null); // To store the ID card photo name
  const [organizations, setOrganizations] = useState([]);
  const [departments, setDepartments] = useState("");
  const organizationName = useSelector((state) => state.auth.organization);
  const authToken = useSelector((state) => state.auth.authToken);
  const [DepartmentLoading, setDepartmentLoading] = useState(true);
  const [positionsForApp, setPositionsForApp] = useState([]);
  const [position, setPosition] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    contactNumber: "",
    employeeID: "",
    organizationName: "",
    department: "",
    position: "",
    roleInRTMS: "",
    idCardPhoto: "", //this is Image Uploaded by User
    passportPhoto: "", //this is Image Uploaded by User
  });

  const handleUsernameChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setFormValues((prev) => ({
        ...prev,
        [name]: files[0], // Store the actual file object
      }));

      // Update file name for preview
      if (name === "passportPhoto") {
        setSelectedPhotoName(files[0].name);
      } else if (name === "idCardPhoto") {
        setIdCardName(files[0].name);
      }
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDepartmentChange = async (departmentName) => {
    // setDepartmentLoading(true);
    setDepartmentLoading(true);

    if (!authToken) {
      toast.error("Authorization token is missing");
      setDepartmentLoading(false);
      return;
    }
    try {
      const response = await getPosition(
        organizationName,
        departmentName,
        authToken
      );
      if (response.success) {
        setPositionsForApp(response.data);
      } else {
        setPositionsForApp([]);
      }
    } catch (error) {
      console.error("Error fetching positions:", error);
    }
    setDepartmentLoading(false);
  };
  // Integration for registration page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await sendOtpRegister(formData);
      if (response?.success) {
        // Store data in Redux Store
        const passportPhotoURL = response?.passportPhoto;
        const idCardPhotoURL = response?.idCardPhoto;
        dispatch(
          setRegisterDetails({
            username: formValues.username,
            email: formValues.email,
            contactNumber: formValues.contactNumber,
            employeeID: formValues.employeeID,
            organizationName: formValues.organizationName,
            department: formValues.department,
            position: formValues.position,
            roleInRTMS: formValues.roleInRTMS,
            passportPhoto: passportPhotoURL || formValues.passportPhoto,
            idCardPhoto: idCardPhotoURL || formValues.idCardPhoto, // Store the image URL
          })
        );
        toast.success(response.message);
        // console.log("OTP sent, about to navigate...",response?.message);
        navigate("/otpsignup");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup Failed");
    }
  };

  //
  // Fetch organizations only
  const fetchData = async () => {
    try {
      const orgResponse = await organizationDropDown();
      if (orgResponse.success && Array.isArray(orgResponse.data)) {
        setOrganizations(orgResponse.data);
        const selectedOrgId = formValues.organizationName;
        if (selectedOrgId) {
          fetchDepartmentsForOrg(selectedOrgId);
        }
      } else {
        toast.error("Invalid organization data format");
      }
    } catch (error) {
      toast.error("Failed to load organizations");
    }
  };

  //show department dropdown on the organization select
  const fetchDepartmentsForOrg = async (orgId) => {
    try {
      const formData = { organizationName: orgId };
      const depResponse = await departmentDropdown(formData);
      if (depResponse.success && Array.isArray(depResponse.data)) {
        if (depResponse.data.length === 0) {
          toast.info("No departments found for the selected organization");
        } else {
          // console.log("Departments data:", depResponse.data[0].departments);
          setDepartments(depResponse.data[0].departments);
        }
      } else {
        console.error("Expected array but got:", depResponse);
        toast.error("Invalid department data format");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      toast.error("Failed to load departments");
    }
  };

  const handleOrganizationChange = (event) => {
    const orgId = event.target.value;
    setFormValues((prev) => ({
      ...prev,
      organizationName: orgId,
    }));

    // Fetch departments for the selected organization
    if (orgId) {
      fetchDepartmentsForOrg(orgId);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchPositionData = async () => {
  //     try {
  //       const response = await getPosition(); // Your API call
  //       if (Array.isArray(response.data)) {
  //         console.log(response);
  //         setPosition(response.data);
  //       } else {
  //         setPosition([]); // Set to empty array if data is not in array format
  //       }
  //     } catch (error) {
  //       console.error("Error fetching positions:", error);
  //       setPosition([]); // Handle error by setting to empty array
  //     }
  //   };

  //   fetchPositionData();
  // }, []);

  return (
    <PageContainer className="bgImg" showheader="true" showfooter="true">
      <Grid container display="flex" alignContent="center" height="100%">
        <Grid item padding={2} width={600}>
          <Card style={{ backgroundColor: "#e9f4f7" }}>
            <CardContent orientation="vertical">
              <Grid item pt={1} sx={{ textAlign: "center" }}>
                <Typography variant="h4">Registration</Typography>

                <Typography variant="h6" color="darkgreen">
                  Create a New RTMS Account
                </Typography>
              </Grid>
              <Grid item px={4} alignItems={"center"}>
                <form onSubmit={handleSubmit}>
                  <Grid
                    item
                    gap="9px"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        label="Username"
                        variant="standard"
                        name="username"
                        value={formValues.username}
                        onChange={handleUsernameChange}
                        required
                        fullWidth
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <EmailIcon sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Email"
                        variant="standard"
                        name="email"
                        value={formValues.email}
                        onChange={handleUsernameChange}
                        required
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <CallIcon sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Mobile"
                        name="contactNumber"
                        variant="standard"
                        value={formValues.contactNumber}
                        required
                        onChange={(e) => {
                          const value = e.target.value;
                          // Ensure the value starts with '+91'
                          if (value.startsWith("+91")) {
                            setFormValues((prev) => ({
                              ...prev,
                              contactNumber: value,
                            }));
                          } else {
                            setFormValues((prev) => ({
                              ...prev,
                              contactNumber: `+91${value}`,
                            }));
                          }
                        }}
                        placeholder="+91 (Mobile Number)"
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Employee ID"
                        name="employeeID"
                        variant="standard"
                        value={formValues.employeeID}
                        onChange={handleUsernameChange}
                        required
                      />
                    </Box>

                    {/* Organization Dropdown */}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="organization-label">
                          Organization
                        </InputLabel>
                        <Select
                          labelId="organization-label"
                          name="organizationName"
                          required
                          value={formValues.organizationName}
                          onChange={handleOrganizationChange}
                          label="Organization"
                        >
                          {Array.isArray(organizations) &&
                          organizations.length > 0 ? (
                            organizations.map((org) => (
                              <MenuItem
                                key={org._id}
                                value={org.organizationName}
                              >
                                {org.organizationName}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value="">
                              No organizations available
                            </MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Role in RTMS</InputLabel>
                        <Select
                          required
                          name="roleInRTMS"
                          value={formValues.roleInRTMS}
                          onChange={handleUsernameChange}
                          label="Role in RTMS"
                        >
                          <MenuItem value="manager">Manager</MenuItem>
                          <MenuItem value="employee">Employee</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    {/* Department Dropdown */}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="department-label">
                          Department
                        </InputLabel>
                        <Select
                          required
                          labelId="department-label"
                          name="department"
                          value={formValues.department}
                          onChange={(event) => {
                            const selectedDept = event.target.value;
                            setFormValues((prev) => ({
                              ...prev,
                              department: selectedDept,
                            }));
                            handleDepartmentChange(selectedDept);
                          }}
                          label="Department"
                        >
                          {departments.length > 0 ? (
                            departments.map((dept) => (
                              <MenuItem
                                key={dept._id}
                                value={dept.departmentName}
                              >
                                {dept.departmentName}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value="">
                              No departments available
                            </MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Box>

                    {console.log(position)}

                    {/* Position dropdown  */}
                    {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="position-label">Position</InputLabel>
                        <Select
                          labelId="position-label"
                          value={formValues.position}
                          onChange={(event) => {
                            const selectedPos = event.target.value;
                            setFormValues((prev) => ({
                              ...prev,
                              department: selectedPos,
                            }));
                            handleDepartmentChange(selectedPos);
                          }}
                          label="Position"
                        >
                          {positionsForApp?.map((value, index) => (
                            <MenuItem key={index}>{value}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box> */}

                    <Box
                      sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
                      >
                        <CameraAltIcon sx={{ mr: 1 }} fontSize="large" />
                        <Button variant="outlined" component="label" fullWidth>
                          <input
                            required
                            type="file"
                            accept="image/*"
                            name="passportPhoto"
                            onChange={handleUsernameChange}
                            hidden
                          />
                          {!selectedPhotoName ? (
                            <Typography>Upload Photo</Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {selectedPhotoName}
                            </Typography>
                          )}
                        </Button>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
                      >
                        <CameraAltIcon sx={{ mr: 1 }} fontSize="large" />
                        <Button variant="outlined" component="label" fullWidth>
                          <input
                            required
                            type="file"
                            accept="image/*"
                            name="idCardPhoto"
                            onChange={handleUsernameChange}
                            hidden
                          />
                          {!idCardName ? (
                            <Typography>Upload ID Card</Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {idCardName}
                            </Typography>
                          )}
                        </Button>
                      </Box>
                    </Box>

                    <Button variant="contained" fullWidth type="submit">
                      Next
                    </Button>
                  </Grid>
                </form>
                <Grid item textAlign="center" mt={0.5}>
                  <Typography fontSize={"medium"} mr={"2px"}>
                    Already have an account?
                    <Link
                      to="/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Login
                    </Link>
                  </Typography>
                  <Typography fontSize={"medium"}>
                    Already registered?
                    <Link
                      to="/Popup"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Check Status
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default Signup;
