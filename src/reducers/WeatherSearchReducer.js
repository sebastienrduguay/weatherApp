import {
  CITY_NAME_CHANGED,
  COUNTRY_NAME_CHANGED,
  FETCH_FORECAST,
  FETCH_FORECAST_FAIL,
  FETCH_FORECAST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  city: '',
  country: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CITY_NAME_CHANGED:
    return { ...state, city: action.payload };
  case COUNTRY_NAME_CHANGED:
    return { ...state, country: action.payload };
  case FETCH_FORECAST:
    return { ...state, error: '' };
  case FETCH_FORECAST_FAIL:
    return { ...state, error: 'No Data Found' };
  case FETCH_FORECAST_SUCCESS:
    return { ...state, ...INITIAL_STATE };
  default:
    return state;
  }
};
