import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAria}>
      <ScrollView>
        <CustomHeader title={'Profile'} />
        <View style={{marginHorizontal: 20}}>
          <Image
            source={require('../../../assets/img/user.png')}
            style={styles.img}
          />
          <Text style={styles.name}>Full Name</Text>
          <Text style={styles.john}>John Doe</Text>
          <View style={styles.line} />
          <Text style={styles.name}>Phone Number</Text>
          <Text style={styles.john}>John Doe</Text>
          <View style={styles.line} />
          <Text style={styles.name}>Email Address</Text>
          <Text style={styles.john}>John Doe</Text>
          <View style={styles.line} />
          <Text style={styles.name}>Home Address</Text>
          <Text style={styles.john}>John Doe</Text>
          <View style={styles.line} />
          <Text style={styles.name}>Work Address</Text>
          <Text style={styles.john}>John Doe</Text>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('EditProfile')}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientButton}>
              <Text style={styles.selectText}>Edit Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  img: {
    width: 83,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  name: {
    color: '#000000',
    fontSize: 15,
    fontFamily: fonts.Medium,
    marginTop: 15,
  },
  john: {
    color: '#A7A7A7',
    fontSize: 14,
    fontFamily: fonts.Regular,
    marginTop: 10,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 15,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: fontSizes.medium,
    fontFamily: fonts.Medium,
  },
  gradientButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,

    alignItems: 'center',
    marginTop: 77,
  },
});
