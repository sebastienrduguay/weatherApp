import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  CITY_NAME_CHANGED,
  COUNTRY_NAME_CHANGED,
  FETCH_FORECAST_FAIL,
  FETCH_FORECAST_SUCCESS
} from './types';

export const cityNameChanged = (value) => ({
    type: CITY_NAME_CHANGED,
    payload: value
});

export const countryNameChanged = (value) => ({
      type: COUNTRY_NAME_CHANGED,
      payload: value
});

export const fetchForcast = ({ city, country }) => {
  const API_KEY = 'db46bef43b86d6c356681b8d2c3812e8';
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  console.log(`${BASE_URL}${city},${country}&APPID=${API_KEY}`);
  return (dispatch) => {
    axios.get(`${BASE_URL}${city},${country}&APPID=${API_KEY}`)
    .then((response) => {
      console.log(response);

      Actions.weatherShow({ data: response.data, send: true });
    })
    .catch(() => {
      fetchForecastFailed(dispatch);
    }
    );
  };
};

const fetchForecastFailed = (dispatch) => {
  dispatch({
    type: FETCH_FORECAST_FAIL
  });
};

const fetchForcastSuccess = (dispatch) => {
  dispatch({
    type: FETCH_FORECAST_SUCCESS
  });
};
