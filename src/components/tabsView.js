'use strict'

import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Fotos = require('./dashboardImageView');
const Gift = require('./dashboardGiftView');

const Tab = createBottomTabNavigator();

export default class tabsView extends Component{
  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Happy Baby</Text>
          <Avatar
            rounded={true}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        <Tab.Navigator>
          <Tab.Screen name="Fotos" component={Fotos}
            //options={{
              //tabBarLabel: 'Home',
              //tabBarIcon: ({ color, size }) => (
                  //<MaterialCommunityIcons name="home" color={color} size={size} />
                //)
              //}}
              />
          <Tab.Screen name="Gift" component={Gift}
            //options={{
              //tabBarLabel: 'Home',
              //tabBarIcon: ({ color, size }) => (
                //  <MaterialCommunityIcons name="home" color={color} size={size} />
                //)
              //}}
          />
        </Tab.Navigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    marginTop: 50,
    marginBottom: 0,
    fontSize :25,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

module.export = tabsView;
