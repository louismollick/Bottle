import { Animated } from 'react-native';

const SCALE = {
  // this defines the terms of our scaling animation. 
  getScaleTransformationStyle(animated: Animated.Value, startSize: number = 1, endSize: number = 0.99) : Animated.Animated {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [startSize, endSize],
    });
    return {
      transform: [
        { scale: interpolation },
      ],
    };
  },
  // This defines animation behavior we expext onPressIn
  pressInAnimation(animated: Animated.Value, duration: number = 150) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  },
  // This defines animatiom behavior we expect onPressOut
  pressOutAnimation(animated: Animated.Value, duration: number = 150) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  },
};

export default SCALE;