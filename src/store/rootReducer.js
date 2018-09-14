import { combineReducers } from 'redux';
import BaseNavigation from '../router';

export const rootReducer = combineReducers({
    navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state)
});
