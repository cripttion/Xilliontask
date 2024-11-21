import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/Home';

const Stack = createNativeStackNavigator();

const RootNav = () => {
  return (
    <Stack.Navigator 
      screenOptions={
        {
           headerShown:false
        }
      }
    >
       <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  )
}

export default RootNav

