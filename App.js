import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    
    <Provider store={store}>
      <HomeScreen />
    </Provider>
    
    
  );
}
