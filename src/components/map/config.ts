import { styles as customStyles } from './styles';

export const mapConfig = {
  API_KEY: process.env.REACT_APP_GOOGLEMAPS_API_KEY as string,
  container: {
    width: '100vw',
    height: '100vh',
  },
  center: {
    lat: -37.825385,
    lng: 144.963814,
  },
  options: {
    mapTypeControl: false,
    styles: customStyles,
  },
};
