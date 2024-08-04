import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import account1 from "/assets/account1.png";
import { Link } from "react-router-dom";


function Reset() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#646d90 ", height: "82.00vh" }}>
        <Grid container sx={{justifyContent: "center", alignContent: "center" }}
        >
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Paper sx={{ borderRadius: '20px', border: '1px solid #ddd' }}>
              <Grid item>
                <form>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item mt={2}>
                      <Grid item textAlign="center">
                        <img
                          src={account1}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </Grid>
                      <Grid item mt={1} sx={{textAlign:'center'}}>
                        <Typography variant="h4">Reset Password</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item mt={2} ml={3} mr={3}>
                    <TextField
                      label="Enter The Code"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item mt={1} ml={3} mr={3}>
                    <TextField
                      label="New Password"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item mt={1} ml={3} mr={3}>
                    <TextField
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item mt={3} ml={3} mr={3}> 
                    <Button variant="contained" fullWidth color="primary">
                      Reset Password
                    </Button>
                  </Grid>
                  <Grid item mt={2} pb={3} sx={{display:'flex' ,justifyContent:'center'}}>
                    <Typography><Link to="/" style={{textDecoration:'none'}}>Back to Login</Link></Typography>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Reset;
