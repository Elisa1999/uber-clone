import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from "../screens/SearchResults";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
        <Stack.Navigator
         screenOptions = {{
            headerShown:false
         }}
         > 
            <Stack.Screen name = {'Homepage'} component = {HomeScreen} />
            <Stack.Screen name = {'DestinationSearch'} component = {DestinationSearch} />
            <Stack.Screen name = {'SearchResults'} component = {SearchResults} />
        </Stack.Navigator>
  );
};

export default HomeNavigator;