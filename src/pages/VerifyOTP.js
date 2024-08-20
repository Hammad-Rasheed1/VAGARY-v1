import React, {useState, useEffect} from 'react';
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

const VerifyOTP = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(10);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 60000);
      return () => clearInterval(interval);
    } else {
      setShowResend(true);
    }
  }, [timer]);

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

      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        We have sent an OTP to{' '}
        <Text style={styles.emailHighlight}>johndoe@gmail.com</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Code</Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.verifyButtonContainer}
        onPress={() => navigation.navigate('ResetPassword')}>
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>

      {!showResend ? (
        <Text style={styles.resendTimer}>Send again in {timer} seconds</Text>
      ) : (
        <TouchableOpacity style={styles.resendButtonContainer}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </TouchableOpacity>
      )}
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
  emailHighlight: {
    color: '#7C9D32',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
  },
  verifyButtonContainer: {
    marginTop: 30,
  },
  verifyButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendTimer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999999',
    marginTop: 20,
  },
  resendButtonContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#126702',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  resendButtonText: {
    color: '#126702',
    fontSize: 18,
  },
});

export default VerifyOTP;
