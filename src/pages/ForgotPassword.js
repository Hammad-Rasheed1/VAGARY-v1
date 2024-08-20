import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('C:/Projects/ReactNative/vagary/src/utls/back-icon.png')} // Update with your actual back icon path
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        We will send an OTP to your registered email address.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/email-icon.png')} // Update with your actual email icon path
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Johndoe@gmail.com"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.sendButtonContainer}
        onPress={() => navigation.navigate('VerifyOTP')} // Navigate to the Verify OTP screen
      >
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  sendButtonContainer: {
    marginTop: 30,
  },
  sendButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
