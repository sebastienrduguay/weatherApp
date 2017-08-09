import { combineReducers } from 'redux';
import WeatherSearchReducer from './WeatherSearchReducer';
import WeatherShowReducer from './WeatherShowReducer';
import AuthReducer from './AuthReducer';
import WeatherHistoryReducer from './WeatherHistoryReducer';

export default combineReducers({
  weatherSearchForm: WeatherSearchReducer,
  weatherForecast: WeatherShowReducer,
  auth: AuthReducer,
  weatherHistory: WeatherHistoryReducer
});
