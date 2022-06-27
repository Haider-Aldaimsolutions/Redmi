import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  return (
    <>
     <Navigation  />  
      <StatusBar style="auto" />
    </>
  );
}


