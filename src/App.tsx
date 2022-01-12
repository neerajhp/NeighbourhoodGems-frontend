import { Grid, Box } from '@mui/material';
import React from 'react';
import Map from './components/map';
import MapControls from './components/mapControls';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className='App'>
      <div className='container controls'>
        <Grid container height={'100%'}>
          <Grid item xs={3}>
            <Box sx={{ display: 'grid', gap: 2, p: 2 }}>
              <MapControls />
              <SearchBar />
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className='container map'>
        <Map />
      </div>
    </div>
  );
}

export default App;
