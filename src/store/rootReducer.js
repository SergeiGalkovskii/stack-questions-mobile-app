import { combineReducers } from 'redux';
import BaseNavigation from '../router';

const rootReducer = combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
});

export default rootReducer;
