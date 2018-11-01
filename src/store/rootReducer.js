import { combineReducers } from 'redux';
import BaseNavigation from '../router';
import authReducer from './reducers/auth';
import stackReducer from './reducers/stack';
import wordsReducer from './reducers/words';

const rootReducer = combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  auth: authReducer,
  stack: stackReducer,
  words: wordsReducer
});

export default rootReducer;
