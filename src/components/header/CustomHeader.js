import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {fonts, fontSizes} from '../../utls/styles';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View>
      {(route.name === 'VagaryLocation' ||
        route.name === 'VagaryHistory' ||
        route.name === 'More') && (
        <View>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <View style={styles.header}>
              <Text style={styles.txt}>Vagary</Text>
              <View style={styles.imgHeader}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Image
                    source={require('../../../assets/icons/notification.png')}
                    style={styles.vageryImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Image
                    source={require('../../../assets/img/user.png')}
                    style={styles.vageryImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
      {(route.name === 'AddProduct' ||
        route.name === 'ProductDetail' ||
        route.name === 'History' ||
        route.name === 'RecieptDetails' ||
        route.name === 'Notification' ||
        route.name === 'Profile' ||
        route.name === 'EditProfile' ||
        route.name === 'AllProduct' ||
        route.name === 'FAQ' ||
        route.name === 'ContactSupport' ||
        route.name === 'AboutUs' ||
        route.name === 'PrivacyPolicy' ||
        route.name === 'TermsAndCondition' ||
        route.name === 'AccountAndManagement' ||
        route.name === 'MemberShip') && (
        <View>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <View style={styles.AddProductHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../../assets/icons/chevron-right.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
              <Text style={styles.add}>{title}</Text>
              <Text />
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  vageryImage: {
    width: 24,
    height: 24,
  },
  imgHeader: {
    flexDirection: 'row',
    gap: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'center',
  },
  txt: {
    color: '#FFFFFF',
    fontSize: fontSizes.xlarge,
    fontFamily: fonts.Regular,
  },
  AddProductHeader: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  add: {
    color: '#FFFFFF',
    fontSize: fontSizes.xMedium,
    fontFamily: fonts.Bold,
  },
  img: {
    width: 24,
    height: 24,
  },
});
