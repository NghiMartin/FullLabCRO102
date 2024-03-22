import { View } from "react-native";
import HeaderBar from "../../component/HeaderBar";
import InputField from "../../component/InputField";
import { useState } from "react";
import Footer from "../Lab2/Footer";

export default function Bai1_Custom() {
  const [username, setUsername] = useState('');

  return(
    <View>
    <HeaderBar title={"HeaderBar"} image={'https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-10-1024.png'}/>
    <HeaderBar title={"Trang chủ"} />
    <HeaderBar />
    </View>
  )
}