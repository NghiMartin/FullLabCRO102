import React from 'react';
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

export default function App (){
  return (
    <Provider store={store}>
      <FormData />
    </Provider>
  );
};
