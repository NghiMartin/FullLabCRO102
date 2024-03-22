import { Text, TouchableOpacity } from "react-native";

export default function CustomButton ({
    onPress,
    styles,
    title
}) {
    return(
        <TouchableOpacity
        onPress={onPress}
        style={
            [
                styles,
                {
                    alignItems:'center',
                    width: 200,
                    padding: 20,
                    backgroundColor: '#41C9E2',
                    borderRadius:20,
                    marginVertical: 5,
                    marginHorizontal: 5
                }
            ]
        }
        >
            <Text
            style={{
                color: 'white',
            }}
            >{title}
            </Text>
        </TouchableOpacity>
        )
}