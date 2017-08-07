import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH,
  AUTH_SUCCESS,
  AUTH_FAIL
} from './types';

export const emailChanged = (value) => {
  return {
    type: EMAIL_CHANGED,
    payload: value
  };
};

export const passwordChanged = (value) => {
  return {
    type: PASSWORD_CHANGED,
    payload: value
  };
};

export const authenticate = ({ email, password }) => {
  return {
    type: AUTH,
    payload: { email: email, password: password }
  };
};
