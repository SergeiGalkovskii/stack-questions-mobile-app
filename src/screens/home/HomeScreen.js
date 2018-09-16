import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import WrapperDrawerItemComponent from '../../components/wrapperDrawerItem/WrapperDrawerItemComponent';
import styles from './styles';

const screenTitle = 'Home';

@connect(
  state => ({
    userName: state.auth.userName,
  }))
class HomeScreen extends Component {
  render() {
    const {
      userName,
    } = this.props;
    const textContent = `Hello, ${userName}!`;
    return (
      <WrapperDrawerItemComponent title={screenTitle}>
        <Container style={styles.container}>
          <Text style={styles.text}>{textContent}</Text>
        </Container>
      </WrapperDrawerItemComponent >
    );
  }
}

HomeScreen.propTypes = {
  userName: PropTypes.string,
};

export default HomeScreen;
