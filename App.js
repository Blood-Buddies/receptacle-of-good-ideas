import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import Quiz from './components/Quiz'
import Nav from './components/Nav'
import Link from './components/Link'
import Results from './components/Results'
import { Text, View } from 'react-native';

export default class App extends React. Component {
  render() {
    return (
      <AppStackNavigator/>
      // <View>
      //   <Nav />
      //   <Text style = {{fontWeight:"bold", fontSize:20, color:'red'}}>Find Your Best Much For Your Bloody Days!</Text>

      // </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Nav: { screen: Nav},
  Quiz: { screen: Quiz },
  Results: { screen: Results },
  Link: { screen: Link }
});
