'use strict'

import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';



export default class loginView extends Component{
  render(){
    return(
      <ImageBackground source={require('../img/photo_login.jpg')} style={{width: '100%', height: '100%'}} style={styles.container}>
        <View>
          <Text style={styles.title}>Happy Bebes</Text>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textBoton}>Log in</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }

  onLogin(){
    this.props.navigation.navigate('credenciales')
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  boton:{
    width: 300,
    height: 40,
    backgroundColor: '#7AA1F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 550,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 0
  },
  textBoton:{
    color: 'white',
    fontWeight: 'bold'
  },
  title:{
    marginTop: 100,
    fontSize :25,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

module.exports = loginView;
