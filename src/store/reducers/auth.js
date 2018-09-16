import { AUTH_SUCCESS, AUTH_ERROR } from '../constants/auth';

const initState = {
  userName: null,
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
    default: return state;
  }
};

export default authReducer;
