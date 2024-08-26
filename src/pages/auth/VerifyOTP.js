import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AppState,
  Dimensions,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next'; // Import useTranslation
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import styles if not available
// import { colors, commonStyles, fontSizes, fonts } from "../../utils/styles";
// import ActivityIndicatorModal from '../../components/modal/ActivityIndicatorModal';
// import GeneralModal from '../../components/modal/GeneralModal';
// import SuccessIcon from '../../../assets/success.svg';

const VerifyOtp = ({navigation, route}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const otpInputs = useRef([]);
  const [timer, setTimer] = useState(60); // Timer set to 60 seconds
  const {t} = useTranslation();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  // Handler for "Verify" button press
  const handleVerifyPress = () => {
    // Implement verification logic here
    navigation.navigate('ResetPassword'); // Replace 'NextScreen' with your actual screen
  };

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    if (value === '') {
      if (index > 0) {
        otpInputs.current[index - 1].focus();
      }
    } else {
      if (index < otp.length - 1) {
        otpInputs.current[index + 1].focus();
      }
    }
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError('');
  };

  // Handle key press events
  const handleKeyPress = (index, key) => {
    if (key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        otpInputs.current[index - 1].focus();
      }
    }
  };

  // Reset OTP fields and timer
  const resetOTPFieldsAndTime = () => {
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
    otpInputs.current.forEach(input => input.clear());
    otpInputs.current[0].focus();
    setTimer(60);
  };

  // Show success toast message
  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      bottomOffset: 20,
      text1: t('success'),
      text2: t('otpResentSuccessfully'),
      visibilityTime: 3000,
    });
  };

  // Handle AppState changes and manage timer
  useEffect(() => {
    let interval;
    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'active') {
        const currentTime = new Date().getTime();
        const backgroundTime = currentTime - AppState.lastActiveTime;
        const remainingTime = Math.max(
          0,
          timer - Math.floor(backgroundTime / 1000),
        );
        setTimer(remainingTime);
      } else if (nextAppState === 'background') {
        AppState.lastActiveTime = new Date().getTime();
      }
    };
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => {
      appStateSubscription.remove();
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/back-icon.png')} // Update with your actual back icon path
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headingText}>Verify OTP</Text>
        <Text style={[styles.blackText, {marginTop: 10}]}>
          enterVerificationCodeSentTo
        </Text>

        <Text style={styles.purpleText}>emma@gmail.com</Text>
        <Text style={[styles.blackText, {marginTop: 30}]}>enterCode</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (otpInputs.current[index] = ref)}
              style={[
                styles.input,
                digit ? styles.filledBorderColor : styles.nonFilledBorderColor,
              ]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOtpChange(index, value)}
              secureTextEntry={false}
              onFocus={() => {
                otpInputs.current[index].clear();
              }}
              onKeyPress={({nativeEvent}) => {
                handleKeyPress(index, nativeEvent.key);
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.gradientButton}
          onPress={() => {
            // Handle button press
            handleVerifyPress(); // Assuming you have this function
          }}>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            style={styles.linearGradient}>
            <Text style={styles.verify}>verify</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.noCodeText}>"Did Not Receive Code?</Text>
        {timer > 0 ? (
          <Text style={styles.timerText}>sendAgainIn {timer} seconds</Text>
        ) : (
          <TouchableOpacity
            style={styles.touchable_resend}
            onPress={resetOTPFieldsAndTime}>
            <Text style={styles.resend}>Resend Code</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  blackText: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    //fontFamily: fonts.light,
  },
  purpleText: {
    fontSize: 14,
    alignSelf: 'flex-start',
    color: '#B1B500',
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    width: Dimensions.get('window').width / 6 - 20,
    height: Dimensions.get('window').width / 6 - 20,
    borderWidth: 1,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  filledBorderColor: {
    borderColor: 'purple',
  },
  nonFilledBorderColor: {
    borderColor: 'grey',
  },
  noCodeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center',
  },
  timerText: {
    fontSize: 12,
    fontFamily: '500',
    color: 'grey',
    margin: 20,
    textAlign: 'center',
  },
  headingText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  resend: {
    color: '#126702',
  },
  touchable: {
    paddingVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    color: '#FFFFFF',
  },
  gradientButton: {
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden', // Ensure that gradient doesn't overflow
  },
  linearGradient: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 17,
    justifyContent: 'center',
  },
  touchable_resend: {
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 6,
    marginTop: 21,
    borderColor: '#B1B500',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 43,
  },
});
