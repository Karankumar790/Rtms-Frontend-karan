import  {Button,Grid,Step,StepLabel,Stepper,TextField,Typography,} from "@mui/material";
import React from "react";
import PageContainer from "../../../components/HOC/PageContainer";
import { bgcolor, Box, color } from "@mui/system";
import { yellow } from "@mui/material/colors";

const steps = [
  "ASSET MANAGER",
  "DEPARTMENT HEAD",
  "PASSWORD EMAILED",
];

function CheckStatus() {
  return (
    <>
      <PageContainer>
        <Grid container>
          <Grid
            container
            sx={{
              height: "500px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              // bgcolor: "yellow",
            }}
          >
            <Grid item ml={3}>
              <Typography variant="h6">REGISTRATION ID</Typography>
              <Typography>
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="Contact number"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="ONGC Employee Id"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="Asset Name"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="Department"
                  variant="standard"
                />
              </Typography>
              <Typography mt={0.5}>
                <TextField
                  id="standard-basic"
                  label="Role in RTMS"
                  variant="standard"
                />
              </Typography>
            </Grid>
            <Grid
              item
              mr={4}
              sx={{
                // height: "300px",
                width: "300px",
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="" alt="User photo" />
            </Grid>
          </Grid>
          <Grid
            item
            mt={5}
            sx={{ width: "100%", textAlign: "center" }}
          >
            <Box>
              <Stepper activeStep={1} alternativeLabel sx={{fontSize:"100px", padding: "50px" }}>
                {steps.map((label) => (
                  <Step key={label} >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid container mt={3} sx={{  justifyContent: 'flex-end'}} >
          <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  // sx={{display:"flex", justifyContent:"end", justifyItems:"end"}}
                >
                  <Typography>Close</Typography>
                </Button>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}

export default CheckStatus;
