/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator , createAppContainer} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/navigator/stack';

//const axios = require('axios');

class App extends Component{
  render(){
    //return <Login/>
    return <AppStack/>;
  }
}
export default App;
