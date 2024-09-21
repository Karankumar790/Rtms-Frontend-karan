import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageContainer from "../../components/HOC/PageContainer";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import services from "./Services/loginServices";
import toast from "react-hot-toast";

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


export default function OtpLogin() {
  const state = useSelector((state) => state)
  const [otpValue, setOtpValue] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
   
    dispatch(services.authLoginService(otpValue))
    dispatch(services.authLoginService(state))

    navigate('/dashboard')
    toast.success('Login Successful')
  }

  // useEffect(() => {
  //   if (state && state?.token) {
  //     navigate('/dashboard')

  //   }
  // }, [])
  return (
    <PageContainer
      showheader='true'
      showfooter='true'
      className='bgImg'
      style={{ display: 'grid', placeContent: 'center' }}
    >
      <Grid container m={0}>
        <Grid item xs={12} md={12} sm={12}>
          <Paper sx={{ borderRadius: "10px" }} >
            <Grid container p={2}>
              <form>
                <Grid item xs={12} md={12} sm={12} lg={12} mt={2}>
                  <Typography fontSize={"x-large"} sx={{ color: "#0c1352", textAlign: 'center' }}>
                    Enter OTP To Verify E-Mail
                  </Typography>
                </Grid>

              
                <Grid item xs={12} md={12} sm={12} lg={12} mt={3} display="flex" gap={1} justifyContent="center" justifyItems="center">
                  <OTPInput
                    inputStyle={{ width: '2rem', height: '4vh', fontSize: '18px' }}
                    value={otpValue?.otp}
                    onChange={(e) => setOtpValue((pre) => ({ ...pre, otp: e }))}
                    numInputs={6}
                    renderSeparator={<span> &nbsp; &nbsp; </span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </Grid>
                <Grid
                  item
                  xs={12} md={12} sm={12} lg={12} mt={3} justifyContent="center" sx={{ textAlign: "center" }}>
                  <Button

                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ bgcolor: "#0c113b" }}
                    onClick={handleSubmit}
                  >
                    <Typography>Submit</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12} textAlign="center" py={1}>
                  <Link to="" style={{ textDecoration: "none" }} >
                    <Typography >
                      Resend One-Time Password
                    </Typography>
                  </Link>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}


