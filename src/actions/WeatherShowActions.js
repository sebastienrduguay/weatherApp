import {
  TEMPERATURES_CHANGED,
  HUMIDITIES_CHANGED,
  PRESSURES_CHANGED,
  LAT_CHANGED,
  LON_CHANGED,
  TICK_VALUES_CHANGED,
  DATA_SELECTED_CHANGED,
  DATA_POINT_CHANGED
} from './types';

export const temperaturesChanged = (data) => {
  return {
    type: TEMPERATURES_CHANGED,
    payload: [ ...data ]
  };
};

export const humiditiesChanged = (data) => {
  return {
    type: HUMIDITIES_CHANGED,
    payload: [ ...data ]
  };
};

export const pressuresChanged = (data) => {
  return {
    type: PRESSURES_CHANGED,
    payload: [ ...data ]
  };
};

export const tickValuesChanged = (data) => {
  return {
    type: TICK_VALUES_CHANGED,
    payload: [ ...data ]
  };
};

export const latChanged = (data) => {
  return {
    type: LAT_CHANGED,
    payload: data
  };
};

export const lonChanged = (data) => {
  return {
    type: LON_CHANGED,
    payload: data
  };
};

export const dataSelectedChanged = (data) => {
  return {
    type: DATA_SELECTED_CHANGED,
    payload: data
  };
};

export const dataPointChanged = (data) => {
  return {
      type: DATA_POINT_CHANGED,
      payload: data
  };
};
