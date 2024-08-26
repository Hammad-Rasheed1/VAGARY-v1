import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {fonts, fontSizes} from '../../utls/styles';
import {Data} from '../../constants/Data';

const PantenePro = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.parent}>
        <Text style={styles.pantene}>
          {item.name} <Text style={styles.pro}>{item.status}</Text>
        </Text>
        <View style={styles.circle}>
          <Image
            source={require('../../../assets/icons/trash-alt.png')}
            style={styles.img}
          />
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

export default PantenePro;

const styles = StyleSheet.create({
  img: {
    width: 24,
    height: 24,
  },
  pantene: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: fontSizes.medium,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 13,
    paddingVertical: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  pro: {
    fontSize: fontSizes.xSmall,
    fontFamily: fonts.Regular,
  },
  circle: {
    width: 28,
    height: 28,
    backgroundColor: '#CC3E3E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
});
