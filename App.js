/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Todos from './app/screens/todos';
import Movies from './app/screens/movie' ; 
import Store from './app/store';
import  Tabs  from './app/screens/router'
import { TabNavigator , TabBarBottom } from 'react-navigation' 
import { Icon } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <Provider store={Store}> 
        <Tabs />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
