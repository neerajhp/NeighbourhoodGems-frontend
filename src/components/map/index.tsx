import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useAppSelector } from "../../hooks";
import { mapConfig } from "./config";
import { MARKERS } from "../markers";
import { Landmark } from "../../api";

//DUMMY DATA
import { dummyData } from "../../res/dummy-data";

const Map = () => {
  //Google Maps Loader
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: mapConfig.API_KEY,
  });

  //Container for landmarks
  const [landmarks, setLandmarks] = useState(null);

  //Get landmarks
  useEffect(() => {
    Landmark.getAll().then((res) => console.log(res));
  }, []);

  //Marker Controller
  const markerControls = useAppSelector((state) => state.markers);

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapConfig.container}
        center={mapConfig.center}
        zoom={17}
        options={mapConfig.options}
      >
        {dummyData.map((landmark) => {
          return (
            markerControls[landmark.type] && (
              <Marker
                icon={{
                  url: MARKERS.filter((item) => {
                    return item.type === landmark.type;
                  })[0].svg,
                  scaledSize: new window.google.maps.Size(32, 32),
                }}
                title={"This is a temporary title"}
                position={landmark.location}
                animation={google.maps.Animation.DROP}
              />
            )
          );
        })}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Did Not Load</div>;
};

export default Map;
