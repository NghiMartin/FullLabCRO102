import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, multiply, resetCounter } from '../../store/counterSlice';
import CustomButton from '../../component/CustomButton';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../assets';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.Counter.counter);

  const handleMultiply = () => {
    dispatch(multiply(2)); 
  };

  const handleIncrement = () => {
    dispatch(incrementCounter(1)); 
  };

  const handleDecrement = () => {
    dispatch(decrementCounter()); 
  };

  const handleReset = () => {
    dispatch(resetCounter()); 

  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={
        {
          color: COLORS.red,
          fontFamily: FONTFAMILY.poppins_bold,
          fontWeight: 'bold',
          fontSize: FONTSIZE.size_30
        }
      }>
        Counter Value: {counterValue}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <CustomButton label="Multiply by 2" onPress={handleMultiply} />
        <CustomButton label="Increment" onPress={handleIncrement} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <CustomButton label="Decrement" onPress={handleDecrement} />
        <CustomButton label="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

export default CounterScreen;


