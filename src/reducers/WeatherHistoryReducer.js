import { FETCH_FORECAST_HISTORY } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FORECAST_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
