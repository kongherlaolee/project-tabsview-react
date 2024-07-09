import { ImageComponent, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Library from "../components/licrary";
import Favorites from "../components/Favorites";
import Purchased from "../components/Accounts";
import Homepage from "../components/Homepage";
const Tabbuttom = createMaterialBottomTabNavigator();
const TabbuttomNavigator = () => {
  return (
    <Tabbuttom.Navigator>
      
      <Tabbuttom.Screen name="Homepage" component={Homepage} 
      options={{
        tabBarLabel: 'home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tabbuttom.Screen name="Library" component={Library} 
      options={{
        tabBarLabel: 'Library',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="library" color={color} size={26} />
        ),
      }}
      />
      <Tabbuttom.Screen name="Favortes" component={Favorites}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={26} />
        ),
      }}
      />
      <Tabbuttom.Screen name="Purchased" component={Purchased} 
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>

    </Tabbuttom.Navigator>
  );
};

export default TabbuttomNavigator;

const styles = StyleSheet.create({});