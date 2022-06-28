import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../screen1';
import Screen2 from '../screen2';
const Tab = createBottomTabNavigator();
const Home = () => {
  const Drawer=createDrawerNavigator();
  return (
    <>
      
      <Tab.Navigator 
      // initialRouteName='screen2'
      >
      <Tab.Screen name="screen1" component={Screen1} />
      <Tab.Screen name="screen2" component={Screen2} />
    </Tab.Navigator>

    </>
        
  )
}

export default Home

const styles = StyleSheet.create({})