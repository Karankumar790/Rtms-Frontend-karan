import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
<<<<<<< HEAD
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Box, height } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import FoxboroHeader from "../../../components/Header/FoxboroHeader";
import FoxboroFooter from "../../../components/Footer/FoxboroFooter";
import PropTypes from "prop-types";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
=======
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
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
import OTPInput from "react-otp-input";
import { createOrg, genrateOtpOrg } from "../../../apis/Service";
import { toast } from "react-toastify";
import PageContainer from "../../../components/HOC/PageContainer";
<<<<<<< HEAD
=======
// import FoxboroFooter from "../../../components/Footer/FoxboroFooter"; // Fix this path if necessary
import FoxboroHeader from "../../../components/Header/FoxboroHeader"; 
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d

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
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
=======
  const [open, setOpen] = useState(false);

>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };

<<<<<<< HEAD
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputs = (e) => {
    setFormValues((pre) => ({ ...pre, [e.target?.name]: e.target?.value }));
    // console.log(formValues, ">>>>>>>>>>>>form value");
  };

  // Separate handler for OTP input
  const handleOtpChange = (otp) => {
    setFormValues((prev) => ({
      ...prev,
      emailOtp: otp, // Directly set OTP value
    }));
  };

  //generated otp
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formValues, ">>>>>>>>>>>>form value")
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await genrateOtpOrg(formData);
      if (response?.success) {
        toast.success(response.message);
        setOpen(true);
=======
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
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
<<<<<<< HEAD
      toast.error(error.message);
    }
  };

  //created organization
  const creasteOrganizaton = async (e) => {
    e.preventDefault();
    const {
      organizationName,
      username,
      password,
      email,
      contactNumber,
      emailOtp,
    } = formValues;
=======
      toast.error("OTP generation failed. Try again.");
    }
  };

  // Create Organization after OTP verification
  const createOrganization = async (e) => {
    e.preventDefault();
    const { organizationName, username, password, email, contactNumber, emailOtp } = formValues;
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
    try {
      const response = await createOrg({
        organizationName,
        username,
        password,
        email,
<<<<<<< HEAD
        emailOtp,
        contactNumber,
      });

      if (response?.success) {
        toast.success(response.message);
        setOpen(false);
=======
        contactNumber,
        emailOtp,
      });
      if (response?.success) {
        toast.success("Organization created successfully!");
        setOpen(false); // Close OTP modal after success
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
<<<<<<< HEAD
      toast.error(error.message);
=======
      toast.error("Organization creation failed. Try again.");
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <PageContainer className="admin-bg-image ">
        <FoxboroHeader />
        <Grid
          container
          display={"flex"}
          justifyContent={"start"}
          height="85%"
          alignItems={"center"}
          p="5%"
        >
          <Grid item padding={2} width={550} >
            <Card>
              <CardContent orientation="vertical">
                <Grid item sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color="green">
                    NEW CUSTOMER
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
                          <StoreIcon
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            fontSize="large"
                          />
                          <TextField
                            fullWidth
                            className="custom-textfield"
                            label="Organization "
                            variant="standard"
                            color="info"
                            name="organizationName"
                            value={formValues.organizationName}
                            onChange={handleInputs}
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
                            label="Username"
                            variant="standard"
                            color="info"
                            fullWidth
                            className="custom-textfield"
                            name="username"
                            value={formValues.username}
                            onChange={handleInputs}
                          />
                        </Box>

                        <Box
                          mt={0.5}
                          sx={{ display: "flex", alignItems: "flex-end" }}
                        >
                          <HttpsIcon
                            sx={{ color: "action.active", mr: 1 }}
                            fontSize="large"
                          />
                          <TextField
                            className="custom-textfield"
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
                                  <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {visible ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
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
                            value={formValues.email}
                            onChange={handleInputs}
                            className="custom-textfield"
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
                            label="Mobile"
                            name="contactNumber"
                            variant="standard"
                            color="info"
                            value={formValues.contactNumber}
                            // onChange={handleInputs}
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
                            className="custom-textfield"
                          />
                        </Box>
                      </Grid>

                      <Grid item mt={2}>
                        <Button
                          variant="contained"
                          className="btn-primary"
                          fullWidth
                          type="submit"
                        >
                          Create A New Customer
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
                  <form onSubmit={creasteOrganizaton}>
                    <Grid item xs={12} md={12} sm={12} lg={12} mt={2}>
                      <Typography
                        fontSize="x-large"
                        sx={{ color: "#0c1352", textAlign: "center" }}
                      >
                        Enter OTP To Verify E-Mail
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sm={12}
                      lg={12}
                      mt={3}
                      display="flex"
                      justifyContent="center"
                    >
                      <OTPInput
                        inputStyle={{
                          width: "2rem",
                          height: "4vh",
                          fontSize: "18px",
                        }}
                        name="emailOtp"
                        value={formValues.emailOtp}
                        onChange={handleOtpChange}
                        numInputs={6}
                        renderSeparator={<span> &nbsp; &nbsp; </span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sm={12}
                      lg={12}
                      mt={3}
                      textAlign="center"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ bgcolor: "#0c113b" }}
                        type="submit"
                        onClick={handleOpen}
                      >
                        <Typography>Submit</Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={12} textAlign="center" py={1}>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <Button onClick={handleSubmit}>
                          <Typography style={{ cursor: "pointer" }}>
                            Resend One-Time Password
                          </Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </form>
                </Grid>
              </ModalContent>
            </Fade>
          </Modal>
        </Grid>
        <Grid >
          <FoxboroFooter />
        </Grid>
      </PageContainer>
    </div>
  );
}

// --------------------------------------------popupOTP-------------------------------------------
const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  // background-color: rgb(87 89 88 / 0.5);
  background-color: rgb(0 0 0 / 0.8);
  -webkit-tap-highlight-color: transparent;
=======
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
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
<<<<<<< HEAD
  width: 300,
};

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);
=======
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
>>>>>>> 15ece0c2a235bff6b7d94f809914e2a0d356c26d
