import { Paper, Typography, TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageContainer from "../../components/HOC/PageContainer";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../apis/Service";
import { setForgotDetails } from "../../apis/authSlice";
import { toast } from "react-toastify";

export default function Forgot() {
  // State for form inputs
  const [formValues, setFormValues] = useState({ email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleInputs = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target?.name]: e.target?.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await forgotPassword(formValues);
      if (response.success) {
        // Store data in redux
        dispatch(
          setForgotDetails({
            email: formValues.email,
          })
        );
        toast.success("OTP Sent Successfully!");
        navigate("/Reset");
      } else {
        toast.error(response.message || "Invalid Email");
      }
    } catch (error) {
      console.error(error);
      toast.error("Forgot Password Failed.");
    }
  };

  return (
    <PageContainer
      showheader
      showfooter
      display="flex"
      alignItems="center"
      className="bgImg"
      justifyContent="center"
    >
      <Paper sx={{ borderRadius: "20px", mx: "5%", width: "45rem", backgroundColor:'#e9f4f7'}}>
        <Grid item p={3}>
          <form onSubmit={handleSubmit}>
            <Grid item mt={2}>
              <Typography variant="h5" fontSize="x-large" textAlign="center">
                Forgot Your Password?
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Typography fontSize="large" textAlign="center">
                Enter Your Registered Email.
              </Typography>
            </Grid>
            <Grid item mt={3}>
              <TextField
                name="email"
                label="Enter Email Address"
                variant="outlined"
                size="small"
                value={formValues?.email}
                onChange={handleInputs}
                fullWidth
              />
            </Grid>
            <Grid item mt={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Send Verification Code
              </Button>
            </Grid>
            <Grid item mt={2} textAlign="center">
              <Link to="/" style={{ textDecoration: "none" }}>
                Back to Login
              </Link>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </PageContainer>
  );
}
