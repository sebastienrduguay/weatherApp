import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH,
  AUTH_SUCCESS,
  AUTH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH:
      return { ...state, error: action.payload };
    case AUTH_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case AUTH_FAIL:
      return { ...state, error: 'invalid email or password' }
    default:
      return state;
  }
}
