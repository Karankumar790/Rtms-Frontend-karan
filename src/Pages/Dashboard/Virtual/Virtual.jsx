import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import GeoIcon from "@mui/icons-material/Place";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Virtual() {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, 12); // Adjust zoom level as needed
    return null;
  }

  const [coords, setCoords] = useState([0, 0]); // Initial coordinates

  useEffect(() => {
    // Retrieve coordinates from local storage
    const lat = parseFloat(localStorage.getItem("latitude"));
    const lng = parseFloat(localStorage.getItem("longitude"));
    
    if (!isNaN(lat) && !isNaN(lng)) {
      setCoords([lat, lng]); // Set the coordinates from local storage
    }
  }, []); // Only run on mount

  return (
    <div>
      <Grid container gap={1}>
        <Box display="flex">
          <IconButton>
            <GeoIcon sx={{ fontSize: 35, color: "red" }} />
          </IconButton>
          <Typography mt={1} variant="h4">
            Geo-Location{" "}
          </Typography>
        </Box>

        <Grid container textAlign={"center"} mt={2} display={"block"}>
          <Grid item md={12} border={"1px solid black"}>
            <MapContainer
              center={coords}
              zoom={12}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coords} />
              <ChangeMapView coords={coords} />
            </MapContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Virtual;
