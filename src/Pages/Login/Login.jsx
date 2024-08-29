import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import services from './Services/loginServices'


function Login() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // To navigate programmatically
  const dispatch = useDispatch();
  const handleInputs = (e) => {
    setFormValues((pre) => ({ ...pre, [e.target?.name]: e.target?.value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('>>>>>>>', formValues)
    dispatch(services?.authLoginService(formValues))
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

    if (!values.username) {
      errors.username = "username is required";
    } else if (!regex.test(values.username)) {
      errors.username = "This is not a valid username format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  return (
    <PageContainer className="login-form-bg-image" showfooter showheader>
      <Grid container height={"100%"} display={"flex"} justifyContent={"start"} padding="4rem" alignContent={"center"}>
        <Grid item width={600}>
          <Card>
            <CardContent orientation="vertical">
              <Grid item sx={{ textAlign: "center" }} md={12} sm={12} xs={12}>
                <Typography pt={2} fontSize="xxx-large">
                  Welcome
                </Typography>
                <Typography fontSize="large" color="#800000">
                  Real Time Well Monitoring System
                </Typography>
              </Grid>
              <Grid item alignItems={"center"}>
                <form onSubmit={handleSubmit}>
                  <Grid container padding={5} spacing={2}>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1 }}
                        fontSize="large"
                      />
                      <TextField
                        className="custom-textfield"
                        label="Email"
                        name="username"
                        variant="standard"
                        value={formValues.username}
                        onChange={handleInputs}
                        fullWidth
                        error={Boolean(formErrors?.email)}
                        helperText={formErrors?.email}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "flex-end" }} mt="5%">
                      <HttpsIcon
                        sx={{ color: "action.active", mr: 1 }}
                        fontSize="large"
                      />
                      <TextField
                        className="custom-textfield"
                        variant="standard"
                        name="password"
                        type={visible ? "text" : "password"}
                        label="Password"
                        value={formValues.password}
                        onChange={handleInputs}
                        fullWidth
                        error={Boolean(formErrors?.password)}
                        helperText={formErrors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {visible ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container padding={5} spacing={2} direction="column" py={2}>
                    <Grid item textAlign={"end"}>
                      <Link to="/forgot" style={{ textDecoration: "none" }}>
                        Forgot Password
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" className="btn-primary" fullWidth type="submit">
                        Login
                      </Button>
                    </Grid>
                    <Grid item textAlign="center">
                      <Typography fontSize="large">
                        Don't have an account?
                        <Link
                          to="/signup"
                          style={{ textDecoration: "none", margin: "4px" }}
                        >
                          Sign Up
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default Login;