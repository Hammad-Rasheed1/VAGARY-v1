import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utls/styles';
import {useNavigation} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';

const More = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader />
      <ScrollView>
        <View style={{marginTop:20}}>
        <Pressable
          onPress={() => navigation.navigate('Profile')}
          style={{marginHorizontal: 20}}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/user-alt.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Profile</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AccountAndManagement')}
          style={{marginHorizontal: 20}}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/code.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Account and Management</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Notification')}
          style={{marginHorizontal: 20}}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/notification.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Notification</Text>
            </View>
            <ToggleSwitch
              isOn={true}
              onColor="#B1B500"
              offColor="#F0F0F0"
              labelStyle={{color: '#B1B500', fontWeight: '900'}}
              onToggle={isOn => console.log('changed to : ', isOn)}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('FAQ')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/file.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>FAQ</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('MemberShip')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/crown.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Membership</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('ContactSupport')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/square.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Contact Support</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('AboutUs')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/seal.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>About Us</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/heart.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Privacy Policy</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('TermsAndCondition')}>
          <View style={styles.parent}>
            <View style={styles.main}>
              <LinearGradient
                colors={['#126702', '#B1B500']}
                style={styles.box}>
                <Image
                  source={require('../../../assets/icons/heart.png')}
                  style={styles.img}
                />
              </LinearGradient>
              <Text style={styles.text}>Terms and Condition</Text>
            </View>
            <Image
              source={require('../../../assets/img/chevron-right.png')}
              style={[styles.img, {tintColor: 'black'}]}
            />
          </View>
        </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    width: 32,
    height: 32,

    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: 15,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: '#FAFAFA',
    marginVertical: 10,
    borderRadius: 10,
  },
});
