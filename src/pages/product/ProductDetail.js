import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';

import ProductCardData from '../../components/product/ProductCardData';

const ProductDetail = () => {
  return (
    <View>
      <CustomHeader title={'Pantene Pro - V'} />
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <ProductCardData />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
