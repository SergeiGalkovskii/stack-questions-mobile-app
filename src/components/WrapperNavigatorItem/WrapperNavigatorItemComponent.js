import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Left, Icon, Header, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

class WrapperNavigatorItemComponent extends Component {
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
          <Header>
            <Left>
              <Icon name="ios-menu" onPress={this.onClickIcon} />
            </Left>
            <Body>
              <Title>{title}</Title>
            </Body>
            <Right />
          </Header>
          {children}
        </Container>);
    }
}

WrapperNavigatorItemComponent.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.func,
  children: PropTypes.node,
};

export default withNavigation(WrapperNavigatorItemComponent);
