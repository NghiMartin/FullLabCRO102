import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputField from "../../component/InputField";

export default function Body (
    {
        onChangeText1,
        onChangeText2,
        onPress1,
        onPress2
    }
) {
    return(
   <View style={{padding:30}}>
     <InputField  label="Nhập tên mới" onChangeText={onChangeText1} />
    <InputField  label="Dán địa chỉ avatar mới" onChangeText={onChangeText2} />
    <View style={styles.containerButton}>

    <TouchableOpacity 
    style={styles.button} 
    onPress={onPress1} 
    >
        <Text 
        style={{
          color: '#fff',
        }}>Cập nhật thông tin</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.button} 
    onPress={onPress2} 
    >
    <Text 
        style={{
          color: '#fff',
        }}>Đổi màu</Text>
    </TouchableOpacity>
    </View>
   </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#59D5E0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30,
        width:200,
        alignItems:'center'
    }
})