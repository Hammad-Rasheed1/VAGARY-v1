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

const SignIn = () => {
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

      <Image
        source={require('C:/Projects/ReactNative/vagary/src/utls/LOGO.png')} // Replace with your splash logo image path
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.signInTitle}>Sign In</Text>
      <Text style={styles.signInSubtitle}>
        For personalized experience, login to your account
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

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButtonContainer}>
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Continue with</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/google-icon.png')} // Update with your actual Google icon path
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('C:/Projects/ReactNative/vagary/src/utls/apple-icon.png')} // Update with your actual Apple icon path
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.createAccountText}>
            Don’t have an account?{' '}
            <Text style={styles.createAccountLink}>Create new account</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 250, // Adjust width as needed
    height: 100, // Adjust height as needed
    alignSelf: 'center',
    top: 0,
    marginBottom: 0,
  },
  signInTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  signInSubtitle: {
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
  eyeIcon: {
    width: 24,
    height: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#7C9D32',
    textAlign: 'right',
    marginTop: 10,
  },
  signInButtonContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    marginVertical: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50, // Add space on left and right to keep buttons away from edges
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '37%', // Slightly smaller width to create space between buttons
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
  },
  createAccountLink: {
    color: '#7C9D32',
    fontWeight: 'bold',
  },
});

export default SignIn;
