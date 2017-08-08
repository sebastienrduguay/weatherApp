import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'react-native-axios';
import {
  FETCH_FORECAST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAIL
} from '../actions/types';

function* fetchWeatherData(action) {
  console.log('saga');
  const { city, country } = action.payload;
  const API_KEY = 'db46bef43b86d6c356681b8d2c3812e8';
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  try {
      const data = yield call(
        axios.get,
        `${BASE_URL}${city},${country}&APPID=${API_KEY}&name=weatherApp`
      )
      yield put({type: FETCH_FORECAST_SUCCESS, payload: data })
  } catch (e) {
    yield put({type: FETCH_FORECAST_FAIL, message: e.message })
  }
}

export function* fetchForcastSaga() {
  yield take(FETCH_FORECAST, fetchWeatherData);
}
