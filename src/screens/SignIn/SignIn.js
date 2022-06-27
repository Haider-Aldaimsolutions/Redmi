import {  Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/button';

const SignIn = () => {
  
  const onSignIN=()=>{
      console.warn("Sign In");
  };
  return (
    <View>
      <Text style={{ textAlign:"center",paddingTop:"20%",fontSize:25,}}>SIGN IN PAGE</Text>
      <Button placeholder="Sign In" onPress={onSignIN} />
    </View>
    
  )
}
export default SignIn
const styles = StyleSheet.create({})