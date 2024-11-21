import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNav from './src/navigation/RootNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
    </GestureHandlerRootView>

  )
}

export default App

const styles = StyleSheet.create({})