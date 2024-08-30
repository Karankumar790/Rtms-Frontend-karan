import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import { toast } from 'react-hot-toast'
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
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputs = (e) => {
    setFormValues((pre) => ({ ...pre, [e.target?.name]: e.target?.value }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(services?.authLoginService(formValues))
    // console.log('>>>>>>>', formValues)
    toast.success('Login Successful')
    navigate('/otp');
  };

  return (
    <PageContainer className="login-form-bg-image" showfooter='true' showheader='true'>
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
                        fullWidth
                        className="custom-textfield"
                        label="Email"
                        name="username"
                        variant="standard"
                        value={formValues?.username}
                        onChange={handleInputs}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "flex-end" }} mt="5%">
                      <HttpsIcon
                        sx={{ color: "action.active", mr: 1 }}
                        fontSize="large"
                      />
                      <TextField
                        fullWidth
                        className="custom-textfield"
                        variant="standard"
                        name="password"
                        type={visible ? "text" : "password"}
                        label="Password"
                        value={formValues?.password}
                        onChange={handleInputs}
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