import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import ReduxNavigation from './ReduxNavigation';

// Styles
import styles from './styles/RootContaierStyle';

// class RootContainer extends Component {
//   render () {
//     return (
//       <View style={styles.applicationView}>
//         <StatusBar barStyle='light-content' />
//         <ReduxNavigation />
//       </View>
//     );
//   }
// }
const RootContainer = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ReduxNavigation />
    </SafeAreaView>
  );
};
// wraps dispatch to create nicer functions to call within our component

export default RootContainer;
