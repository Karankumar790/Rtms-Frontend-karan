import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PageContainer from "../components/HOC/PageContainer";
import { bgcolor, Box, color, display, width } from "@mui/system";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";

const steps = ["ASSET MANAGER", "DEPARTMENT HEAD", "PASSWORD EMAILED"];

function CheckStatus() {
  return (
    <>
      <PageContainer showheader showfooter>
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
          <Grid item lg={8} md={10} sm={10} xs={10}>
            <Card sx={{bgcolor:"#e8e4d8"}}>
              <Grid
                container
                // p={0}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Grid
                  item
                  lg={3}
                  md={8}
                  sm={8}
                  xs={8}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Typography variant="h4" mt={2}>REGISTRATION ID</Typography>
                  <Typography variant="h6">User Name</Typography>

                  <Typography variant="h6">Email Address</Typography>


                  <Typography variant="h6">Contact Number</Typography>

                  <Typography variant="h6">Employee ID</Typography>

                  <Typography variant="h6">Asset Name</Typography>

                  <Typography variant="h6">Department</Typography>

                  <Typography variant="h6">Role in RTMS</Typography>

                </Grid>
                <Grid
                  item
                  lg={2}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="" alt="User photo" />
                </Grid>
              </Grid>

              <Grid item mt={3}>
                <Box>
                  <Stepper
                    activeStep={1}
                    alternativeLabel
                    sx={{
                      fontSize: "200px",
                      padding: "50px",
                      "& .MuiStepConnector-line": {
                        marginTop: "12px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      },
                    }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel
                          sx={{
                            "& .MuiStepIcon-root": {
                              width: 50,
                              height: 50,
                            },
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      width: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5">Registration Status:</Typography>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button variant="contained" color="primary" size="large">
                        Close
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}

export default CheckStatus;
