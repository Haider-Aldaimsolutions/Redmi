import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomButton from '../components/button';
import { auth } from '../../config';
import { useNavigation } from '@react-navigation/native';
const Screen1 = () => {
    const navigation=useNavigation();
    const Drawer=createDrawerNavigator();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn")
      })
      .catch(error => alert(error.message))
  }
  return (
      <View style={styles.container}>
      <Text style={styles.headertext}>Dashboard</Text>
      <CustomButton placeholder="Sign Out" onPress={handleSignOut}  />

    </View>
        
  )
}

export default Screen1
const styles = StyleSheet.create({
  container:{  
  paddingTop:"20%",
  backgroundColor:'white',
  flex:1
},
  headertext:{
    fontSize:25,
    textAlign:"center",
  }
})