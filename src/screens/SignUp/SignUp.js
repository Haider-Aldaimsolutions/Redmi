import {  Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../../components/button';
import CustomInput from '../../components/CustomInput';
const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [check_password, set_check_Password] = useState('');

  const onSignUp=()=>{
        
        navigation.navigate('SignIn');
  };

const social_login=()=>{
  alert("Social API Not Connected");
};
  return (
    <View>
      <Text style={{ textAlign:"center",paddingTop:"20%",fontSize:25,fontWeight:'bold'}}>Create Account</Text>
      
      <CustomInput 
      placeholder="Username"
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      />

      <CustomInput 
      placeholder="email"
      value={email}
      setvalue={setemail}
      secureTextEntry={false}
      />

      <CustomInput 
      placeholder="password"
      value={password}
      setvalue={setPassword}
      secureTextEntry={True}
      />

      <CustomInput 
      placeholder="repeat password"
      value={check_password}
      setvalue={set_check_Password}
      secureTextEntry={True}
      />
      
      <Text style={{color:"gray",padding:20}}>
      By registering you confirm that you accept our{" "} 
      <Text style={{color:"#f07d20"}}>Terms of Use</Text>{" "} 
      and {" "}
      <Text style={{color:"#f07d20"}}>Privacy Policy</Text>
      </Text>

      <CustomButton placeholder="Register" onPress={onSignUp} />

      <CustomButton placeholder="Sign in with Facebook" onPress={social_login} type='social_login_facebook' />
      <CustomButton placeholder="Sign in with Goolge" onPress={social_login} type='social_login_google' />
      <CustomButton placeholder="Sign in with Apple" onPress={social_login} type='social_login_facebook' />
      

    </View>
    
  )
}
export default SignUp
const styles = StyleSheet.create({})