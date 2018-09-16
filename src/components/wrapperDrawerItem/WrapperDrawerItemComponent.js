import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Left, Icon, Header, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class WrapperDrawerItemComponent extends Component {
  onClickIcon = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    const {
      title = '',
      children,
    } = this.props;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon name="ios-menu" onPress={this.onClickIcon} style={styles.icon} />
          </Left>
          <Body>
            <Title style={styles.title}>{title}</Title>
          </Body>
          <Right />
        </Header>
        {children}
      </Container>);
  }
}

WrapperDrawerItemComponent.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object,
  children: PropTypes.node,
};

export default withNavigation(WrapperDrawerItemComponent);
