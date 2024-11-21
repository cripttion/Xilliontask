import React from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const HomeUpperSection = () => {
  return (
    <LinearGradient
      colors={['#A524F7', '#391EDC']}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.7 }}
      locations={[-0.9, 0.9]}
    >
      <View style={styles.innerContainer}>
        {/* Profile Icon */}
        <Icon2 name="person-outline" size={24} color="#fff" />
        
        {/* App Title */}
        <Text style={styles.text}>XILLION</Text>
        
        {/* Notification Icon */}
        <Icon2 name="notifications-outline" size={24} color="#fff" />
      </View>

      <View style={styles.content}>
        {/* Current Portfolio Section */}
        <Text style={styles.portfolioText}>Current Portfolio</Text>
        <View style={styles.portfolioRow}>
          <Text style={styles.amount}>₹12,78,653</Text>
          <Pressable>
            <Icon name="refresh-ccw" color="#fff" size={22} />
          </Pressable>
        </View>
        
        {/* Unused Funds Section */}
        <Text style={[styles.portfolioText, { fontSize: 14, marginTop: 10 }]}>Unused Funds</Text>
        <Text style={[styles.amount, { fontSize: 14, marginTop: 5 }]}>₹1,18,261</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.endButton}>
        <Pressable style={styles.button}>
          <Icon2 name="download-outline" color="#fff" size={24} />
          <Text style={styles.buttonText}>Portfolio</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialIcon name="question-answer" color="#fff" size={24} />
          <Text style={styles.buttonText}>Ask AI</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default HomeUpperSection;

const styles = StyleSheet.create({
  container: {
    height: '30%', // Adjust height for the upper section
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  portfolioText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  amount: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  portfolioRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 20,
    marginTop: 10,
    marginLeft:30
  },
  endButton: {
    position: 'absolute',
    bottom: -35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  button: {
    flex: 1, // Ensures equal width for the buttons
    maxWidth: width * 0.45, // Limits the button width to 45% of the screen
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
