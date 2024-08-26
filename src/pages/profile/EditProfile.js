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
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {fonts} from '../../utls/styles';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomHeader from '../../components/header/CustomHeader';

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

const EditProfile = () => {
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
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <CustomHeader title={'Edit Profile'} />
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={
              profileImage
                ? {uri: profileImage}
                : require('../../../assets/img/user.png')
            }
            style={styles.img}>
            <View style={styles.cameraicon}>
              <TouchableOpacity onPress={handleImagePick}>
                <Image
                  source={require('../../../assets/icons/camera.png')}
                  style={styles.camera}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>

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

                <TouchableOpacity
                  style={styles.createAccountButtonContainer}
                  onPress={handleSubmit}>
                  <LinearGradient
                    colors={['#126702', '#B1B500']}
                    start={{x: 0.0, y: 0.5}}
                    end={{x: 1.0, y: 0.5}}
                    style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>Update</Text>
                  </LinearGradient>
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
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  camera: {
    width: 20,
    height: 20,
  },
  cameraicon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
});

export default EditProfile;
