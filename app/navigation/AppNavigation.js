import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import IntroScreen from '../screens/intro/IntroScreen';
const AuthStack = createStackNavigator(
  {
    IntroScreen: { screen: IntroScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'IntroScreen',
    navigationOptions: {
      //   headerStyle: styles.header
    }
  }
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    AuthStack
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AuthStack',
    navigationOptions: {
      //   headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
