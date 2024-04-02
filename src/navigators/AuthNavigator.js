import React from 'react';
import { LoginScreen, SignUpScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return <Stack.Navigator screenOptions={{
    headerShown: false
}}>
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
    {/* <Stack.Screen name='ForgotPassWord' component={ForgotPassWord}/>
    <Stack.Screen name='Verification' component={Verification}/> */}
</Stack.Navigator>
}

export default AuthNavigator;