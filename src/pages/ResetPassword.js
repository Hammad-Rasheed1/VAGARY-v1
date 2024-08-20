import React, {useState} from 'react';
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

const ResetPassword = () => {
  const navigation = useNavigation();
  const [showPopup, setShowPopup] = useState(false);

  const handleReset = () => {
    // Show the popup when the reset button is clicked
    setShowPopup(true);
  };

  const handleLogin = () => {
    // Close the popup and navigate to the SignIn screen
    setShowPopup(false);
    navigation.navigate('SignIn');
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

      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>You can now reset your password.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>New Password</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/password-icon.png')} // Update with your actual password icon path
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="*******"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/eye-icon.png')} // Update with your actual eye icon path
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/password-icon.png')} // Update with your actual password icon path
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="*******"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/eye-icon.png')} // Update with your actual eye icon path
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.resetButtonContainer}
        onPress={handleReset}>
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Modal visible={showPopup} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/success-icon.png')} // Update with your success icon path
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>Password Updated</Text>
            <Text style={styles.modalMessage}>
              Your password has been updated successfully.
            </Text>
            <TouchableOpacity
              style={styles.loginButtonContainer}
              onPress={handleLogin}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                start={{x: 0.0, y: 0.5}}
                end={{x: 1.0, y: 0.5}}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
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
  eyeIcon: {
    width: 24,
    height: 24,
  },
  resetButtonContainer: {
    marginTop: 30,
  },
  resetButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButtonContainer: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
