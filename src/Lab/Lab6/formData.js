import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useSignupMutation } from '../../store/pokemon-api-slice';

export default function FormData()  {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [signup, { isLoading, isError, error }] = useSignupMutation();

  const handleSubmit = async () => {
    try {
      // Gửi dữ liệu lên máy chủ khi form được submit
      const response =  await signup({
        email: "george1.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
        // name: 'bulbasaur',
        // age: 12,
        // email: 'test@gmail.com',
        // password: '123123123',
        // gender: 'male'
        // username: "nghisoobin123456",
        // password: "123456",
        // email: "soobinnghi@gmail.com123",
        // name: "Nguyen Ba Nghi123",
        // age: 20,
        // available: true,
        // avatar: "http://localhost:3000/uploads/1711001082884-3A9A5462.jpg"
  }).unwrap();
      console.log('Dữ liệu đã được gửi lên máy chủ');
      console.log('RESPONSE',response);
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu lên máy chủ:', error);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View>
      <TextInput
        placeholder="Tên người dùng"
        value={formData.username}
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />
      <Button
        title={isLoading ? 'Đang gửi...' : 'Gửi'}
        onPress={handleSubmit}
        disabled={isLoading}
      />
      {isError && <Text>{error.message}</Text>}
    </View>
  );
};
