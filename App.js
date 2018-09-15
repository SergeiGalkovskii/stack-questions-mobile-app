import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import BaseNavigation from './src/router';

const Roboto = require('native-base/Fonts/Roboto.ttf');
const RobotoMedium = require('native-base/Fonts/Roboto_medium.ttf');
const Ionicons = require('native-base/Fonts/Ionicons.ttf');

const store = configureStore({});

class App extends Component {
  state = {
    isLoading: true,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
      Ionicons,
    });
    this.setState((state, props) => ({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <BaseNavigation />
      </Provider>
    );
  }
}

export default App;
