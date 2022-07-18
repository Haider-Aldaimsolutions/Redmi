import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/button';
import CustomInput from '../../components/CustomInput';
import SignIn from '../SignIn';
const Forget_password = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const onSignIN = () => {
    navigation.navigate('SignIn')
  };
  const onSignUp = () => {
    navigation.navigate('SignUp')
  };
  return (

    <View style={styles.container}>

      <Text style={{ padding: 20, fontWeight: '600', fontSize: 22 }}>Reset your Password</Text>
      <Text style={{ padding: 20, }}>Username*</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setvalue={setUsername}
        secureTextEntry={false}
      />
      <CustomButton placeholder="Send" onPress={onSignIN} />
      <CustomButton placeholder="Back to Sign in" onPress={onSignIN} type='forget' />

    </View>

  )
}
export default Forget_password
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingTop: "10%",
    height: "100%",
  },
  redmilogo: {
    alignSelf: "center",
  },


})