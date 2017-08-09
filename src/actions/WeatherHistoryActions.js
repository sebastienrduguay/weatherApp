import firebase from 'firebase';
import {
  FETCH_FORECAST_HISTORY,
  FORECAST_CREATE,
  SAVE_FORECAST_SUCCESS
} from './types';

export const forecastCreate = (data) => {
  console.log(data);
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/forecasts`)
      .push({ data })
      .then(() => {
        dispatch({ type: FORECAST_CREATE });
      });
  };
};
