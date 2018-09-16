import { AUTH_SUCCESS, AUTH_ERROR, LOG_OUT_SUCCESS, LOG_OUT_ERROR } from '../constants/auth';

const initState = {
  userName: '',
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: return {
      ...state, userName: action.payload,
    };
    case AUTH_ERROR: return {
      ...state, error: action.payload,
    };
    case LOG_OUT_SUCCESS: return {
      ...state, userName: '',
    };
    case LOG_OUT_ERROR: return {
      ...state, error: 'Something went wrong',
    };
    default: return state;
  }
};

export default authReducer;
