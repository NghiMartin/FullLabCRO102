import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CustomButton from '../../component/CustomButton';

import { COLORS, FONTFAMILY, FONTSIZE } from '../../assets';
import InputField from '../../component/InputField';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { AppImages } from '../../assets';
import { auth, database } from '../../config/FirebaseConfig';
import { setUser } from '../../store/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checkError, setError] = useState({});
  const handleError = (error, input) => {
    setError((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleRegister = async () => {
    try {
      if (!auth) {
        console.error("Authentication is not initialized.");
        return;
      }
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userId = response.user.uid;
      userId && dispatch(setUser({
          userId : userId,
          fullname: fullname,
          email: email,
          phone: phone,
      }));
      // await AsyncStorage.setItem('auth',JSON.stringify({
      //   userId: userId,
      //   fullname: fullname,
      //   email: email,
      //   phone: phone
      // }));
      await set(ref(database, `users/${userId}`), {
        fullname: fullname,
        email: email,
        phone: phone,
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          handleError('Email đã được đăng ký', 'email');
          break;
        case 'auth/invalid-email':
          handleError('Email không hợp lệ', 'email');
          break;
        default:
          console.error(error);
          break;
      }
    }
  };


  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <StatusBar hidden />

        <View style={styles.container}>
          <Image
            style={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              position: 'absolute',
              top: width - 600
            }}
            source={AppImages.background_plant}
          />
          <View
            style={{
              padding: 20,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                color: COLORS.primaryGreenHex,
                fontSize: FONTSIZE.size_28,
                fontFamily: FONTFAMILY.poppins_bold,
                position: 'absolute',
                width: '100%'
              }}>
              Đăng Ký
            </Text>
            <View
              style={{
                paddingTop: 30
              }}
            >
              <InputField
                placeholder="Full name"
                onChangeText={setFullName}

              />
              <InputField
                placeholder="Email"
                onChangeText={setEmail}
                error={checkError?.email}
              />
              <InputField
                placeholder="Phone"
                onChangeText={setPhone}
              />
              <InputField
                inputType={'password'}
                placeholder="Password"
                password={true}
                onChangeText={setPassword}
              />

            </View>
            <Text style={{
              marginTop: 10,
              textAlign: 'center',
              color: COLORS.GRAY,
              fontFamily: FONTFAMILY.poppins_medium
            }}>Để đăng ký tài khoản, bạn đồng ý
              <Text style={{
                textDecorationLine: 'underline',
                color: COLORS.primaryGreenHex,
                fontFamily: FONTFAMILY.poppins_bold,
              }}>
                {` `} Terms &  Conditions {'\n'}
              </Text>  and
              <Text style={{
                color: COLORS.primaryGreenHex,
                textDecorationLine: 'underline',
                fontFamily: FONTFAMILY.poppins_bold,

              }}>
                {` `} Privacy Policy
              </Text>
            </Text>
            <CustomButton label="SignUp" onPress={handleRegister} />
            <View style={{ width: width - 40, alignItems: 'center' }}>
              <View
                style={{
                  marginTop: 10,
                  borderColor: COLORS.primaryGreenHex,
                  borderWidth: 1,
                  width: width - 40,
                }}></View>
              <Text
                style={{
                  position: 'absolute',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  width: 50,
                }}>
                Hoặc
              </Text>
            </View>
            <View
              style={{
                width: 200,
                margin: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={AppImages.facebook_icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={AppImages.google_icon}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_medium,
                }}>
                Bạn đã có tài khoản?
              </Text>
              <TouchableOpacity onPress={() => {navigation.navigate('LoginScreen')}}>
                <Text
                  style={{
                    color: COLORS.primaryGreenHex,
                    fontFamily: FONTFAMILY.poppins_medium,
                    marginLeft: 5,
                  }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>

  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: height,
    paddingTop: width - 200
  },
});
