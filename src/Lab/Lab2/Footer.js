import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Footer({ footerColor, onColorChange }) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const fullDate = `${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`;

    return (
        <View style={{ padding: 30, backgroundColor: footerColor, position:'absolute', bottom:0, right:0, width:'100%' }}>
            <Text>Thời gian bạn cập nhật thông tin: {fullDate}</Text>
        </View>
    );
}
