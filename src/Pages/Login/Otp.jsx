import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Button, Link } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PageContainer from "../../components/HOC/PageContainer";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { login, sendOtpLogin } from "../../apis/Service"; 
import {
  setOtp,
  setAuthenticated,
  setAuthToken,
  setRole,
  setOrganizationName,
} from "../../apis/authSlice";
import { toast } from "react-toastify";

export default function OtpLogin() {
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(200);
  const [isExpired, setIsExpired] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password } = useSelector((state) => state.auth); 

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setIsExpired(true);
      toast.error("OTP has expired. Please request a new one.");
    }
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { username, password, otp: otpValue };

    try {
      const response = await login(formData);
      if (response.success) {
        dispatch(setOtp(otpValue)); 
        dispatch(setAuthenticated(true)); 
        dispatch(setAuthToken(response.token)); 
        dispatch(setRole(response.data.role)); 
        dispatch(setOrganizationName(response.data.organization)); 

        toast.success("Login successful!");

        navigate(response.data.role === "admin" ? "/admin" : "/dashboard");
      } else {
        toast.error("OTP does not match.");
      }
    } catch (error) {
      console.error(error);
      toast.error("OTP verification failed.");
    }
  };

  const handleResendOtp = async () => {
    if (isExpired) {
      try {
        const response = await sendOtpLogin({ username, password }); 
        if (response.success) {
          toast.success("OTP resent successfully!");
          setOtpValue("");
          setTimer(200); // Reset timer to 5 minutes
          setIsExpired(false);
        } else {
          toast.error("Failed to resend OTP.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error resending OTP.");
      }
    } else {
      toast.error("Please wait for the current OTP to expire.");
    }
  };

  return (
    <PageContainer
      showheader
      showfooter
      className="bgImg"
      style={{ display: "grid", placeContent: "center" }}
    >
      <Grid container m={0}>
        <Grid item xs={12}>
          <Paper sx={{ borderRadius: "10px" }}>
            <Grid container p={2}>
              <form onSubmit={handleSubmit}>
                <Grid item xs={12} mt={2}>
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
                    value={otpValue}
                    onChange={setOtpValue}
                    numInputs={6}
                    renderSeparator={<span> &nbsp; &nbsp; </span>}
                    renderInput={(props) => <input {...props} />}
                    disabled={isExpired} // Disable input if expired
                  />
                </Grid>
                <Grid item xs={12} mt={3} textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ bgcolor: "#0c113b" }}
                    type="submit"
                    disabled={isExpired} // Disable submit if expired
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12} textAlign="center" py={1}>
                  <Link
                    to="#"
                    style={{ textDecoration: "none" }}
                    onClick={handleResendOtp}
                  >
                    <Typography style={{ cursor: "pointer" }}>
                      Resend One-Time Password
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} textAlign="center" py={1}>
                  {isExpired && (
                    <Typography color="red">OTP expired. Please resend.</Typography>
                  )}
                  <Typography color="gray">
                    Time left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
                  </Typography>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
