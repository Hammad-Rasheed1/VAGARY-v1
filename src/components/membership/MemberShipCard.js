import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {fonts} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const MemberShipCard = () => {
  const Data = [
    {
      id: '1',
      name: 'Basic',
      Price: '$3.99/',
      Month: 'Month',
      Trial: '3 Days Free Trial',
      searches: 'Unlimited Searches',
      background: '#B1B500',
      dataColor: '#FEFFE1',
      circlecolor: '#FEFFE1',
      tint: '#B1B500',
      circleborder: '#B1B500',
    },
    {
      id: '2',
      name: 'Standard',
      Price: '$5.99/',
      Month: 'Month',
      Trial: '7 Days Free Trial',
      searches: 'Unlimited Searches',
      background: '#126702',
      dataColor: '#E8FFE3',
      circlecolor: '#E8FFE3',
      tint: '#126702',
      circleborder: '#126702',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.main}>
          <View style={[styles.basic, {backgroundColor: item.background}]}>
            <View
              style={[
                styles.circle,
                {backgroundColor: item.circlecolor},
                {borderColor: item.circleborder},
              ]}>
              <Image
                source={require('../../../assets/icons/dollar.png')}
                style={[styles.tick, {tintColor: item.tint}]}
              />
            </View>
            <Text style={styles.txt}>{item.name}</Text>
            <View style={styles.price_month}>
              <Text style={styles.price}>
                {item.Price}
                <Text style={styles.month}> {item.Month}</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.data, {backgroundColor: item.dataColor}]}>
            <View style={styles.dotParent}>
              <View style={styles.dot} />
              <Text style={styles.trial}>{item.Trial}</Text>
            </View>
            <View style={[styles.dotParent, {marginTop: 17}]}>
              <View style={styles.dot} />
              <Text style={styles.trial}>{item.searches}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.gradient}>
              <Text style={styles.text}>Subscribe</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MemberShipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: width * 0.8,
    marginTop: 40,
  },
  main: {
    width: '90%',
    height: height * 0.6,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginTop: 40,
  },
  basic: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    marginTop: 22,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: fonts.Bold,
  },
  month: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: '#FFFFFF',
  },
  price_month: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 10,
  },
  data: {
    paddingTop: 35,
    paddingHorizontal: 18,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#B1B500',
    borderRadius: 10,
  },
  trial: {
    color: '#000000',
    fontSize: 12,
    fontFamily: fonts.Regular,
  },
  dotParent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    width: '80%',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#FEFFE1',

    borderWidth: 1,
    borderColor: '#B1B500',
    position: 'absolute',
    top: -25,
  },
  tick: {
    width: 30,
    height: 30,
  },
});
