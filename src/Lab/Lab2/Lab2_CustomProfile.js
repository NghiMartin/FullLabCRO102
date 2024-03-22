import { Alert, Button, View } from "react-native";
import HeaderProfile from "./HeaderProfile";
import Body from "./Body";
import Footer from "./Footer";
import { useState } from "react";

export default function Lab2_CustomProfile() {
    const [footerColor, setFooterColor] = useState('white');
    const [valueInput1, setValueInput1] = useState();
    const [valueInput2, setValueInput2] = useState();
    const [user, setUser] = useState();
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const handleColorChange = () => {
        const newColor = generateRandomColor();
        setFooterColor(newColor);
    };

  const updateInfor = () => {
    if(!valueInput1 || !valueInput2) {
        Alert.alert('Nhập đủ thông tin');
    }else setUser({name: valueInput1, avt: valueInput2});

  }
    return(
        <View style={{height:'100%', position:'relative'}}>
            <HeaderProfile user={user} />
            <Body onChangeText1={setValueInput1} onChangeText2={setValueInput2} onPress1={updateInfor} onPress2={handleColorChange}  />
            <Footer footerColor={footerColor}  />
        </View>
    )
}