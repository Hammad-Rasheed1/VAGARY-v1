import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import {fontSizes} from '../../utls/styles';
import {useNavigation} from '@react-navigation/native';
import {fonts} from '../../utls/styles';
import VagaryProduct from '../../components/product/VagaryProduct';
import WalmartCard from '../../components/allproduct/WalmartCard';
import KrogerCard from '../../components/allproduct/KrogerCard';

const AllProduct = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [selectData, setSelectData] = useState('');

  const handlePress = text => {
    setSelected(text);
    setSelectData(text);
  };
  const handleLogin = () => {
    navigation.navigate('VagaryHistory');
  };

  return (
    <SafeAreaView style={styles.safeAria}>
      <ScrollView>
        <CustomHeader title={'All Products'} />
        <View style={{marginHorizontal: 20}}>
          <View style={styles.parent}>
            <TouchableOpacity
              style={styles.vagary}
              onPress={() => handlePress('Walmart')}>
              {selected === 'Walmart' ? (
                <LinearGradient
                  colors={['#126702', '#B1B500']}
                  style={styles.gradient}>
                  <Text style={[styles.text, {color: '#FFFFFF'}]}>Walmart</Text>
                </LinearGradient>
              ) : (
                <View style={styles.unselected}>
                  <Text style={styles.text}>Walmart</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.vagary}
              onPress={() => handlePress('Kroger')}>
              {selected === 'Kroger' ? (
                <LinearGradient
                  colors={['#126702', '#B1B500']}
                  style={styles.gradient}>
                  <Text style={[styles.text, {color: '#FFFFFF'}]}>Kroger</Text>
                </LinearGradient>
              ) : (
                <View style={styles.unselected}>
                  <Text style={styles.text}>Kroger</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          {selectData === 'Walmart' && <WalmartCard />}
          {selectData === 'Kroger' && <KrogerCard />}

          {selectData === 'Walmart' && (
            <View style={styles.total}>
              <View style={styles.totalItems}>
                <Text style={styles.item}>Total Items</Text>
                <Text style={styles.num}>2</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.totalPrice}>
                <Text style={[styles.item, {color: '#000000'}]}>
                  Total Price
                </Text>
                <Text style={[styles.num, {color: '#126702'}]}>$8.57</Text>
              </View>
            </View>
          )}
          {selectData === 'Kroger' && (
            <View style={styles.total}>
              <View style={styles.totalItems}>
                <Text style={styles.item}>Total Items</Text>
                <Text style={styles.num}>2</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.totalPrice}>
                <Text style={[styles.item, {color: '#000000'}]}>
                  Total Price
                </Text>
                <Text style={[styles.num, {color: '#126702'}]}>$8.57</Text>
              </View>
            </View>
          )}
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={handleLogin}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Save Reciept</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  vagary: {
    width: 63,
    height: 28,

    borderRadius: 4,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  unselected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 4,
  },
  text: {
    color: '#7D7D7D',
    fontSize: 12,
    fontFamily: fonts.Regular,
  },
  parent: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  total: {
    borderWidth: 1,
    padding: 11,
    borderColor: '#EDEDED',
    borderRadius: 10,
    marginTop: 100,
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
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    //  position:'absolute',
    // bottom:-60,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
