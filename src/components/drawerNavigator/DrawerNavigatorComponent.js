import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../../screens/home/HomeScreen';
import StackoverflowScreen from '../../screens/stackoverflow/StackoverflowScreen';
import DrawerContentComponent from './DrawerContentComponent';
import LogOut from '../../screens/logOut/LogOutScreen';

const DrawerNavigatorComponent = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Stackoverflow: {
      screen: StackoverflowScreen,
    },
    LogOut: {
      screen: LogOut,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerContentComponent,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
  },
);

export default DrawerNavigatorComponent;
