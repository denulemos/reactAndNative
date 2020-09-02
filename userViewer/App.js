/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator, createAppContainer} from '@react-navigation/native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//const axios = require('axios');

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      user:null
    };

    //BIND
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount(){
    this.getUserData();
  }

  getUserData(){
    axios.get('https://randomuser.me/api/').then((response) => {
      if (response && response.data && response.data.results){
        if(response.data.results.length > 0){
          this.setState({
            user: response.data.results[0]
          });
        }
      }
    }).catch(function (error){
      console.log(error);
    });
  }

  render(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {
        this.state.user !== null && <Text>{this.state.user.name.title}</Text>
      }

      <TouchableOpacity
      onPress={
        () =>{
          console.log(this.props.navigation);
          this.props.navigation.navigate('Settings')
        }
      }></TouchableOpacity>

      <Text>Go to Settings</Text>
   
    </View>
  ) }
}

class SettingsScreen extends React.Component{
  render(){
    
  }
}
export default App;
