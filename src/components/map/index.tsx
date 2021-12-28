import React from 'react';
import { GoogleMap, LoadScript, LoadScriptProps } from '@react-google-maps/api';
import { styles as customStyles } from './styles';

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

const API_KEY: string = process.env.REACT_APP_GOOGLEMAPS_API_KEY as string;

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
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
