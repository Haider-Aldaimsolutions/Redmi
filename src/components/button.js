import React from 'react';
import { View, Text,StyleSheet,Pressable } from 'react-native';

export default function Button({placeholder} ) {
    


  return (
    <View style={styles.container}>
    <Pressable 
    style={styles.button} 
    >
    <Text style={{color:"white",width:"100%"}} >{placeholder}</Text> 
    </Pressable>
  </View>
  );
}


const styles = StyleSheet.create({
    container:{
      width:"100%",
      padding:10,
      textAlign:'center',
  
    },
  
      button:{
      width:"100%",
      borderRadius:15,
      paddingVertical:8,
      backgroundColor:"#323aa8",
      color:"white",
      borderWidth:1,
      borderColor:"gray",
      
    }
  })
