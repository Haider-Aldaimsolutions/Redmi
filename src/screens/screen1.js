import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logout from './logout';
const Screen1 = () => {
    const Drawer=createDrawerNavigator();
  return (
      <>
      <Text style={{ textAlign:"center",paddingTop:"20%",fontSize:25,backgroundColor:'red',flex:1}}>Screen1</Text>
    
    
    </>
        
  )
}

export default Screen1
const styles = StyleSheet.create({})