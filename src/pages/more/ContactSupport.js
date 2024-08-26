import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactSupport = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title={'Contact Support'} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Formik
          initialValues={{name: '', email: '', subject: '', message: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <Text style={styles.name}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                placeholderTextColor={'#A7A7A7'}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <Text style={styles.name}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email Address"
                placeholderTextColor={'#A7A7A7'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.name}>Subject</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Subject"
                placeholderTextColor={'#A7A7A7'}
                onChangeText={handleChange('subject')}
                onBlur={handleBlur('subject')}
                value={values.subject}
              />
              {touched.subject && errors.subject && (
                <Text style={styles.errorText}>{errors.subject}</Text>
              )}

              <Text style={styles.name}>Message</Text>
              <TextInput
                style={[styles.input, {paddingBottom: 100}]}
                placeholder="Type Here.."
                placeholderTextColor={'#A7A7A7'}
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
              />
              {touched.message && errors.message && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}

              <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
                <LinearGradient
                  colors={['#126702', '#B1B500']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.gradientButton}>
                  <Text style={styles.selectText}>Send</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactSupport;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 70,
  },
  name: {
    color: '#000000',
    fontSize: 15,
    fontFamily: fonts.Medium,
    marginTop: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    color: '#000000',
    marginTop: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  touchable: {
    marginTop: 60,
  },
  gradientButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: fontSizes.medium,
    fontFamily: fonts.Medium,
  },
});
