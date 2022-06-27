import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forget_password from '../screens/Forget_password';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
  

const Navigation = () => {
  
  return (

  <NavigationContainer>
      <Stack.Navigator   screenOptions={{    headerShown: false  }}>
    
        <Stack.Screen name="SignIn" component={SignIn}  />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={Forget_password} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
      )
}

export default Navigation

const styles = StyleSheet.create({})