import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201831', // Background for the screen
  },
  content: {
    // flex: 1,
    // paddingHorizontal: 16,
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign:'center'
  },
  cardContainer: {
    zIndex:100,
    maxHeight:370,
    backgroundColor: '#585165', // #B1B1B1 with 60% opacity
    borderRadius: 20,
    paddingVertical:10
  },
  scrollableCard: {
    zIndex:1,

  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginHorizontal:30,
    marginTop:20
  },
});
