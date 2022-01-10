import { Box } from '@mui/system';
import React from 'react';
import Map from './components/map';
import MapControls from './components/mapControls';

function App() {
  return (
    <div className='App'>
      <div className='container controls'>
        <MapControls />
      </div>
      <div className='container map'>
        <Map />
      </div>
    </div>
  );
}

export default App;
