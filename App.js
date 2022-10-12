/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import  {StatusBar} from 'react-native';
import Router from './src/navigaion/Root';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Reaact$Node = () => {
  
  useEffect( ()=> {
    Geolocation.requestAuthorization(); // request permission for ios
  }, []);
 
  return (
    <>
    <StatusBar barStyle = 'dark-content' />
    <Router />
    </>
  );
};



export default App;
