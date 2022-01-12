// MAP MARKERS ( ./map/index.ts )
// export const MARKERS = {
//   restaurant: {
//     label: 'restaurant',
//     material_icon: '\ue556',
//     svg: require('../res/icons/rest_ico.svg'),
//   },
//   cafe: {
//     label: 'cafe',
//     material_icon: '\ue541',
//     svg: require('../res/icons/cafe_ico.svg'),
//   },
//   bar: {
//     label: 'bar',
//     material_icon: '\ue8df',
//     svg: require('../res/icons/event_ico.svg'),
//   },
//   event: {
//     label: 'event',
//     material_icon: '\ue8df',
//     svg: require('../res/icons/event_ico.svg'),
//   },
// };

export const MARKERS = [
  {
    type: 'restaurant',
    material_icon: '\ue556',
    svg: require('../res/icons/rest_ico.svg'),
  },
  {
    type: 'cafe',
    material_icon: '\ue541',
    svg: require('../res/icons/cafe_ico.svg'),
  },
  {
    type: 'bar',
    material_icon: '\ue8df',
    svg: require('../res/icons/event_ico.svg'),
  },
  {
    type: 'event',
    material_icon: '\ue8df',
    svg: require('../res/icons/event_ico.svg'),
  },
];

// REDUX STATE ( ./mapControl/mapControlSlice.ts)
export interface controlState {
  markers: { restaurant: boolean; cafe: boolean; bar: boolean; event: boolean };
}

export const initialState: controlState = {
  markers: { restaurant: true, cafe: true, bar: true, event: true },
};
