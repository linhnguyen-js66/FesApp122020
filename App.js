import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HomeScreen from './src/screen/00-HomeScreen'
import CommandBookScreen from './src/screen/06-CommandBook-screen'
import {AppNavigator} from './src/navigation/AppNavigator'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
         <AppNavigator />
      </SafeAreaView>
    </>
  );
};
export default App