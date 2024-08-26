import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/LOGO.png')} // Update with your splash logo image path
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 300, // Adjust the width of the logo as needed
    height: 300, // Adjust the height of the logo as needed
    resizeMode: 'contain', // Ensures the logo maintains its aspect ratio
  },
});

export default SplashScreen;
