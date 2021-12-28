import React from 'react';
import { GoogleMap, LoadScript, LoadScriptProps } from '@react-google-maps/api';
import { styles as customStyles } from './styles';
import { mapConfig } from './config';

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
//API KEY
const API_KEY: string = process.env.REACT_APP_GOOGLEMAPS_API_KEY as string;

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={mapConfig.API_KEY}>
      <GoogleMap
        mapContainerStyle={mapConfig.container}
        center={mapConfig.center}
        zoom={17}
        options={mapConfig.options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
