import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4139222Navigator from '../features/BlankScreen4139222/navigator';
import BlankScreen3139221Navigator from '../features/BlankScreen3139221/navigator';
import BlankScreen2139220Navigator from '../features/BlankScreen2139220/navigator';
import BlankScreen1139219Navigator from '../features/BlankScreen1139219/navigator';
import BlankScreen0139180Navigator from '../features/BlankScreen0139180/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4139222: { screen: BlankScreen4139222Navigator },
BlankScreen3139221: { screen: BlankScreen3139221Navigator },
BlankScreen2139220: { screen: BlankScreen2139220Navigator },
BlankScreen1139219: { screen: BlankScreen1139219Navigator },
BlankScreen0139180: { screen: BlankScreen0139180Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
