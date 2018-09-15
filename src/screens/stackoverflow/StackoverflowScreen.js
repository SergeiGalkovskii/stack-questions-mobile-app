import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import WrapperNavigatorItemComponent from '../../components/wrapperNavigatorItem/WrapperNavigatorItemComponent';

class StackoverflowScreen extends Component {
  render() {
    return (
      <WrapperNavigatorItemComponent title='StackOverFlow'>
        <Content>
          <Text>Stack</Text>
        </Content>
      </WrapperNavigatorItemComponent>
    );
  }
}

export default StackoverflowScreen;
