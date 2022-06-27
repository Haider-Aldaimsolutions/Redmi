import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
const SignUp = () => {

  //function
  const onSignup=()=>{
    console.log("sign Up");
  }
  return (
    
    <View style={styles.container}>
      <Pressable 
      style={styles.button} 
      onPress={onSignup}
      >
        <Text style={{color:"white"}} >SignUp</Text> 
      </Pressable>
      
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    width:"100%",
    padding:10,
    textAlign:'center',

  },

  button:{
    borderRadius:15,
    paddingVertical:8,
    backgroundColor:"#323aa8",
    color:"white",
    borderWidth:1,
    borderColor:"gray",
    
  }
})