import { combineReducers } from 'redux';
import WeatherSearchReducer from './WeatherSearchReducer';
import WeatherShowReducer from './WeatherShowReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  weatherSearchForm: WeatherSearchReducer,
  weatherForecast: WeatherShowReducer,
  auth: AuthReducer
});
