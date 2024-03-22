import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
export default function HeaderBar({
    title,
    image
}) {
    return(
        <View style={styles.HeaderContainer}>
            <Image 
            source={{ uri: "https://seekicon.com/free-icon-download/chevron-left-circle_1.png"}}  style={styles.Image}  /> 
            <Text>{title}</Text>
         {image ? (
             <Image
        source={{uri : image }}
        style={styles.Image}
      />
         ) : 
    (
      <View style={styles.Image}></View>
    )
         }
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:0.5
      }, 
      Image: {
        height: 36,
        width: 36,
      },
})