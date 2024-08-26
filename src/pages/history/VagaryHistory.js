import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utls/styles';
import {useNavigation} from '@react-navigation/native';

const VagaryHistory = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <View style={styles.imgAdd}>
              <Image
                source={require('../../../assets/icons/history.png')}
                style={styles.img}
              />
              <Text style={styles.add}>History</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.line} />
        <ImageBackground
          source={require('../../../assets/img/history.png')}
          style={styles.history}>
          <View style={styles.circle}>
            <Image
              source={require('../../../assets/icons/tick-circle.png')}
              style={styles.tick}
            />
          </View>

          <Text style={styles.total}>Total Savings : $ 3.50</Text>
          <Text style={styles.date}>15-Aug-24</Text>
          <View style={[styles.dotedLine, {marginTop: 25}]} />
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>Original Price</Text>
            <Text style={styles.txt}>Saving</Text>
          </View>
          <View style={styles.dotedLine} />
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>$4.27</Text>
            <Text style={styles.txt}>Product Name</Text>
          </View>
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>$4.27</Text>
            <Text style={styles.txt}>Product Name</Text>
          </View>
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>$4.27</Text>
            <Text style={styles.txt}>Product Name</Text>
          </View>
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>$4.27</Text>
            <Text style={styles.txt}>Product Name</Text>
          </View>
          <View style={styles.dotedLine} />
          <View style={styles.product}>
            <Text style={styles.txt}>Product Name</Text>
            <Text style={styles.txt}>$4.27</Text>
            <Text style={styles.txt}>Product Name</Text>
          </View>
          <View style={[styles.dotedLine, {marginTop: 15}]} />
          <Text style={styles.vagary}>Vagary</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VagaryHistory;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gradient: {
    width: 83,
    height: 35,
    alignSelf: 'flex-end',
    marginTop: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  add: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: fonts.Regular,
  },
  imgAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  img: {
    width: 20,
    height: 20,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 15,
  },
  history: {
    width: '100%',
    alignSelf: 'center',

    marginTop: 40,
    borderRadius: 20,
    height: 400,
  },
  circle: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    top: -22,
    shadowColor: '#000000', 
    shadowRadius: 10, 
    shadowOffset: { width: 0, height: 5 }, 
    elevation: 16, 
    shadowOpacity: 0.50, 
  },
  
  tick: {
    width: 30,
    height: 30,
  },
  total: {
    color: '#000000',
    fonts: 20,
    fontFamily: fonts.Medium,
    alignSelf: 'center',
    marginTop: 39,
  },
  date: {
    color: '#000000',
    fontFamily: fonts.Regular,
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 15,
  },
  dotedLine: {
    borderStyle: 'dotted',
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 35,
  },
  txt: {
    color: '#000000B8',
    fontSize: 10,
    fontFamily: fonts.Regular,
  },
  vagary: {
    color: '#126702',
    fontSize: 36,
    fontFamily: fonts.Regular,
    alignSelf: 'center',
    marginTop: 9,
  },
});
