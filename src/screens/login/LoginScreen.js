import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const iconSize = 25;
const iconColor = '#000';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <Text>Welcome</Text>
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 2 }}>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="user" size={iconSize} color={iconColor} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ text })}
                placeholder="username"
                value={this.state.text}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="lock" size={iconSize} color={iconColor} />
              </View>
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={text => this.setState({ text })}
                placeholder="password"
                value={this.state.text}
              />
            </View>
          </View>

          <View style={{ flex: 3 }}>
            <Button
              title="Log In"
              onPress={() => this.props.navigation.navigate('DrawerNavigator')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
