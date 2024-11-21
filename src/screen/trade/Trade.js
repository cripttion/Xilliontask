import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, PanResponder } from 'react-native';
import TradeCard from './components/TradeCard';
import Icon from 'react-native-vector-icons/Feather'; // Correct import for ChevronLeft
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
];

const Trade = () => {
  const navigation = useNavigation();

  // Create a reference for pan responder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Activate responder on touch start
      onPanResponderMove: (e, gestureState) => {
        // Track horizontal movement to detect swipe
        if (gestureState.dx < 100) { // Negative dx means left swipe
          navigation.navigate('Home'); // Navigate to Home when swipe left
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        // Optionally reset or handle actions after the gesture ends
      },
    })
  ).current;

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Pressable onPress={handleBackPress} style={styles.backIcon}>
        <Icon name='chevron-left' size={30} color="#fff" />
      </Pressable>
      <Text style={styles.title}>Trade History</Text>

      <ScrollView contentContainerStyle={styles.tradeList} showsVerticalScrollIndicator={false}>
        {tradeData.map((trade, index) => (
          <TradeCard key={index} trade={trade} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201831',
    paddingHorizontal: 15, // Padding to ensure content doesn't touch edges
  },
  backIcon: {
    position: 'absolute', // Fix the back icon at the top-left corner
    top: 20, // Adjust this depending on your design
    left: 15,
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20, // Space between title and cards
  },
  tradeList: {
    flexGrow: 1, // Allow content to grow if there are many cards
    paddingBottom: 20, // Padding at the bottom to avoid cut-off of cards
  },
});
