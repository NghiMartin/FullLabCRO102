import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { height: wHeight } = Dimensions.get('window');
const height = wHeight;

const VegaScrollItem = ({
  y,
  index,
  distanceBetweenItem,
  item,
}) => {
  const [cardHeight, setCardHeight] = useState(0);

  const position = Animated.subtract(index * cardHeight, y);
  const isDisappearing = -cardHeight;
  const isTop = 0;
  const isBottom = height - cardHeight;
  const isAppearing = height;

  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + index * cardHeight],
      outputRange: [0, -index * cardHeight],
      extrapolateRight: 'clamp',
    })
  );

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.85, 1, 1, 1],
    extrapolate: 'clamp',
  });

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.1, 1, 1, 1], // Giảm opacity khi vuốt lên
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        {
          marginVertical: distanceBetweenItem,
          alignSelf: 'center',
          opacity: opacity,
        },
        { transform: [{ translateY }, { scale }] },
      ]}
      key={index}
    >
      <View
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout;
          setCardHeight(height + distanceBetweenItem * 2);
        }}
      >
        {item}
      </View>
    </Animated.View>
  );
};

export default VegaScrollItem;
