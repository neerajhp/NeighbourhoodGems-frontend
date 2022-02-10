import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./config";

/**
 * Redux slice for map state and contorls
 *
 * @author Neeraj Patel
 */
export const mapControlSlice = createSlice({
  name: "mapControl",
  initialState,
  reducers: {
    togglelandmark: (state, action: PayloadAction<string>) => {
      state.landmarks[action.payload] = !state.landmarks[action.payload];
    },
  },
});

/**
 * Generate action creators
 *
 * @author Neeraj Patel
 */
export const { togglelandmark } = mapControlSlice.actions;

export default mapControlSlice.reducer;
