import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const VerifyOTPacc = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowResend(true);
    }
  }, [timer]);

  const handleVerify = () => {
    // Show the modal upon clicking Verify
    setModalVisible(true);
  };

  const handleContinue = () => {
    setModalVisible(false);
    navigation.navigate('HomeScreen'); // Navigate to the home screen or desired screen after modal
  };

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
          {/* OTP Input Fields */}
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.verifyButtonContainer}
        onPress={handleVerify}>
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

      {/* Modal for Account Created Successfully */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/success-icon.png')} // Update with your actual icon path
              style={styles.successIcon}
            />
            <Text style={styles.modalTitle}>Account Created Successfully.</Text>
            <Text style={styles.modalSubtitle}>
              Account created successfully.
            </Text>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.navigate('SignIn')}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                start={{x: 0.0, y: 0.5}}
                end={{x: 1.0, y: 0.5}}
                style={styles.continueButtonGradient}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  successIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  continueButton: {
    width: '100%',
  },
  continueButtonGradient: {
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyOTPacc;
