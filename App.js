import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Bai1_Custom, Bai2_SectionView, Bai3_CustomTextInput } from './src/Lab/Lab1';
import { Bai1_AniBasic, Bai2_AniFlatList, MomoHeader } from './src/Lab/Lab3';
import { Lab2_CustomProfile } from './src/Lab/Lab2';
import { ImageCropPickerComponent, TrackPlayer } from './src/Lab/ImgPicker';
import TrackPlayerApp from './src/Lab/ImgPicker/TrackPlayerApp';
import ReducersQuery from './src/Lab/Lab6/ReducersQuery';
import CounterScreen from './src/Lab/Lab6/CounterScreen';
import FormData from './src/Lab/Lab6/formData';
import AppRouters from './src/navigators/AppRouters';
import { NavigationContainer } from '@react-navigation/native';
import { PermissionsAndroid, Platform, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import MainImageUpload from './src/Lab/Lab5';
import ImageUploader from './src/Lab/Lab5/TestReduxPersist/ImageUploader';
export default function App (){
  const checkApplicationPermission = async () => {
    if(Platform.OS === 'android') {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  console.log('Authorization status(authStatus):', authStatus);
  return(
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || 
    authStatus === messaging.AuthorizationStatus.PROVISIONAL 
  )
}
const getToken = async () => {
  const token = await  messaging().getToken();
  console.log('FCM token',token);
}
// useEffect( () => {
//   checkApplicationPermission();
//   if(requestUserPermission) {
//     getToken();
//   }
// },[])
  return (
    <MainImageUpload />
  );
};
