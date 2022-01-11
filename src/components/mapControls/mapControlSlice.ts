import { createSlice } from '@reduxjs/toolkit';

interface controlState {
  markers: { restaurant: boolean; cafe: boolean; bar: boolean; event: boolean };
}

const initialState: controlState = {
  markers: { restaurant: true, cafe: true, bar: true, event: true },
};

export const mapControlSlice = createSlice({
  name: 'mapControl',
  initialState,
  reducers: {
    toggleRestaurantMarkers: (state) => {
      state.markers.restaurant = !state.markers.restaurant;
    },
    toggleCafeMarkers: (state) => {
      state.markers.cafe = !state.markers.cafe;
    },
    toggleBarMarkers: (state) => {
      state.markers.bar = !state.markers.bar;
    },
    toggleEventMarkers: (state) => {
      state.markers.event = !state.markers.event;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleRestaurantMarkers,
  toggleCafeMarkers,
  toggleBarMarkers,
  toggleEventMarkers,
} = mapControlSlice.actions;

export default mapControlSlice.reducer;
