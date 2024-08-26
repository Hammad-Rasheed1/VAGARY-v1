import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts} from '../../utls/styles';
import HistoryDetails from '../../components/history/HistoryDetails';

const History = () => {
  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader title={'History'} />
      <ScrollView>
        <Text style={styles.receipt}>Reciept History</Text>
        <View style={styles.line} />
        <View style={{marginHorizontal: 20}}>
          <HistoryDetails />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  receipt: {
    color: '#000000',
    fontSize: 15,
    fontFamily: fonts.Medium,
    marginHorizontal: 20,
    marginTop: 30,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#E7E7E7',
  },
});
