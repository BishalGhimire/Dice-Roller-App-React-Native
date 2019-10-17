import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , Alert} from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      uri: require('./src/images/dice1.png')
    }
  }
  
  playButtonPressed =()=>{
    Alert.alert('App is working')
  }
  
  render(){
  return (
    <View style={styles.container}>
      <Image 
      source ={ this.state.uri}
      />
      <TouchableOpacity 
      onPress ={this.playButtonPressed}
      >
        <Text style = {styles.buttonStyle}
        >Play</Text>
      </TouchableOpacity>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    marginTop: 35,
    fontSize: 20,
    color: '#FFF',
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: '#FFF'

  }
});
