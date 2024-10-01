import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Https as HttpsIcon,
  AccountCircle,
  Visibility,
  VisibilityOff,
  Email as EmailIcon,
  Call as CallIcon,
  Store as StoreIcon,
} from "@mui/icons-material";
import { styled, css } from "@mui/system";
import { Modal as BaseModal, Fade } from "@mui/material";
import OTPInput from "react-otp-input";
import { createOrg, genrateOtpOrg } from "../../../apis/Service";
import { toast } from "react-toastify";
import PageContainer from "../../../components/HOC/PageContainer";
// import FoxboroFooter from "../../../components/Footer/FoxboroFooter"; // Fix this path if necessary
import FoxboroHeader from "../../../components/Header/FoxboroHeader"; 

export default function SuperAdmin() {
  const [formValues, setFormValues] = useState({
    organizationName: "",
    username: "",
    password: "",
    email: "",
    contactNumber: "",
    emailOtp: "",
  });
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };

  const handleInputs = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle OTP change
  const handleOtpChange = (otp) => {
    setFormValues((prev) => ({ ...prev, emailOtp: otp }));
  };

  // Handle form submission for OTP generation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await genrateOtpOrg(formValues);
      if (response?.success) {
        toast.success(response.message);
        setOpen(true); // Open OTP modal
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error("OTP generation failed. Try again.");
    }
  };

  // Create Organization after OTP verification
  const createOrganization = async (e) => {
    e.preventDefault();
    const { organizationName, username, password, email, contactNumber, emailOtp } = formValues;
    try {
      const response = await createOrg({
        organizationName,
        username,
        password,
        email,
        contactNumber,
        emailOtp,
      });
      if (response?.success) {
        toast.success("Organization created successfully!");
        setOpen(false); // Close OTP modal after success
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error("Organization creation failed. Try again.");
    }
  };

  return (
    <PageContainer className="admin-bg-image">
      <FoxboroHeader />
      <Grid
        container
        display="flex"
        justifyContent="start"
        height="85%"
        alignItems="center"
        pl="5%"
      >
        <Grid item padding={2} width={550}>
          <Card>
            <CardContent orientation="vertical">
              <Grid item sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="green">
                  NEW CUSTOMER
                </Typography>
              </Grid>
              <Grid item px={4} alignItems="center">
                <form onSubmit={handleSubmit}>
                  <Grid item gap="9px" style={{ display: "flex", flexDirection: "column" }}>
                    {/* Organization Name Field */}
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <StoreIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Organization"
                        variant="standard"
                        color="info"
                        name="organizationName"
                        value={formValues.organizationName}
                        onChange={handleInputs}
                      />
                    </Box>

                    {/* Username Field */}
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField
                        label="Username"
                        variant="standard"
                        color="info"
                        fullWidth
                        name="username"
                        value={formValues.username}
                        onChange={handleInputs}
                      />
                    </Box>

                    {/* Password Field */}
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <HttpsIcon sx={{ color: "action.active", mr: 1 }} fontSize="large" />
                      <TextField
                        variant="standard"
                        type={visible ? "text" : "password"}
                        label="Password"
                        name="password"
                        value={formValues.password}
                        onChange={handleInputs}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleClickShowPassword} edge="end">
                                {visible ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>

                    {/* Email Field */}
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField
                        label="Email"
                        name="email"
                        variant="standard"
                        color="info"
                        fullWidth
                        value={formValues.email}
                        onChange={handleInputs}
                      />
                    </Box>

                    {/* Contact Number Field */}
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <CallIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Mobile"
                        name="contactNumber"
                        variant="standard"
                        color="info"
                        value={formValues.contactNumber}
                        onChange={(e) => {
                          const value = e.target.value.startsWith("+91")
                            ? e.target.value
                            : `+91${e.target.value}`;
                          setFormValues((prev) => ({ ...prev, contactNumber: value }));
                        }}
                        placeholder="+91 (Mobile Number)"
                      />
                    </Box>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item mt={2}>
                    <Button variant="contained" className="btn-primary" fullWidth type="submit">
                      Create A New Customer
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* OTP Modal */}
      <Grid container>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: StyledBackdrop }}
        >
          <Fade in={open}>
            <ModalContent sx={style}>
              <Grid container>
                <form onSubmit={createOrganization}>
                  <Grid item xs={12} mt={2}>
                    <Typography fontSize="x-large" sx={{ color: "#0c1352", textAlign: "center" }}>
                      Enter OTP To Verify E-Mail
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={3} display="flex" justifyContent="center">
                    <OTPInput
                      inputStyle={{ width: "2rem", height: "4vh", fontSize: "18px" }}
                      name="emailOtp"
                      value={formValues.emailOtp}
                      onChange={handleOtpChange}
                      numInputs={6}
                      renderSeparator={<span> &nbsp; &nbsp; </span>}
                    />
                  </Grid>
                  <Grid item xs={12} mt={3} textAlign="center">
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12} textAlign="center" py={1}>
                    <Button onClick={handleSubmit}>
                      <Typography style={{ cursor: "pointer", color: "blue" }}>
                        Resend OTP
                      </Typography>
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </ModalContent>
          </Fade>
        </Modal>
      </Grid>

      {/* Uncomment and fix the path if necessary */}
      {/* <FoxboroFooter /> */}
    </PageContainer>
  );
}

// Styling and Modal components
const StyledBackdrop = styled("div")`
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled("div")`
  background: white;
  border-radius: 8px;
  box-shadow: 24;
  padding: 16px;
  width: 400px;
  margin: auto;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
