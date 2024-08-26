import React from 'react';
import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {fonts, fontSizes} from '../../utls/styles';

const Pantene = ({onPantenePress}) => {
  const Data = [
    {
      id: 1,
      name: 'Pantene',
      status: 'Pro',
    },
    {
      id: 2,
      name: 'Pantene',
      status: 'Pro-V',
    },
    {
      id: 3,
      name: 'Pantene',
      status: 'Shine',
    },
    {
      id: 4,
      name: 'Pantene',
      status: 'Natural',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => onPantenePress(item.status)}>
        <View style={styles.parent}>
          <Text style={styles.pantene}>
            {item.name} <Text style={styles.pro}>{item.status}</Text>
          </Text>
          <Image
            source={require('../../../assets/icons/plus.png')}
            style={styles.img}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Pantene;

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
  },
  pro: {
    fontSize: fontSizes.xSmall,
    fontFamily: fonts.Regular,
  },
});
