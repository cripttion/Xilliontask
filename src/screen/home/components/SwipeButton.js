import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS, interpolateColor } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const SwipeButton = () => {
  const navigation = useNavigation();
  const translateX = useSharedValue(0);

  const swipeGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = Math.max(0, e.translationX); // Ensure no negative swipe
    })
    .onEnd(() => {
      if (translateX.value > 150) {
        // Use runOnJS to move navigation out of Reanimated thread
        runOnJS(navigation.navigate)('Trade'); // Replace with your screen name
      }
      translateX.value = withSpring(0); // Reset the button
    });

  const containerStyle = useAnimatedStyle(() => {
    // Interpolate the translateX value to change the background color of the container
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, 150], // From 0 to 150 swipe distance
      ['#8C8C8C', '#4CAF50'] // From gray to green
    );

    return {
      backgroundColor, // Apply dynamic background color to the container
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.swipeButton, animatedStyle]}>
          <Icon name='flash-outline' size={40} color={'#000'} />
        </Animated.View>
      </GestureDetector>
      <Text style={{ color: '#000', fontSize: 20, textAlign: 'center', marginLeft: 70 }}>EXECUTE</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: 'center',
    // padding: 10,
  },
  swipeButton: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5B3E96',
    alignSelf: 'flex-start',
  },
});

export default SwipeButton;
