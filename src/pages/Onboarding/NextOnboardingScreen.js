import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const NextOnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/icons/compare-prices.png')} // Update this with your actual image path
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Compare Prices <Text style={styles.highlight}>Instantly</Text>
        </Text>
        <Text style={styles.description}>
          Enter your shopping list and get real-time price comparisons from
          nearby stores. Choose the most cost-effective options tailored to your
          needs.
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('FinalOnboardingScreen')} // Update with your next screen's name
        >
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={styles.nextButton}>
            <Image
              source={require('../../../assets/icons/next-icon.png')} // Update with your actual icon path
              style={styles.nextIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
    marginTop: 5, // Adjust to position the image properly
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
    marginTop: -40, // Adjust to reduce gap between image and text
  },
  title: {
    fontSize: 22, // Adjust to match the design
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginTop: 50,
    bottom: 120,
  },
  highlight: {
    color: '#7C9D32',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
    bottom: 120,
    //marginBottom: 30,
    marginTop: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7C9D32',
    marginHorizontal: 5,
  },
  nextButton: {
    width: 50, // Adjusted to match the design
    height: 50, // Adjusted to match the design
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextIcon: {
    width: 20,
    height: 20,
  },
});

export default NextOnboardingScreen;
