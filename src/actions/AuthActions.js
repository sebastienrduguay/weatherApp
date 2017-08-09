import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT
} from './types';

export const emailChanged = (value) => ({
  type: EMAIL_CHANGED,
  payload: value
});

export const passwordChanged = (value) => ({
    type: PASSWORD_CHANGED,
    payload: value

});

export const authenticate = ({ email, password }) => (
  (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    });
  }
);

const loginUserFail = (dispatch) => {
    dispatch({
      type: AUTH_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_SUCCESS, payload: user
  });
  Actions.weatherSearch({ type: 'reset' });
};

export const logout = () => ({
    type: LOGOUT
});
