import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './AppNavigator/tabNavigator';
import TabbuttomNavigator from './AppNavigator/TabbuttomNavigator ';
const initialLayout = { width: Dimensions.get('window').width };



const App = () => {

  return (
    
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default App;
