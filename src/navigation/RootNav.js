import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/Home';
import Trade from '../screen/trade/Trade';

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
       <Stack.Screen name="Trade" component={Trade} />
      </Stack.Navigator>
  )
}

export default RootNav

