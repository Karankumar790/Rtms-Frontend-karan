import {
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PageContainer from "../../../components/HOC/PageContainer";
import { bgcolor, Box, color } from "@mui/system";
import { yellow } from "@mui/material/colors";

const steps = ["ASSET MANAGER", "DEPARTMENT HEAD", "PASSWORD EMAILED"];

function CheckStatus() {
  return (
    <>
      <PageContainer>
        <Paper elevation={2}>
          <Grid
            container
            p={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#d3e7ed",
            }}
          >
            <Grid
              item
              lg={4}
              md={8}
              sm={8}
              xs={8}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography variant="h6">REGISTRATION ID</Typography>
              <TextField
                label="Username"
                variant="standard"
                sx={{ marginTop: 1 }}
              />
              <TextField
                label="Email"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
              <TextField
                label="Contact number"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
              <TextField
                label="ONGC Employee Id"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
              <TextField
                label="Asset Name"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
              <TextField
                label="Department"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
              <TextField
                label="Role in RTMS"
                variant="standard"
                sx={{ marginTop: 0.7 }}
              />
            </Grid>
            <Grid
              item
              lg={2}
              md={4}
              sm={4}
              xs={4}
              sx={{
                border: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="" alt="User photo" />
            </Grid>
          </Grid>
        </Paper>
        <Grid item mt={3}>
          <Box>
            <Stepper
              activeStep={1}
              alternativeLabel
              sx={{ fontSize: "100px", padding: "50px" }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary" size="large">
              Close
            </Button>
          </Box>
        </Grid>
      </PageContainer>
    </>
  );
}

export default CheckStatus;
