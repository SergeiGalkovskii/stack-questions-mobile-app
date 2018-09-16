import React, { Component } from 'react';
import { Container, Content, Header, Icon, Left, Text } from 'native-base';
import { LinearGradient } from 'expo';
import { DrawerItems } from 'react-navigation';
import styles from './styles';

const gradientColors = ['#008cc0', '#00aff0', '#2dc6ff'];

class DrawerContentComponent extends Component {
  state = {
    headerHeight: 0,
  };

  onLayout = (height) => {
    this.setState((state, props) => ({ headerHeight: height }));
  }

  render() {
    return (
      <Container>
        <Header style={styles.header} onLayout={(e) => this.onLayout(e.nativeEvent.layout.height)}>
          <LinearGradient
            colors={gradientColors}
            style={[{ height: this.state.headerHeight }, styles.gradient]}
          />
          <Left style={styles.leftCont}>
            <Icon type="FontAwesome" name="stack-overflow" onPress={this.onClickIcon} style={styles.stackIcon} />
            <Content>
              <Text style={styles.text}>Questions</Text>
            </Content>
          </Left>
        </Header>
        <Content>
          <DrawerItems {...this.props} />
        </Content>
      </Container>
    );
  }
}

export default DrawerContentComponent;
