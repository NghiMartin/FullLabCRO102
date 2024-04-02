import { useAsyncStorage, } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';
import MainNavigator from './MainNavigator';
import { SplashScreen } from '../screens';
import AuthNavigator from './AuthNavigator';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const user = useSelector((state) => state.Users.user);
  console.log('main',user);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


 
  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) :  user ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
}

export default AppRouters