import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE } from '../assets'; 
import LinearGradient from 'react-native-linear-gradient';
export default function CustomButton({label, onPress}) {
  return (
    <LinearGradient
    colors={[COLORS.primaryGreenHex, COLORS.greenHex]}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.5, y: 1.0 }}
    style={styles.containerButton}
    >
  <TouchableOpacity onPress={onPress}>
      <Text
        style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
    </LinearGradient>
  
  );
}
const styles = StyleSheet.create({
  containerButton: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: 200
  },
  text:{
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
    color: '#fff',
  }
})