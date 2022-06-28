import {  Alert, Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../../components/button';
import CustomInput  from '../../components/CustomInput';


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
    <View style={styles.container}>
 
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
    </View>
    
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