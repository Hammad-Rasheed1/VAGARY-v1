import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CustomHeader from '../../components/header/CustomHeader';
import PantenePro from '../../components/product/PantenePro';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const AddProduct = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAria}>
      <ScrollView>
        <CustomHeader title={'Add Product'} />
        <View style={{marginHorizontal: 20}}>
          <View style={styles.input}>
            <Image
              source={require('../../../assets/icons/search-01.png')}
              style={styles.img}
            />
            <TextInput
              placeholder="Search Here"
              placeholderTextColor={'grey'}
              style={styles.textInput}
            />
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/plusicon.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          {/* {showPantene && <Pantene onPantenePress={handlePantenePress} />} */}
          {/* {selectedPanteneStatus && (
            <PantenePro status={selectedPanteneStatus} />
          )} */}
          <PantenePro />
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTabBar')}
          style={styles.signInButtonContainer}>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Find Best Prices</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#000000',
  },
  signInButtonContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
