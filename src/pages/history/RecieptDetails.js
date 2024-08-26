import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import ProductDetail from '../product/ProductDetail';
import ProductCardData from '../../components/product/ProductCardData';
import {fonts, fontSizes} from '../../utls/styles';
import VagaryProduct from '../../components/product/VagaryProduct';
import RecieptCard from '../../components/history/RecieptCard';

const RecieptDetails = () => {
  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader title={'Receipt Details'} />
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
         <RecieptCard/>
        </View>
      </ScrollView>
      <View style={styles.total}>
        <View style={styles.totalItems}>
          <Text style={styles.item}>Total Items</Text>
          <Text style={styles.num}>2</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.totalPrice}>
          <Text style={[styles.item, {color: '#000000'}]}>Total Price</Text>
          <Text style={[styles.num, {color: '#126702'}]}>$8.57</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecieptDetails;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  total: {
    borderWidth: 1,
    padding: 11,
    borderColor: '#EDEDED',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  totalItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    color: '#A6A6A6',
    fontFamily: fonts.Medium,
    fontSize: fontSizes.xSmall,
  },
  num: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: fontSizes.medium,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginTop: 15,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});
