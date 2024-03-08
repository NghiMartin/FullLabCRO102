import { Text, View } from "react-native";

export default function Footer() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const fullDate = `${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    return(
        <View style={{padding: 30}}>
            <Text>Thời gian bạn cập nhật thông tin: {fullDate}</Text>
        </View>
    )
}
