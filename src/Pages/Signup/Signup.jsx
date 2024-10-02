import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Paper,
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
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { useNavigate } from "react-router-dom";
import { sendOtpRegister } from "../../apis/Service";
import { toast } from "react-toastify";
import { setRegisterDetails } from "../../apis/authSlice";

function Signup() {
  const [selectedPhotoName, setSelectedPhotoName] = useState(null); // To store the passport photo name
  const [idCardName, setIdCardName] = useState(null); // To store the ID card photo name
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    contactNumber: "",
    employeeID: "",
    assetName: "",
    department: "",
    roleInRTMS: "",
    idCardPhoto: "", //this is Image Uploaded by User
    passportPhoto: "", //this is Image Uploaded by User
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Integration
    try {
      const response = await sendOtpRegister(formData); // Ensure that sendOtpRegister can handle FormData
      // console.log("OTP Response:", response);
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
            assetName: formValues.assetName,
            department: formValues.department,
            roleInRTMS: formValues.roleInRTMS,
            passportPhoto: passportPhotoURL || formValues.passportPhoto, // Store the image URL
            idCardPhoto: idCardPhotoURL || formValues.idCardPhoto, // Store the image URL
          })
        );

        toast.success("OTP Sent Successfully!");
        // console.log("OTP sent, about to navigate...",response?.message);
        navigate("/otpsignup");
      } else {
        toast.error("Invalid Provided Details");
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup Failed");
    }
  };

  return (
    <PageContainer className="bgImg" showheader="true" showfooter="true">
      <Grid container>
        <Grid item padding={2} width={600}>
          <Card>
            <CardContent orientation="vertical">
              <Grid item pt={1} sx={{ textAlign: "center" }}>
                <Typography variant="h4">Registration</Typography>
                <Typography variant="h6" color="#800000">
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
                    <Grid item>
                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          fullWidth
                          className="custom-textfield"
                          label="Username"
                          variant="standard"
                          color="info"
                          name="username"
                          value={formValues.username}
                          onChange={handleUsernameChange}
                        />
                      </Box>
                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <EmailIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          label="Email"
                          name="email"
                          variant="standard"
                          color="info"
                          fullWidth
                          className="custom-textfield"
                          value={formValues?.email}
                          onChange={handleUsernameChange}
                        />
                      </Box>

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <CallIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          fullWidth
                          label=" Mobile"
                          name="contactNumber"
                          variant="standard"
                          color="info"
                          className="custom-textfield"
                          value={formValues?.contactNumber}
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

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          label="Employee ID"
                          name="employeeID"
                          variant="standard"
                          color="info"
                          fullWidth
                          className="custom-textfield"
                          value={formValues?.employeeID}
                          onChange={handleUsernameChange}
                        />
                      </Box>

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          label="Organization"
                          name="assetName"
                          variant="standard"
                          color="info"
                          fullWidth
                          className="custom-textfield"
                          value={formValues?.assetName}
                          onChange={handleUsernameChange}
                        />
                      </Box>

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <TextField
                          label="Department"
                          name="department"
                          variant="standard"
                          color="info"
                          fullWidth
                          className="custom-textfield"
                          value={formValues?.department}
                          onChange={handleUsernameChange}
                        />
                      </Box>

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", alignItems: "flex-end" }}
                      >
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          fontSize="large"
                        />
                        <FormControl fullWidth variant="standard">
                          <InputLabel>Role in RTMS</InputLabel>
                          <Select
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

                      <Box
                        mt={0.5}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          mt={1}
                          sx={{ display: "flex", alignItems: "flex-end" }}
                        >
                          <CameraAltIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            fontSize="large"
                          />
                          <Button
                            variant="outlined"
                            sx={{
                              minWidth: "80px",
                              backgroundColor: "#D3D3D3",
                              marginRight: "2px",
                              border: "black",
                              height: "30px",
                              padding: "4px",
                              width: "100%",
                              cursor: "pointer",
                              overflow: "scroll",
                            }}
                            component="label"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              name="passportPhoto"
                              onChange={handleUsernameChange}
                              hidden
                            />
                            {!selectedPhotoName ? (
                              <Typography>Upload photo</Typography>
                            ) : (
                              <Typography variant="body2" color="textSecondary">
                                {selectedPhotoName}
                              </Typography>
                            )}
                          </Button>
                        </Box>
                        <Box
                          mt={1}
                          sx={{ display: "flex", alignItems: "flex-end" }}
                        >
                          <CameraAltIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            fontSize="large"
                          />
                          <Button
                            variant="outlined"
                            sx={{
                              minWidth: "80px",
                              backgroundColor: "#D3D3D3",
                              marginRight: "2px",
                              border: "black",
                              height: "30px",
                              padding: "4px",
                              width: "100%",
                              cursor: "pointer",
                              overflow: "scroll",
                            }}
                            component="label"
                          >
                            <input
                              hidden
                              type="file"
                              accept="image/*"
                              name="idCardPhoto"
                              onChange={handleUsernameChange}
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
                    </Grid>

                    <Grid item>
                      <Link style={{ textDecoration: "none", color: "white" }}>
                        <Button
                          variant="contained"
                          className="btn-primary"
                          fullWidth
                          href="#contained-buttons"
                          onClick={handleSubmit}
                        >
                          <Typography variant="h6">Next</Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </form>
                <Grid item textAlign="center" mt={0.5}>
                  <Typography fontSize={"medium"}>
                    Already have account?{" "}
                    <Link
                      to="/"
                      fontWeight={500}
                      fontSize={20}
                      style={{ textDecoration: "none", color: "#3707B0" }}
                    >
                      {" "}
                      Login
                    </Link>
                  </Typography>
                  <Typography fontSize={"medium"}>
                    Have Registration?{" "}
                    <Link
                      to="/Popup"
                      fontWeight={500}
                      fontSize={20}
                      style={{ textDecoration: "none", color: "#3707B0" }}
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
