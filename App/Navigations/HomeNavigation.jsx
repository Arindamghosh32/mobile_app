import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Screens/HomeScreen/Home';
import Businesscategory from '../Screens/Businessbycategory/Businesscategory';
import Businessdetails from '../Screens/BusinessDetailsScreen/Businessdetails';


const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="business-list" component={Businesscategory}></Stack.Screen>
        <Stack.Screen name="business-details" component={Businessdetails}/>
    </Stack.Navigator>
  )
}