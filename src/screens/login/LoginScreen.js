import React, { Component } from 'react';
import { Container, Item, Icon, Input, Grid, Row, Col, Text, Button } from 'native-base';
import styles from './styles';

const hardCodedPassword = 'test1234';

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

  onSubmit = () => {
    if (this.checkUserName(this.state.userName) && this.checkPassword(this.state.password)) {
      this.setState(state => ({ ...state, isWrongUserName: true, isWrongPassword: true }));
    } else if (this.checkUserName(this.state.userName)) {
      this.setState(state => ({ ...state, isWrongUserName: true, isWrongPassword: false }));
    } else if (this.checkPassword(this.state.password)) {
      this.setState(state => ({ ...state, isWrongUserName: false, isWrongPassword: true }));
    } else {
      this.setState(state => ({ ...state, isWrongUserName: false, isWrongPassword: false }));
    }
  }

  onChangeUserName = (val) => {
    this.setState(state => ({ ...state, userName: val }));
  }

  onChangePassword = (val) => {
    this.setState(state => ({ ...state, password: val }));
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
          <Row size={1} >
            <Col style={styles.inputCol}>
              <Item error={this.state.isWrongUserName ? true : false}>
                <Icon name="person" />
                <Input placeholder="username" value={this.state.userName} onChangeText={this.onChangeUserName} />
                {this.state.isWrongUserName && (<Icon name="close-circle" />)}
              </Item>
              <Item error={this.state.isWrongPassword ? true : false}>
                <Icon name="lock" />
                <Input placeholder="password" secureTextEntry value={this.state.password} onChangeText={this.onChangePassword} />
                {this.state.isWrongPassword && (<Icon name="close-circle" />)}
              </Item>
            </Col>
          </Row>
          <Row size={1}>
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

export default LoginScreen;