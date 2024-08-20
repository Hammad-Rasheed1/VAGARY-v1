import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/back-icon.png')} // Update with your actual back icon path
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Image
          source={require('C:/Projects/ReactNative/vagary/src/utls/LOGO.png')} // Replace with your splash logo image path
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.signUpTitle}>Create New Account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/name-icon.png')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="John Doe"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/phone-icon.png')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="+971 Phone Number"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Home Address</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/address-icon.jpg')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="123 main road"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Work Address (Optional)</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/address-icon.jpg')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="123 main road"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/email-icon.png')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Johndoe@gmail.com"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/password-icon.png')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="*******"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('C:/Projects/ReactNative/vagary/src/utls/password-icon.png')} // Update with your actual icon path
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="*******"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Checkbox logic can be implemented here */}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I accept <Text style={styles.link}>terms & conditions</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.createAccountButtonContainer}
          onPress={() => navigation.navigate('VerifyOTPacc')}>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
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
  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666666',
  },
  link: {
    color: '#7C9D32',
    textDecorationLine: 'underline',
  },
  createAccountButtonContainer: {
    marginBottom: 20,
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccountButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    bottom: 15,
    color: '#666666',
  },
  loginLink: {
    color: '#7C9D32',
    fontWeight: 'bold',
  },
});

export default SignUp;
