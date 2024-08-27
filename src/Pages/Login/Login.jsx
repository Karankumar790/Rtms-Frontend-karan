import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import PageContainer from "../../components/HOC/PageContainer";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";

function Login() {
  //---------------------API Integration---------------------------------





  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // To navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://rtms-backend.onrender.com/api/v1/users/login')
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('/otp'); // Navigate to the next page (e.g., OTP page)
    }
  }, [formErrors, isSubmit, navigate]);

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  return (
    <PageContainer className="login-form-bg-image" display={"flex"} alignContent={"center"} justifyContent={"start"} showfooter showheader>
      {/* <Grid
        container
        height={"100%"}
        display={"flex"}
        justifyContent={"start"}
        padding="4rem"
        alignContent={"center"}
        bgcolor={'yellow'}
      > */}
      <Grid container bgcolor={'pink'} display='flex' justifyContent='center' alignItems='center' >
        <Card sx={{ bgcolor: 'yellowgreen' }} p="4rem">
          <CardContent orientation="vertical">
            <Box sx={{ textAlign: "center" }} bgcolor={'beige'}>
              <Typography pt={2} fontSize="xxx-large">
                Welcome
              </Typography>
              <Typography fontSize="large" color="#800000">
                Real Time Well Monitoring System
              </Typography>
            </Box>
            <Grid container bgcolor={'aqua'} alignItems={"center"} >
              <form onSubmit={handleSubmit}>
                <Box display={'flex'} flexDirection={'column'} flexGrow={1} bgcolor={'pink'}  padding={5} spacing={2}>
                  <Box
                    
                    bgcolor={'yellowgreen'}
                    sx={{ display: "flex", alignItems: "flex-end",flexGrow:1 }}
                   
                  >
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1 }}
                      fontSize="large"
                    />
                    <TextField
                      className="custom-textfield"
                      label="Email"
                      name="email"
                      variant="standard"
                      value={formValues.email}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(formErrors.email)}
                      helperText={formErrors.email}
                    />
                  </Box>
                  <Box
                    
                    bgcolor={'aliceblue'}
                    sx={{ display: "flex", alignItems: "flex-end", flexGrow:1 }}
                   
                    mt="5%"
                  >
                    <HttpsIcon
                      sx={{ color: "action.active", mr: 1 }}
                      fontSize="large"
                    />
                    <TextField
                      variant="standard"
                      name="password"
                      type={visible ? "text" : "password"}
                      label="Password"
                      value={formValues.password}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(formErrors.password)}
                      helperText={formErrors.password}
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
                </Box>
                <Grid
                  container
                  padding={5}
                  spacing={2}
                  direction="column"
                  py={2}
                >
                  <Box bgcolor={'yellow'} textAlign={"end"}>
                    <Link to="/forgot" style={{ textDecoration: "none" }}>
                      Forgot Password
                    </Link>
                  </Box>
                  <Box  bgcolor={'whitesmoke'}>
                    <Button
                      variant="contained"
                      className="btn-primary"
                      fullWidth
                      type="submit"
                    >
                      Login
                    </Button>
                  </Box>
                  <Box bgcolor={'skyblue'}  textAlign="center">
                    <Typography fontSize="large">
                      Don't have an account?
                      <Link
                        to="/signup"
                        style={{ textDecoration: "none", margin: "4px" }}
                      >
                        Sign Up
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/* </Grid> */}
    </PageContainer>
  );
}

export default Login;
