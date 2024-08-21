import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PageContainer from "../../components/HOC/PageContainer";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { IconButton, InputAdornment } from "@mui/material";
// import { useState } from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <PageContainer className="login-form-bg-image" showfooter showheader>
      <Grid
        container
        height={"100%"}
        display={"flex"}
        justifyContent={"start"}
        padding='4rem'
        alignContent={"center"}
      >
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
                <form>
                  <Grid container padding={5} spacing={2}>
                    <Grid item sx={{ display: "flex", alignItems: "flex-end" }} md={12} sm={12} lg={12} xs={12} >
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1 }}
                        fontSize="large"
                      />
                      <TextField
                        className="custom-textfield"
                        label="Username"
                        variant="standard"
                        fullWidth
                      />
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "flex", alignItems: "flex-end" }}
                      md={12}
                      sm={12}
                      lg={12}
                      xs={12}
                      mt='5%'
                    >
                      <HttpsIcon
                        sx={{ color: "action.active", mr: 1 }}
                        fontSize="large"
                      />
                      <TextField
                        variant="standard"
                        value={password}
                        type={visible ? "text" : "password"}
                        label="Password"
                        // placeholder="Password"
                        className="custom-textfield"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {visible ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    padding={5}
                    spacing={2}
                    direction="column"
                    py={2}
                  >
                    <Grid item textAlign={"end"}>
                      <Link to="/forgot" style={{ textDecoration: "none" }}>
                        Forgot Password
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/Otp">
                        <Button
                          variant="contained"
                          className="btn-primary"
                          fullWidth
                          type="submit"
                        >
                          Login
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item textAlign="center">
                      <Typography fontSize="small">
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
