import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  PanResponder,
  Animated,
} from 'react-native';
import TradeCard from './components/TradeCard';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const tradeData = [
  {
    stockName: 'TATAPOWER',
    buyPrice: 100,
    investedAmount: 30247.55,
    quantity: 100,
    status: 'Ongoing',
    profitPercentage: 3.8,
    profitAmount: 4000,
  },
  {
    stockName: 'RELIANCE',
    buyPrice: 1200,
    investedAmount: 50000,
    quantity: 50,
    status: 'Completed',
    profitPercentage: 5.1,
    profitAmount: 2550,
  },
  {
    stockName: 'INFY',
    buyPrice: 1500,
    investedAmount: 75000,
    quantity: 50,
    status: 'Ongoing',
    profitPercentage: 2.3,
    profitAmount: 1725,
  },
  {
    stockName: 'TCS',
    buyPrice: 3300,
    investedAmount: 66000,
    quantity: 20,
    status: 'Ongoing',
    profitPercentage: 1.5,
    profitAmount: 990,
  },
  {
    stockName: 'TCS',
    buyPrice: 3300,
    investedAmount: 66000,
    quantity: 20,
    status: 'Ongoing',
    profitPercentage: 1.5,
    profitAmount: 990,
  },
  {
    stockName: 'TCS',
    buyPrice: 3300,
    investedAmount: 66000,
    quantity: 20,
    status: 'Ongoing',
    profitPercentage: 1.5,
    profitAmount: 990,
  },
];

const Trade = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  // Define PanResponder
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Start tracking only horizontal swipes
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
    },
    onPanResponderMove: (evt, gestureState) => {
      // Update the position during the gesture
      pan.setValue({ x: gestureState.dx, y: 0 });
    },
    onPanResponderRelease: (evt, gestureState) => {
      // Detect swipe to the left
      // console.log("the gesture state is ",gestureState.dx);
      if (gestureState.dx > 100.00) {

        navigation.navigate('Home');
      }
      // Reset position after swipe
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.swipeContainer,
          {
            transform: [{ translateX: pan.x }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Pressable onPress={handleBackPress} style={styles.backIcon}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Trade History</Text>

        <ScrollView
          contentContainerStyle={styles.tradeList}
          showsVerticalScrollIndicator={false}
        >
          {tradeData.map((trade, index) => (
            <TradeCard key={index} trade={trade} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201831',
    paddingHorizontal: 10,
  },
  swipeContainer: {
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 1,
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  
});
