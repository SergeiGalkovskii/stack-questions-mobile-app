import React from 'react';
import { Container, Content, Header } from 'native-base';
import { DrawerItems } from 'react-navigation';

const DrawerContentComponent = props => (
  <Container>
    <Header />
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>);

export default DrawerContentComponent;
