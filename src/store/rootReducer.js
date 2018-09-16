import { combineReducers } from 'redux';
import BaseNavigation from '../router';
import authReducer from './reducers/auth';
import stackReducer from './reducers/stack';

const rootReducer = combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  auth: authReducer,
  stack: stackReducer,
});

export default rootReducer;
