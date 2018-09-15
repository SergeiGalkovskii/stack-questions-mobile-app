import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const pipeline = applyMiddleware(ReduxThunk);
  return createStore(rootReducer, initialState, pipeline);
};

export default configureStore;
