import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts} from '../../utls/styles';

const TermsAndCondition = () => {
  return (
    <SafeAreaView style={styles.safeAria}>
      <ScrollView>
        <CustomHeader title={'Terms And Condition'} />
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </Text>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </Text>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 40,
    alignSelf: 'center',
    marginTop: 30,
  },
  txt: {
    color: '#686868',
    fontSize: 14,
    fontFamily: fonts.Regular,
    marginTop: 15,
    lineHeight: 24,
  },
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
