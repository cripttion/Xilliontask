import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { homeStyles as styles } from './HomeStyle';
import HomeUpperSection from './components/HomeUpperSection';
import StockDetailsCard from './components/StockDetailsCard';
import SwipeButton from './components/SwipeButton';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeUpperSection />
      <View style={styles.content}>
        <Text style={styles.heading}>Today's Recommendations</Text>
        <View style={styles.cardContainer}>
          <ScrollView style={styles.scrollableCard} showsVerticalScrollIndicator={false}>
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
          </ScrollView>
          <Text style={styles.footerText}>
            On executing this basket, buy orders along with stop loss and targets will be placed.
          </Text>
        </View>
  <View style={{marginTop:20}}>

        <SwipeButton />
  </View>
      </View>
    </View>
  );
};

export default Home;
