import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

function ManageAsset() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <Grid item sx={{display:'flex', flexDirection:'row'}} gap={1}>
            <Typography variant="h4">Asset: </Typography>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Address 1</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Address 2</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">City</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">State</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Country</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Pin Code</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Phone</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Fax</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h6">Latitude</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
      </Grid>
    </div>
  );
}

export default ManageAsset;
