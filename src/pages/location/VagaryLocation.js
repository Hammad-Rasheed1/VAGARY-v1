import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import VagaryProduct from '../../components/product/VagaryProduct';
import {VagaryProductData} from '../../constants/VagaryProductData';

const VagaryLocation = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.imgParent}>
            <Image
              source={require('../../../assets/icons/location-pin.png')}
              style={styles.location}
            />
            <Text style={styles.map}>123 Main Street, USA</Text>
          </View>
          <Image
            source={require('../../../assets/icons/pen-swirl.png')}
            style={styles.edit}
          />
        </View>
        <View style={styles.line} />
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradient}>
              <View style={styles.imgAdd}>
                <Image
                  source={require('../../../assets/icons/plus.png')}
                  style={styles.img}
                />
                <Text style={styles.add}>Add</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {VagaryProductData.length > 0 ? (
            <VagaryProduct />
          ) : (
            <View style={styles.cartContainer}>
              <Image
                source={require('../../../assets/img/cart.png')}
                style={styles.cart}
              />
              <Text style={styles.empty}>Cart is empty</Text>
            </View>
          )}
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

          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={handleLogin}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>View Price Comparison</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VagaryLocation;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  location: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  edit: {
    width: 24,
    height: 24,
    tintColor: '#A6A6A6',
  },
  map: {
    color: '#000000',
    fontSize: 13,
    fontFamily: fonts.Regular,
  },
  imgParent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 20,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 19,
  },
  gradient: {
    width: 75,
    height: 35,
    alignSelf: 'flex-end',
    marginTop: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: fonts.Regular,
  },
  imgAdd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  cart: {
    width: '100%',
    height: 180,
  },
  empty: {
    color: '#000000',
    fontFamily: fonts.Regular,
    fontSize: fontSizes.xSmall,
    textAlign: 'center',
    marginTop: 10,
  },
  total: {
    borderWidth: 1,
    padding: 11,
    borderColor: '#EDEDED',
    borderRadius: 10,
    marginTop: 80,
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

  loginButtonContainer: {
    marginBottom: 18,
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
