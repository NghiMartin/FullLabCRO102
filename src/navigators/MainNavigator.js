import React from 'react';
import TabNavigators from './TabNavigators';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "MainNavigator" component={TabNavigators}/>
    </Stack.Navigator>
  )
}

export default MainNavigator;