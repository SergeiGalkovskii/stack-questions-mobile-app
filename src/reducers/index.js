import { combineReducers } from 'redux';
import BaseNavigation from '../router';

export default combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
});
