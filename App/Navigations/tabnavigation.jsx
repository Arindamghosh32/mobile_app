import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator, tabBarActiveTintColor } from '@react-navigation/bottom-tabs';

import Home from './../Screens/HomeScreen/Home';
import Profile from './../Screens/ProfileScreen/Profile';
import Booking from './../Screens/BookingScreen/Booking';
import Login from './../Screens/LoginScreen/Login';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} options={{headerShown:false,
          tabBarActiveTintColor:'purple',
          tabBarLabel:()=>{
            return <Text style={{color:'black',fontSize:12,marginTop:-7}}>Login</Text>
          },
          tabBarIcon:()=>{
            return <Entypo name="login" size={24} color="black" />
          }
          
        }}></Tab.Screen>
        <Tab.Screen name='Home' component={HomeNavigation} options={{headerShown:false,
          tabBarLabel:()=>{
            return <Text style={{color:'black',fontSize:12,marginTop:-7}}>Home</Text>
          },
          tabBarIcon:()=>{
            return <Entypo name="home" size={24} color="black" />
          }
        }}></Tab.Screen>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown:false,
          tabBarLabel:()=>{
            return <Text style={{color:'black',fontSize:12,marginTop:-7}}>Profile</Text>
          },
          tabBarIcon:()=>{
            return<FontAwesome name="users" size={24} color="black" />
          }
        }}></Tab.Screen>
        <Tab.Screen name='Booking' component={Booking} options={{headerShown:false,
          tabBarLabel:()=>{
            return <Text style={{color:'black',fontSize:12,marginTop:-7}}>Booking</Text>
          },
          tabBarIcon:()=>{
            return <Entypo name="bookmark" size={24} color="black" />
          }
        }}></Tab.Screen>
        
    </Tab.Navigator>
  )
}