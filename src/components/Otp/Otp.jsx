import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
import PageContainer from "../HOC/PageContainer";
import { Link } from "react-router-dom";


export default function Forgot() {



  return (
    <PageContainer showheader='true' showfooter='true' className='bgImg' style={{ display: 'grid', placeContent: 'center' }}>
      <Grid container p={1}>
        <Grid item xs={12} md={12} sm={12}>
          <Paper sx={{ borderRadius: "17px", p: '7px' }} >
            <form>
              <Grid item xs={12} md={12} sm={12} lg={12} mt={2}>
                <Typography fontSize={"x-large"} sx={{ color: "#0c1352", textAlign: 'center' }}>
                  Please Enter OTP To Verify Your Account
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography variant="h5" textAlign="center">
                  OTP has been sent to your registered E-mail & Mobile
                </Typography>
              </Grid>
              {/* Input otp value  */}
              <Grid item xs={12} md={12} sm={12} lg={12} mt={3} display="flex" gap={2} justifyContent="center" justifyItems="center">
                {/* < input type="number" inputProps={{ maxLength: 5 }}  style={{textAlign:"center"}}></input> */}
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
                <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />

              </Grid>
              <Grid
                item
                xs={12} md={12} sm={12} lg={12}
                mt={3}
                justifyContent="center"
                sx={{ textAlign: "center" }}
              >
                <Link to="/dashboard">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ bgcolor: "#0c113b" }}
                  >
                    <Typography>Access Dashboard</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={12} textAlign="center" py={1}>
                <Link to="" style={{ textDecoration: "none" }}>
                  <Typography >
                    Resend One-Time Password
                  </Typography>
                </Link>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
