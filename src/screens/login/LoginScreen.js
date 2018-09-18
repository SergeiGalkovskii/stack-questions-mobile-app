import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Icon, Input, Grid, Row, Col, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { initAuthAction, submitAuthAction } from '../../store/actions';
import styles from './styles';

const hardCodedPassword = 'test1234';

@connect(
  state => ({
    userName: state.auth.userName,
  }),
  dispatch => ({
    onInit: () => dispatch(initAuthAction()),
    onSubmit: data => dispatch(submitAuthAction(data))
  })
)
class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    userName: '',
    password: '',
    isWrongUserName: false,
    isWrongPassword: false,
  };

  componentDidMount() {
    this.props.onInit();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userName !== this.props.userName && this.props.userName) {
      this.redirectToDrawerScreen();
    }
  }

  onSubmit = () => {
    if (this.checkUserName(this.state.userName) && this.checkPassword(this.state.password)) {
      this.setState({ isWrongUserName: true, isWrongPassword: true });
    } else if (this.checkUserName(this.state.userName)) {
      this.setState({ isWrongUserName: true, isWrongPassword: false });
    } else if (this.checkPassword(this.state.password)) {
      this.setState({ isWrongUserName: false, isWrongPassword: true });
    } else {
      this.setState({ isWrongUserName: false, isWrongPassword: false });
      this.props.onSubmit({
        userName: this.state.userName,
        password: this.state.password,
      });
      this.redirectToDrawerScreen();
    }
  }

  onChangeUserName = (val) => {
    this.setState({ userName: val });
  }

  onChangePassword = (val) => {
    this.setState({ password: val });
  }

  redirectToDrawerScreen = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'DrawerNavigator' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  checkUserName = userNameValue => userNameValue.length <= 3;

  checkPassword = passwordValue => passwordValue !== hardCodedPassword;

  render() {
    return (
      <Container>
        <Grid style={styles.grid}>
          <Row size={1}>
            <Col style={styles.welcomeCol}>
              <Text style={styles.welcomeStr}>Welcome</Text>
            </Col>
          </Row>
          <Row size={2} style={styles.inputRow}>
            <Col style={styles.inputCol}>
              <Item error={this.state.isWrongUserName ? true : false} style={styles.inputUserName}>
                <Icon name="person" style={styles.icon} />
                <Input placeholder="username" value={this.state.userName} onChangeText={this.onChangeUserName} />
                {this.state.isWrongUserName && (<Icon name="close-circle" />)}
              </Item>
              <Item error={this.state.isWrongPassword ? true : false}>
                <Icon name="lock" style={styles.icon} />
                <Input placeholder="password" secureTextEntry value={this.state.password} onChangeText={this.onChangePassword} />
                {this.state.isWrongPassword && (<Icon name="close-circle" />)}
              </Item>
            </Col>
          </Row>
          <Row size={2}>
            <Col style={styles.submitButtonCol}>
              <Button style={styles.submitButton} onPress={this.onSubmit}>
                <Text>Log In</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  onInit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
};

export default LoginScreen;
