import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { mapConfig } from './config';
import { markers } from './markers';

//DUMMY DATA
import { dummyData } from '../../res/dummy-data';

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
        {dummyData.map((landmark) => (
          <Marker
            icon={{
              url: markers[landmark.type].svg,
              scaledSize: new window.google.maps.Size(32, 32),
            }}
            title={'This is a temporary title'}
            position={landmark.location}
            animation={google.maps.Animation.DROP}
          />
        ))}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Did Not Load</div>;
};

export default Map;
