import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
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

export const weatherHistoryDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/forecasts/${uid}`)
      .remove()
      .then(() => {
        Actions.weatherHistory({ type: 'reset' });
      });
  };
};
