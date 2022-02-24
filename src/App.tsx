import { Grid, Box } from "@mui/material";
import React from "react";
import Map from "./components/map";
import MapControls from "./components/mapControls";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className='App'>
      <div className='controls-container'>
        <Box sx={{ display: "grid", gap: 2, p: 2 }}>
          <MapControls />
          <SearchBar />
        </Box>
      </div>
      <div className='map-container'>
        <Map />
      </div>
    </div>
  );
}

export default App;
