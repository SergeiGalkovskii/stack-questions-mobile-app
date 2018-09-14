import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import BaseNavigation from './router';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <BaseNavigation />
  </Provider>
);

export default App;
