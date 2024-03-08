import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export default function Bai1_AniBasic() {
    const animatedValue = useRef(new Animated.ValueXY({
      x: 100,
      y: 100,
    })).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue:{
                x: 200,
                y: 200,
               },
            duration: 2000,        
            useNativeDriver: false
        }).start();
    },[animatedValue]);
    
    return (
        <Animated.View
            style={{
                width: 100,
                height: 100,
                marginTop: 100,
                transform: [
                    { translateX: animatedValue.x },
                    { translateY: animatedValue.y }
                ],
                backgroundColor: '#19b5fe'
            }}
        />
    );
}
