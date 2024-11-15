import React, { useState } from "react";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SummarizeIcon from "@mui/icons-material/Summarize";


function Monitor() {
  const [age, setAge] = React.useState("");
  const [parameters, setParameters] = React.useState("");
  const [report, setReport] = React.useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDates, setSelectedDates] = useState("");


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeParameters = (event) => {
    setParameters(event.target.value);
  };

  const handleChangeReport = (event) => {
    setReport(event.target.value);
  };
  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDateChanges = (event) => {
    setSelectedDates(event.target.value);
  };

  const handleDropChange = (event) => {
    setSelectedOption(event.target.value);
  };

 
  return (
    <div>
      <Grid container gap={1}>
        {/* ----------------------Icon and Well Report-----------------------------------  */}
        <Typography fontSize="x-large">
          {" "}
          <IconButton>
            <SummarizeIcon sx={{ fontSize: 40, color: "blue" }} />
          </IconButton>
          Print Report
        </Typography>
        {/* --------------------------Well Report Inputs Field------------------------------------- */}
        <Grid container spacing={2}>
          <Grid item sm={6} md={3} xs={12} lg={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Well Number</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={age}
                label="Well Location"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sm={6} md={3} xs={12} lg={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Parameter</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={report}
                label="Report Type"
                onChange={handleChangeReport}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Low Bettery</MenuItem>
                <MenuItem value={20}>Flowing Well</MenuItem>
                <MenuItem value={30}>Not Flowing Well</MenuItem>
                <MenuItem value={40}>Low Solar Power</MenuItem>
                <MenuItem value={50}>Network Error</MenuItem>
                <MenuItem value={60}>Low Pressure</MenuItem>
                <MenuItem value={70}>High Pressure</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                type="date"
                size="small"
                label="Start Date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true, // Ensures the label is always visible
                }}
                inputProps={{
                  min: "2001-02-16",
                  max: "2024-08-07",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                type="date"
                size="small"
                label="End Date"
                value={selectedDates}
                onChange={handleDateChanges}
                InputLabelProps={{
                  shrink: true, // Ensures the label is always visible
                }}
                inputProps={{
                  min: "2001-02-16",
                  max: "2024-08-07",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Resolution</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={parameters}
                label="Parameters"
                onChange={handleChangeParameters}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>1 minute</MenuItem>
                <MenuItem value={20}>1 hour</MenuItem>
                <MenuItem value={30}>1 day</MenuItem>
                <MenuItem value={40}>1 week</MenuItem>
                <MenuItem value={50}>1 month</MenuItem>
              </Select>
            </FormControl>
          </Grid>
         
        </Grid>
      </Grid>
    </div>
  );
}

export default Monitor;