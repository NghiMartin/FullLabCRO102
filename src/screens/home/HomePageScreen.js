import { View, Text, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import CustomButton from '../../component/CustomButton';
import { removeUser } from '../../store/userSlice';
const HomePageScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.Users.user);

  const handleSignOut = async () => {
    try {

      users.photo && await GoogleSignin.signOut();
      dispatch(removeUser());
      console.log('Revoked access successfully!');
    } catch (error) {
      console.error('Error revoking access:', error);
    }
  }
  return (
    <View style={{
      alignItems: 'center',
      padding: 100
    }}>
      {users.photo ? (
   <>
   <Text>{users.email}</Text>
   <Text>{users.name}</Text>
   <Text>{users.givenName}</Text>

   <Text>{users.phone}</Text>
   <Image
   source={{uri :  users.photo}}
   style={{
    width : 200,
    height: 200,
    borderRadius: 100
   }}
   /></>
      ) : (
        <>
        <Text>{users.email}</Text> 
        <Text>0367460640</Text> 
        </>
      )}
    <CustomButton label='SignOut' onPress={handleSignOut} />

    </View>
  )
}

export default HomePageScreen