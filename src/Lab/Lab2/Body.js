import { View } from "react-native";
import InputField from "../../component/InputField";

export default function Body (
    {
        onChangeText1,
        onChangeText2
    }
) {
    return(
   <View>
     <InputField  label="Nhập tên mới" onChangeText={onChangeText1} />
    <InputField  label="Dán địa chỉ avatar mới" onChangeText={onChangeText2} />
   </View>
    )
}