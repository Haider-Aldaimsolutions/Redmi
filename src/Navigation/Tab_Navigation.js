import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Drawer_navigation from './Drawer_Navigation';
const Tab_navigation = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Feed" component={Screen1} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={Screen2} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default Tab_navigation

const styles = StyleSheet.create({})