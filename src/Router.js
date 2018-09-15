import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/login/LoginScreen';
import DrawerNavigatorComponent from './components/drawerNavigator/DrawerNavigatorComponent';

const BaseNavigation = StackNavigator({
  Login: { screen: LoginScreen },
  DrawerNavigator: {
    screen: DrawerNavigatorComponent,
    navigationOptions: {
      header: null,
    },
  },
});

export default BaseNavigation;
