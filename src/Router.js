import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Platform } from 'react-native';
import LoginScreen from './screens/login/LoginScreen';
import DrawerNavigatorComponent from './components/drawerNavigator/DrawerNavigatorComponent';

const BaseNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen },
    DrawerNavigator: {
      screen: DrawerNavigatorComponent,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
  },
);

export default BaseNavigation;
