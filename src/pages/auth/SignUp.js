import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {fonts} from '../../utls/styles';
import {launchImageLibrary} from 'react-native-image-picker';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^\+971\d{8,}$/, 'Phone Number is not valid'),
  homeAddress: Yup.string().required('Home Address is required'),
  workAddress: Yup.string(),
  email: Yup.string()
    .required('Email Address is required')
    .email('Email Address is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();
  const handleImagePick = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        setProfileImage(response.assets[0].uri); // Set the picked image URI
      }
    });
  };

  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/icons/back-icon.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.vagery}>Vagery</Text>
            <Text />
          </View>

          <Text style={styles.signUpTitle}>Create New Account</Text>
          <View style={styles.circle}>
            <TouchableOpacity onPress={handleImagePick}>
              {profileImage ? (
                <Image source={{uri: profileImage}} style={styles.picker} />
              ) : (
                <Image
                  source={require('../../../assets/icons/imgpicker.png')}
                  style={styles.picker}
                />
              )}
            </TouchableOpacity>
          </View>

          <Formik
            initialValues={{
              fullName: '',
              phoneNumber: '',
              homeAddress: '',
              workAddress: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
              navigation.navigate('VerifyOTPacc');
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/name-icon.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="John Doe"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                  </View>
                  {errors.fullName && touched.fullName && (
                    <Text style={styles.errorText}>{errors.fullName}</Text>
                  )}
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/phone-icon.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="+971 Phone Number"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                      keyboardType="phone-pad"
                    />
                  </View>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Home Address</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/address-icon.jpg')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="123 main road"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      onChangeText={handleChange('homeAddress')}
                      onBlur={handleBlur('homeAddress')}
                      value={values.homeAddress}
                    />
                  </View>
                  {errors.homeAddress && touched.homeAddress && (
                    <Text style={styles.errorText}>{errors.homeAddress}</Text>
                  )}
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Work Address (Optional)</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/home.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="123 main road"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      onChangeText={handleChange('workAddress')}
                      onBlur={handleBlur('workAddress')}
                      value={values.workAddress}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Email Address</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/email-icon.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="Johndoe@gmail.com"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/password-icon.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="*******"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      secureTextEntry={passwordVisibility}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setPasswordVisibility(!passwordVisibility)}
                      style={styles.eyeIcon}>
                      <Icon
                        name={
                          passwordVisibility ? 'eye-off-outline' : 'eye-outline'
                        }
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Confirm Password</Text>
                  <View style={styles.inputWrapper}>
                    <Image
                      source={require('../../../assets/icons/password-icon.png')}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="*******"
                      placeholderTextColor="#B0B0B0"
                      style={styles.input}
                      secureTextEntry={confirmPasswordVisibility}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                      }
                      style={styles.eyeIcon}>
                      <Icon
                        name={
                          confirmPasswordVisibility
                            ? 'eye-off-outline'
                            : 'eye-outline'
                        }
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.errorText}>
                      {errors.confirmPassword}
                    </Text>
                  )}
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
                  onPress={handleSubmit}>
                  <LinearGradient
                    colors={['#126702', '#B1B500']}
                    start={{x: 0.0, y: 0.5}}
                    end={{x: 1.0, y: 0.5}}
                    style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>
                      Create Account
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.loginText}>
                    Already have an account?{' '}
                    <Text style={styles.loginLink}>Login</Text>
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    alignSelf: 'center',
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
  eyeIcon: {
    paddingHorizontal: 10,
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
    color: '#666666',
    marginBottom: 15,
    fontFamily: fonts.black,
  },
  loginLink: {
    color: '#7C9D32',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  vagery: {
    color: '#126702',
    fontSize: 36,
    fontWeight: '400',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFEC',
    borderColor: '#B1B500',
    marginTop: 20,
  },
  picker: {
    width: 25,
    height: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default SignUp;
