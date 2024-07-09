import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import location from '../components/location';
import SecondScreen from '../components/SecondScreen';
import Aircraft from '../components/Aircraf';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';

import TabbuttomNavigator from './TabbuttomNavigator ';



const Tab =createMaterialTopTabNavigator();


const TabNavigator = () => {
  return (
    
      <Tab.Navigator >
        <Tab.Screen name='home' component={TabbuttomNavigator}
          
          options={{
            tabBarLabel : 'Home', 
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name='Aircraft'
          component={Aircraft}
          
          options={{
            tabBarLabel: 'Aircraft',
            tabBarIcon: () => <Entypo name="aircraft" size={24} color="black" />,
          }}
        />
          <Tab.Screen 
          name='FirstScreen'
          component={location}
          options={{
            tabBarLabel: 'location',
            tabBarIcon: () => <AntDesign name="enviroment" size={24} color="black" />,
          }}
          />
          
          <Tab.Screen
          name='SecondScreen'
          component={SecondScreen}
          options={{
            tabBarLabel: 'add location',
            tabBarIcon: () => <Ionicons name="person-add" size={24} color="black" />,
          }}
        />
          


      </Tab.Navigator>
    

  )
}

export default TabNavigator

const styles = StyleSheet.create({

    tabBarLabel: {
      fontFamily: 'Phetsarath-OT',
      fontSize: 12,
    },
  
})
