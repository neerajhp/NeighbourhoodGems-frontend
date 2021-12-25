import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { styles as customStyles } from './styles.ts';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -37.825385,
  lng: 144.963814,
};

const mapOptions = {
  mapTypeControl: false,
  styles: customStyles,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={mapOptions}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
