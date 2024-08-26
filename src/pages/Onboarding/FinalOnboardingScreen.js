import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const FinalOnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/icons/smart-shopping.png')} // Update this with your actual image path
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Smart <Text style={styles.highlight}>Shopping Made Simple</Text>
        </Text>
        <Text style={styles.description}>
          Manage your shopping list, receive price drop alerts, and explore
          store reviews. Enjoy convenient ordering and delivery options right at
          your fingertips.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')} // Navigate to the SignIn screen
      >
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0, // Adjust to position the image properly
  },
  image: {
    width: '100%', // Full width for the image
    height: '60%', // Adjust height to match the design
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -60, // Adjust to reduce gap between image and text
  },
  title: {
    fontSize: 22, // Adjust to match the design
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -77,
  },
  highlight: {
    color: '#7C9D32',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
    marginBottom: 50,
    // marginTop:0
  },
  startButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, // Adjust to add space at the bottom
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinalOnboardingScreen;
