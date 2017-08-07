import {
  TEMPERATURES_CHANGED,
  HUMIDITIES_CHANGED,
  PRESSURES_CHANGED,
  LAT_CHANGED,
  LON_CHANGED,
  TICK_VALUES_CHANGED,
  DATA_SELECTED_CHANGED,
  DATA_POINT_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    humidities: [],
    temperatures: [],
    pressures: [],
    lat: 0,
    lon: 0,
    tickValues: [],
    dataSelected: 0,
    dataPointSelected: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMPERATURES_CHANGED:
      return { ...state, temperatures: action.payload };
    case HUMIDITIES_CHANGED:
      return { ...state, humidities: action.payload };
    case PRESSURES_CHANGED:
      return { ...state, pressures: action.payload };
    case LAT_CHANGED:
      return { ...state, lat: action.payload };
    case LON_CHANGED:
      return { ...state, lon: action.payload };
    case TICK_VALUES_CHANGED:
      return { ...state, tickValues: action.payload };
    case DATA_SELECTED_CHANGED:
      return { ...state, dataSelected: action.payload };
    case DATA_POINT_CHANGED:
      return { ...state, dataPointSelected: action.payload };
    default:
      return state;
  }
};
