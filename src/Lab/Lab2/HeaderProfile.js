import { Image, Text, View } from "react-native"

export default function HeaderProfile({
    avt,
    name
}) {
    return(
      <View>
        {avt && name ? 
          <View>
            <Text>Chào ngày mới</Text>
              <Text>{name}</Text>
            <Image
            source={{uri: avt}} style={{height:50, width:50}} />
        : 
            <View>
            <Text>Chào ngày mới</Text>
            <Text>Chưa có tên</Text>
            <Image
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-10-1024.png'}} style={{height:50, width:50}} />
            </View>
         }
      </View>
    )
}