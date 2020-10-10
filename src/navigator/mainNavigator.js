import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings135946Navigator from '../features/Settings135946/navigator';
import Settings135929Navigator from '../features/Settings135929/navigator';
import BlankScreen18135926Navigator from '../features/BlankScreen18135926/navigator';
import Settings135894Navigator from '../features/Settings135894/navigator';
import Settings135877Navigator from '../features/Settings135877/navigator';
import Settings135811Navigator from '../features/Settings135811/navigator';
import BlankScreen0135748Navigator from '../features/BlankScreen0135748/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings135946: { screen: Settings135946Navigator },
Settings135929: { screen: Settings135929Navigator },
BlankScreen18135926: { screen: BlankScreen18135926Navigator },
Settings135894: { screen: Settings135894Navigator },
Settings135877: { screen: Settings135877Navigator },
Settings135811: { screen: Settings135811Navigator },
BlankScreen0135748: { screen: BlankScreen0135748Navigator },

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
