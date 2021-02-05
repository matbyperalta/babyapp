/**
 * @format
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/loginView';
import Credenciales from './src/components/credencialesView';
import Tabs from './src/components/tabsView';

const Stack = createStackNavigator();

export default class BabyApp extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
          <Stack.Screen options={{headerShown: true}, { title: '' } } name="credenciales" component={Credenciales} />
          <Stack.Screen options={{headerShown: false}} name="tab" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

AppRegistry.registerComponent('BabyApp', () => BabyApp);
