import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.com',
  password: 'test123',
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH:
      return { ...state, error: '' };
    case AUTH_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case AUTH_FAIL:
      return { ...state, error: 'Authentication Failed', password: '' }
    case LOGOUT:
      return { ...state, ...INITIAL_STATE }
    default:
      return state;
  }
};
