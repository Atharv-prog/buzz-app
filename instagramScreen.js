import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component() {
    render{
    return (
<View style={StyleSheet.container}>
    <Text style={styles.textins}>INSTAGRAM</Text>
</View>
    );
  }

  const styles=stylesheet.create({
    container:{
        flex:1,
        backgroundColor:white
    }
   textins:{
        color:blue
        
    }
})
