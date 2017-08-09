import firebase from 'firebase';
import {
  FETCH_FORECAST_HISTORY,
  FORECAST_CREATE
} from './types';

export const forecastCreate = (data) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/forecasts`)
      .push({ data })
      .then(() => {
        dispatch({ type: FORECAST_CREATE });
      });
  };
};

export const weatherHistoryFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/forecasts`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_FORECAST_HISTORY, payload: snapshot.val() });
      });
  };
};
