import React, { useState } from 'react';
import { Button, Card, CardContent, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { IconButton } from "@mui/material";
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import HttpsIcon from "@mui/icons-material/Https";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from '@mui/icons-material/Store';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import OTPInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { createOrg, generateOtpOragnization } from '../../apis/Service';
import { setEmailOrgOtp, setOragnizationAuthenticated, setOragnizationDetails } from '../../apis/authSlice';
import { toast } from 'react-toastify';

export default function SuperAdmin() {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    organizationName: "",
    username: "",
    password: "",
    email: "",
    contactNumber: "",
    emailOtp: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setVisible(prev => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const [emailOtp, setEmailOtp] = useState("");

  const handleOtpChange = (otp) => {
    setEmailOtp(otp);
    setFormValues(prev => ({ ...prev, emailOtp: otp }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await generateOtpOragnization(formData);
      if (response && response.success) {
        dispatch(setOragnizationDetails(formValues));
        toast.success("OTP Sent Successfully!");
        setOpen(true);
      } else {
        toast.error(response?.message || "Invalid Provided Details");
      }
    } catch (error) {
      toast.error("Organization failed due to a network error.");
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('emailOtp', formValues.emailOtp);

    try {
      const response = await createOrg(formData);
      if (response?.success) {
        dispatch(setEmailOrgOtp(formData));
        dispatch(setOragnizationAuthenticated(true));
        toast.success("Successfully created Organization!");
        navigate('/');
      } else {
        toast.error("Invalid Provided Details");
      }
    } catch (error) {
      toast.error("Organization failed");
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Grid container display={'flex'} justifyContent={'start'} height="100%" alignItems={'center'} p='5%'>
        <Grid item padding={2} width={550}>
          <Card>
            <CardContent>
              <Grid item sx={{ textAlign: "center" }}>
                <Typography variant="h4" color='green'>NEW CUSTOMER</Typography>
              </Grid>
              <Grid item px={4} alignItems={"center"}>
                <form onSubmit={handleSubmit}>
                  <Grid item gap="9px" style={{ display: "flex", flexDirection: "column" }}>
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <StoreIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField fullWidth label="Organization" variant="standard" color="info" name="organizationName" value={formValues.organizationName} onChange={handleInputChange} />
                    </Box>
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField label="Username" variant="standard" color="info" fullWidth name="username" value={formValues.username} onChange={handleInputChange} />
                    </Box>
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <HttpsIcon sx={{ color: "action.active", mr: 1 }} fontSize="large" />
                      <TextField variant="standard" type={visible ? "text" : "password"} label="Password" name="password" value={formValues.password} onChange={handleInputChange} fullWidth InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                              {visible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }} />
                    </Box>
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField label="Email" name="email" variant="standard" color="info" fullWidth value={formValues.email} onChange={handleInputChange} />
                    </Box>
                    <Box mt={0.5} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <CallIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize="large" />
                      <TextField fullWidth label="Mobile" name="contactNumber" variant="standard" color="info" value={formValues.contactNumber} onChange={handleInputChange} />
                    </Box>
                    <Grid item mt={2}>
                      <Button variant="contained" className="btn-primary" fullWidth type="submit">
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
        <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition>
          <Fade in={open}>
            <ModalContent sx={style}>
              <Grid container>
                <form>
                  <Grid item xs={12} mt={2}>
                    <Typography fontSize="x-large" sx={{ color: "#0c1352", textAlign: "center" }}>
                      Enter OTP To Verify E-Mail
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={3} display="flex" justifyContent="center">
                    <OTPInput inputStyle={{
                      width: "2rem",
                      height: "4vh",
                      fontSize: "18px",
                    }} value={emailOtp} onChange={handleOtpChange} numInputs={6} renderSeparator={<span> &nbsp; &nbsp; </span>} renderInput={(props) => <input {...props} />} />
                  </Grid>
                  <Grid item xs={12} mt={3} textAlign="center">
                    <Button variant="contained" color="primary" onClick={handleOtp}>
                      Submit OTP
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </ModalContent>
          </Fade>
        </Modal>
      </Grid>
  );
}

SuperAdmin.propTypes = {
  setOpen: PropTypes.func,
  setEmailOtp: PropTypes.func,
};
