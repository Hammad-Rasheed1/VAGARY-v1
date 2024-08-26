import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utls/styles';

const NotificationCard = () => {
  const Data = [
    {
      id: 1,
      background: '#4D4DFF',
      imgSource: require('../../../assets/icons/location-pin.png'),
      date: '10:30 AM',
      content: 'Check out stores near you.',
    },
    {
      id: 2,
      background: '#D22730',
      imgSource: require('../../../assets/icons/thumb.png'),
      date: '10:30 AM',
      content: 'Check out stores near you.',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.parent}>
          <View style={styles.main}>
            <View style={[styles.box, {backgroundColor: item.background}]}>
              <Image source={item.imgSource} style={styles.i} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Nearby Stores</Text>
              <Text style={styles.description}>{item.content}</Text>
            </View>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.line} />
      </View>
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

export default NotificationCard;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  box: {
    width: 37,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  i: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor:"#FFFFFF"
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  main: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  date: {
    color: '#000000',
    fontFamily: fonts.Regular,
  },
  line: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    width: '100%',
    marginTop: 10,
  },
});
