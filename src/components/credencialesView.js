'use strict'

import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Alert,
  StyleSheet,
  TextInput
} from 'react-native';

export default class credencialesView extends Component{
  render(){
    return(
      <ImageBackground source={require('../img/giphy_credenciales.gif')} style={styles.container}>
        <View>
          <TextInput style={styles.inputTextLogin} placeholder="email" placeholderTextColor="white"/>
          <TextInput style={styles.inputTextPassword} secureTextEntry={true} placeholder="password" placeholderTextColor="white"/>
          <TouchableHighlight onPress={(this.onTab.bind(this))} style={styles.boton}>
            <Text style={styles.textBoton}>Continuar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }

  onTab(){
    this.props.navigation.navigate('tab')
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
    marginTop: 10,
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
  },
  inputTextLogin:{
    width: 300,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20,
    marginTop: 500,
    borderBottomColor: '#FEFEFE',
    borderBottomWidth: 1,
    color: 'white',
    fontWeight: 'bold'
  },
  inputTextPassword:{
    width: 300,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20,
    marginTop: 10,
    borderBottomColor: '#FEFEFE',
    borderBottomWidth: 1,
    color: 'white',
    fontWeight: 'bold'
  }
})

module.exports = credencialesView;
