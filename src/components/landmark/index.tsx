import React from "react";
import { Marker } from "@react-google-maps/api";
import { useAppSelector } from "../../hooks";
import { icons } from "./icons";
import { landmarkType } from "./landmark";

/**
 * Map marker component
 * TODO: Consider loading each component with api call
 *
 * @param data
 * landmarkType object recieved from data source
 *
 * @author Neeraj Patel
 */
const LandmarkMarker = (data: landmarkType) => {
  //landmark Controller
  const controls = useAppSelector((state) => state.landmarks);

  //Set Map Coordinates
  const coords = { lat: data.lat, lng: data.lng };

  console.log(data);

  return (
    controls[data.type] && (
      <Marker
        icon={{
          url: icons.filter((icon) => {
            return icon.type === data.type;
          })[0].svg,
          scaledSize: new window.google.maps.Size(32, 32),
        }}
        title={"This is a temporary title"}
        position={coords}
        animation={google.maps.Animation.DROP}
      />
    )
  );
};

export default LandmarkMarker;
