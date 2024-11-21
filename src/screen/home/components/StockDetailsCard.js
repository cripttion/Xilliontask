import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const StockDetailsCard = () => {
  return (
    <LinearGradient
      colors={['#C426FF99', '#5B3E96']}
      style={styles.card}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.6, y: 0 }}
      locations={[0,0.4]}
    >
      {/* Stock Name */}
     <View style={styles.header}>
            <Text style={styles.companyName}>ASHOKA</Text>
            <Text style={styles.percentage}>+10%</Text>
     </View>
     <View style={styles.footer}>
           <View style={styles.content}>
            <Text style={styles.contentTilte}>Buy</Text>
            <Text style={styles.amount}>₹460-470</Text>
            </View> 

            <View style={styles.content}>
            <Text style={styles.contentTilte}>Stop Loss</Text>
            <Text style={styles.amount}>₹350</Text>
            </View> 

            <View style={styles.content}>
            <Text style={styles.contentTilte}>Target</Text>
            <Text style={styles.amount}>₹852</Text>
            </View> 
            
     </View>
    </LinearGradient>
  );
};

export default StockDetailsCard;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    
    alignSelf: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal:15,
    marginVertical: 5,
    
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
companyName:{
    fontSize:18,
    color:'#fff',
    
},
percentage:{
    fontSize:18,
    color:'green'
},
footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // marginHorizontal:20
    marginTop:5
},
content:{
    alignItems:'center'
},
contentTilte:{
    fontSize:14,
    color:'#fff'
},
amount:{
    fontSize:14,
    fontWeight:'bold',
    color:'#fff'
}
  
});
