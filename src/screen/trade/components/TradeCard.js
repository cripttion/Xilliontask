import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';  // Import Feather icons for better visuals

const TradeCard = ({ trade }) => {
  return (
    <LinearGradient
    colors={['#C426FF99', '#5B3E96']}
    style={styles.card}
    start={{ x: 0, y: 1 }}
    end={{ x: 0.6, y: 0 }}
    locations={[0,0.4]}
  > 
    
      <View style={styles.header}>
        <View style={styles.iconText}>
          <Text style={styles.buyPriceText}>Buy Price: ₹{trade?.buyPrice}</Text>
        </View>

        <View style={styles.iconText}>
          <Feather 
            name={trade?.status === 'Ongoing' ? "clock" : "check-circle"} 
            size={18} 
            color={trade?.status === 'Ongoing' ? '#FFB740' : 'green'} 
          /> 
          <Text 
            style={[styles.ongoingText, { 
              color: trade?.status === 'Ongoing' ? '#FFB740' : 'green' 
            }]}
          >
            {trade?.status}
          </Text>
        </View>

        <View style={styles.iconText}>
          <Feather name="trending-up" size={18} color="#5BFF7F" /> 
          <Text style={styles.percentage}>+{trade?.profitPercentage}%</Text>
        </View>
      </View>

    
      <Text style={styles.stockName}>{trade?.stockName}</Text>

    
      <View style={styles.footer}>
        <View style={styles.iconText}>
          <Text style={styles.investedText}>Invested: ₹{trade?.investedAmount}</Text>
        </View>

        <View style={styles.iconText}>
          <Feather name="box" size={18} color="#B6B6B6" />
          <Text style={styles.quantityText}>Qty {trade?.quantity}</Text>
        </View>
      </View>

     
      <View style={styles.iconText}>
        <Feather name="arrow-up-right" size={18} color="#5BFF7F" /> 
        <Text style={styles.profitText}>+₹{trade?.profitAmount}</Text>
      </View>
    </LinearGradient>
  );
};

export default TradeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2E1C47', // Dark background for the card
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5, // Shadow effect for the card
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyPriceText: {
    color: '#B6B6B6', // Gray color for buy price
    fontSize: 14,
    marginLeft: 1,
  },
  ongoingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  percentage: {
    color: '#5BFF7F', // Green color for percentage
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  stockName: {
    color: '#FFFFFF', // White color for stock name
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  investedText: {
    color: '#B6B6B6', // Gray color for invested amount
    fontSize: 14,
    
  },
  quantityText: {
    color: '#B6B6B6', // Gray color for quantity
    fontSize: 14,
    marginLeft: 5,
  },
  profitText: {
    color: '#5BFF7F', // Green color for profit
    fontSize: 18,
    fontWeight: 'bold',
  },
});
