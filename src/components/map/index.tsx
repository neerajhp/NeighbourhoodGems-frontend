import React from 'react';
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import { mapConfig } from './config';
import { Marker } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: mapConfig.API_KEY,
  });

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that

    return (
      <GoogleMap
        mapContainerStyle={mapConfig.container}
        center={mapConfig.center}
        zoom={17}
        options={mapConfig.options}
      >
        <Marker
          label={'Corner Co 1903'}
          title={'The marker`s title will appear as a tooltip.'}
          position={{ lat: -37.8262494, lng: 144.9600383 }}
          animation={google.maps.Animation.DROP}
        />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Did Not Load</div>;
};

export default Map;
