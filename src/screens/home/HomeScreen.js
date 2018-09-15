import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import WrapperNavigatorItemComponent from '../../components/wrapperNavigatorItem/WrapperNavigatorItemComponent';
import styles from './styles';

const screenTitle = 'Home';

class HomeScreen extends Component {
  state = {
    userName: 'Steve',
  };

  render() {
    const textContent = `Hello, ${this.state.userName}!`;
    return (
      <WrapperNavigatorItemComponent title={screenTitle}>
        <Container style={styles.container}>
          <Text style={styles.text}>{textContent}</Text>
        </Container>
      </WrapperNavigatorItemComponent >
    );
  }
}

export default HomeScreen;
