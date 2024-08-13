import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import React from "react";

//----------------import icons ------------------------------------------
import well from "../../../../public/assets/WELL.png";
import pressure from "../../../../public/assets/PRESSURE.png";
import battery from "../../../../public/assets/battery.png";
import solar from "../../../../public/assets/SOLAR1.png";
import network from "../../../../public/assets/Network.png";
import map from "../../../../public/assets/map.jpg";

import Chart from "react-apexcharts";

function SingleWell() {
  const images = [
    { src: well, name: "Well" },
    { src: well, name: "Well" },
    { src: well, name: "Well" },
    { src: pressure, name: "pressure" },
    { src: solar, name: "solar" },
    { src: battery, name: "battery" },
    { src: network, name: "network" },
    { src: network, name: "network" },
  ];

  const lineChartOptions = {
    chart: {
      type: "line",
    },
    stroke: {
      width: 2, // Adjust the width here
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const lineChartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <Grid container>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            
          }}
        >
          {images.map((text, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                <img
                  height={"60px"}
                  width={"60px"}
                  border="2px solid black"
                  src={text.src}
                  alt={text.name}
                />
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={{ textDecoration: "none" }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Typography variant="h4">Physical Details</Typography>
      <Grid container sx={{display:'flex',justifyContent:'space-between'}}>
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          xs={12}
          sm={4}
          md={3}
          lg={3}
          justifyContent={'space-evenly'}
        >
          <Box >
            <Typography mt={2} variant="h6" lineHeight={2.2}>
              Well number
            </Typography>
            <Typography variant="h6" lineHeight={2.2}>Well Location</Typography>
            <Typography variant="h6" lineHeight={2.2}>Well installation</Typography>
            <Typography variant="h6"lineHeight={2.2}>Geolocation latitude</Typography>
            <Typography variant="h6"lineHeight={2.2}>Geolocation longitude</Typography>
          </Box>
          <Box>
            <Typography mt={2} variant="h6" lineHeight={2.2}>
            
              Well number
            </Typography>
            <Typography variant="h6"lineHeight={2.2}>Well Location</Typography>
            <Typography variant="h6"lineHeight={2.2}>Well installation</Typography>
            <Typography variant="h6"lineHeight={2.2}>Geolocation latitude</Typography>
            <Typography variant="h6"lineHeight={2.2}>Geolocation longitude</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img height={200} width={"auto"} src={map} alt="map" />
        </Grid>

        <Grid item xs={12} sm={4} md={6} lg={5.3}>
          <Paper>
            <Chart
              options={lineChartOptions}
              series={lineChartSeries}
              type="line"
              height={200}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          border: "2px solid black",
          height: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5"> Notification History</Typography>
      </Grid>
    </>
  );
}

export default SingleWell;
