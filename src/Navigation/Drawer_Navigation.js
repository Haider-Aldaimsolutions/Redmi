import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Tab_navigation from './Tab_Navigation';
import Logout from '../screens/logout';

const Drawer = createDrawerNavigator();

const Drawer_navigation = () => {

  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Tab" component={Tab_navigation} options={{
        headerShown: false, headerTransparent: false
      }} />
      <Drawer.Screen name="logout" component={Logout} screenOptions={{
        headerShown: false, headerTransparent: false
      }} />

    </Drawer.Navigator>




  )
}

export default Drawer_navigation

const styles = StyleSheet.create({})