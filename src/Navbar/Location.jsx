import { Box } from "@mui/material";
import mapboxgl from "mapbox-gl";
import { Map } from "react-map-gl";

const Location = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidHVhbmJtdDEyMyIsImEiOiJjbHR1dmZjb3owY3ZwMnFvNDdoNWMyZ20wIn0.mS1DV3mYSzY1p3LI8eotKg";
  return (
    <Box>
      <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      ;
    </Box>
  );
};

export default Location;
