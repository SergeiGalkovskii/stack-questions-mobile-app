import { DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import HomeScreen from "../../screens/home/HomeScreen";
import StackoverflowScreen from "../../screens/stackoverflow/StackoverflowScreen";
import DrawerContentComponent from "./DrawerContentComponent";
import LogOut from "../../screens/logOut/LogOutScreen";
import { themeColor } from "../../assets/styles";

const DrawerNavigatorComponent = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Stackoverflow: {
      screen: StackoverflowScreen
    },
    LogOut: {
      screen: LogOut
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerContentComponent,
    contentOptions: {
      activeTintColor: themeColor
    },
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose"
  }
);

export default DrawerNavigatorComponent;
