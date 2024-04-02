import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomePageScreen } from '../screens';

const TabNavigators = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name = "HomePageScreen" component={HomePageScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigators;