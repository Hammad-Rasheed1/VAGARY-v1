import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';
import {VagaryProductData} from '../../constants/VagaryProductData';

const VagaryProduct = () => {
  const Data = VagaryProductData;

  const renderItem = ({item}) => {
    return (
      <View style={styles.parent}>
        <View style={styles.walmart}>
          <Text style={styles.txt}>{item.card}</Text>
        </View>
        <View style={styles.main}>
          <Image source={{uri: item.img}} style={styles.img} />
          <View>
            <Text style={styles.pantene}>
              {item.name} <Text style={styles.pro}>{item.category}</Text>
            </Text>
            <Text style={styles.price}>
              Price: <Text style={{color: '#B1B500'}}>{item.price}</Text>
            </Text>
            <Text style={styles.save}>You Saved {item.saved}</Text>
          </View>
        </View>
        <LinearGradient
          colors={['#126702', '#B1B500']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
          <Image
            source={require('../../../assets/icons/objects-column.png')}
            style={styles.column}
          />
        </LinearGradient>
        <View style={styles.copyLink}>
          <Text style={styles.txt}>Copy Link</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};

export default VagaryProduct;

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginVertical: 15,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  pantene: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: fontSizes.medium,
  },
  pro: {
    fontSize: fontSizes.xSmall,
    fontFamily: fonts.Regular,
  },
  save: {
    color: '#B1B500',
    fontSize: fontSizes.mSmall,
    fontFamily: fonts.Medium,
  },
  price: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: fontSizes.small,
  },
  circle: {
    width: 34,
    height: 34,
    borderWidth: 1,
    borderRadius: 20,
  },
  gradient: {
    width: 34,
    height: 34,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    width: 24,
    height: 24,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  walmart: {
    width: 52,
    height: 15,
    backgroundColor: '#126702',
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: fonts.Medium,
  },
  copyLink: {
    width: 52,
    height: 15,
    backgroundColor: '#B1B500',
    position: 'absolute',
    // top:0,
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
});
