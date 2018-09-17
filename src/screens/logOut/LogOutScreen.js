import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Text, Col } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { logOutAction } from '../../store/actions';
import WrapperDrawerItemComponent from '../../components/wrapperDrawerItem/WrapperDrawerItemComponent';
import styles from './styles';

const screenTitle = 'Log Out';

@connect(
  null,
  dispatch => ({
    onLogOut: () => dispatch(logOutAction())
  })
)
class LogOutScreen extends Component {
  static navigationOptions = {
    title: screenTitle,
  };

  onClickButton = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
    this.props.onLogOut();
  }

  render() {
    return (
      <WrapperDrawerItemComponent title={screenTitle}>
        <Grid style={styles.container}>
          <Text style={styles.text}>Good Bye</Text>
          <Col style={styles.buttonCol}>
            <Button style={styles.button} onPress={this.onClickButton}>
              <Text>Log Out</Text>
            </Button>
          </Col>
        </Grid>
      </WrapperDrawerItemComponent>
    );
  }
}

LogOutScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default withNavigation(LogOutScreen);
