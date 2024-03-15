import React, { useEffect, useRef } from "react";
import { Animated, Button, View } from "react-native";

export default function Bai1_AniBasic() {
    const animatedValue = useRef(new Animated.ValueXY({
      x: 100,
      y: 100,
    })).current;

    
   const handleCick=  () => {
            Animated.timing(animatedValue, {
                toValue:{
                    x: 200,
                    y: 200,
                   },
                duration: 2000,        
                useNativeDriver: true
            }).start();
        }
    return (
        <View>
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
        >
        </Animated.View>
       <View style={{width:100, margin:20}}>
       <Button onPress={handleCick} title="Click me" />
       </View>
        </View>
       
    );
}
