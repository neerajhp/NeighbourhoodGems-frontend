import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useAppSelector } from "../../hooks";
import { mapConfig } from "./config";
import { icons } from "../landmark/icons";
import { Landmark } from "../../api";

//DUMMY DATA
import { dummyData } from "../../res/dummy-data";
import { landmarkType } from "../landmark/landmark";
import LandmarkMarker from "../landmark";

const Map = () => {
  //Google Maps Loader
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: mapConfig.API_KEY,
  });

  //Container for landmarks
  const [landmarks, setLandmarks] = useState<landmarkType[]>([]);
  const [landmarksLoaded, setLandmarksLoaded] = useState(false);

  //Get landmarks
  useEffect(() => {
    Landmark.getAll().then((res) => {
      setLandmarks(res);
      setLandmarksLoaded(true);
    });
  }, []);

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapConfig.container}
        center={mapConfig.center}
        zoom={17}
        options={mapConfig.options}
      >
        {landmarksLoaded &&
          landmarks.map((landmark) => {
            return <LandmarkMarker key={landmark.id} {...landmark} />;
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
