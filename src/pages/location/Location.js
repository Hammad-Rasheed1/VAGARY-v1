import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Location = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('BottomTabBar');
  };
  return (
    <SafeAreaView style={styles.safeAria}>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../../assets/icons/back-icon.png')} />
            </TouchableOpacity>
            <Text style={styles.choose}>Choose Location</Text>
            <Text />
          </View>
          <View style={styles.input}>
            <Image
              source={require('../../../assets/icons/search-01.png')}
              style={styles.img}
            />
            <TextInput
              placeholder="123 Main Street, USA"
              placeholderTextColor={'#000000'}
              style={styles.textInput}
            />
            <Image
              source={require('../../../assets/icons/cross.png')}
              style={styles.img}
            />
          </View>

          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={handleLogin}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  choose: {
    color: '#000000',
    fontSize: fontSizes.xMedium,
    fontFamily: fonts.Bold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  img: {
    width: 24,
    height: 24,
  },
  input: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#E5E5E5',
    marginTop: 20,
    marginBottom: 30,
  },
  textInput: {
    flex: 1,
    paddingLeft: 20,
  },
  touchable: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
