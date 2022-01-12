import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../markers';

export const mapControlSlice = createSlice({
  name: 'mapControl',
  initialState,
  reducers: {
    toggleMarker: (state, action: PayloadAction<string>) => {
      state.markers[action.payload] = !state.markers[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMarker } = mapControlSlice.actions;

export default mapControlSlice.reducer;
