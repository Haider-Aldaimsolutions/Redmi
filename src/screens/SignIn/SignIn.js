import {  Alert, Pressable, StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../../components/button';
import CustomInput  from '../../components/CustomInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Forget_password from '../Forget_password';
import SignUp from '../SignUp';

const SignIn = ({navigation}) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const onSignIN=()=>{
      
      navigation.navigate('Home')
      
  };
  const onSignUp=()=>{
      navigation.navigate('SignUp')
};
const onForgetPassword=()=>{
  navigation.navigate('ForgetPassword')
};
const social_login=()=>{
  alert("Social API Not Connected");
};

  return (
    
    <ScrollView style={styles.container}>
 
      <Image style={styles.redmilogo} source={require('../../../assets/redmi_logo.png')}/>
      
      <CustomInput 
      placeholder="Username"
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      image = {'../../../assets/user_logo.png'}
      />
      <CustomInput 
      placeholder="password"
      value={password}
      setvalue={setPassword}
      secureTextEntry={true}
      image = {'../../../assets/password_logo.png'}
      />
      <CustomButton placeholder="Sign In" onPress={onSignIN} />
      <CustomButton placeholder="Forgot Password?" onPress={onForgetPassword} type='forget' />
      
      <CustomButton placeholder="Sign in with Facebook" onPress={social_login} type='social_login_facebook' />
      <CustomButton placeholder="Sign in with Goolge" onPress={social_login} type='social_login_google' />
      <CustomButton placeholder="Sign in with Apple" onPress={social_login} type='social_login_facebook' />
      
      <CustomButton placeholder="Don't have an account? Create one. " onPress={onSignUp} type='forget' />
    
    
    </ScrollView>
  )
}
export default SignIn
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffffff",
    height:"100%",
  },
  redmilogo:{
    alignSelf:"center",
    width:100,
    height:100,
    resizeMode:'contain',
    
  },


})