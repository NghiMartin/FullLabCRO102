import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HeaderProfile({ user }) {
    return (
        <View>
            {user?.avt && user?.name ? (
                <View style={styles.container}>
                    <Image source={{ uri: user?.avt }} style={{ height: 90, width: 90, marginRight:10 }} />
                   <View>
                   <Text>Chào ngày mới</Text>
                    <Text>{user?.name}</Text>
                  </View>
                </View>
            ) : (
              <View style={styles.container}>
                     <Image
                        source={{
                            uri: 'https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-10-1024.png',
                        }}
                        style={{ height: 90, width: 90 }}
                    />
                    <View>
                    <Text>Chào ngày mới</Text>
                    <Text>Chưa có tên</Text>   
                </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding: 30,
    alignContent: 'center',
    alignItems: 'center'

  }
})