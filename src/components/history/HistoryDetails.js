import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {fonts, fontSizes} from '../../utls/styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const HistoryDetails = () => {
  const navigation = useNavigation();
  const Data = [
    {
      id: 1,
      date: 'Aug 16, 2024',
      items: '2',
      Total: '10.44',
    },
    {
      id: 1,
      date: 'Aug 16, 2024',
      items: '2',
      Total: '10.44',
    },
    {
      id: 1,
      date: 'Aug 16, 2024',
      items: '2',
      Total: '10.44',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.parent}>
        <View style={styles.main}>
          <Text style={styles.reciept}>Receipt Id</Text>
          <Text style={styles.num}>#91232</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.mainId}>
          <Text style={styles.reciept}>Date</Text>
          <Text style={styles.num}>{item.date}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.mainId}>
          <Text style={styles.reciept}>Total Items</Text>
          <Text style={styles.num}>{item.items}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.mainId}>
          <Text style={styles.reciept}>Total</Text>
          <Text style={styles.num}>{item.Total}</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity onPress={() => navigation.navigate('RecieptDetails')}>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <View style={styles.imgAdd}>
              <Text style={styles.add}>Details</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};

export default HistoryDetails;

const styles = StyleSheet.create({
  parent: {
    padding: 11,
    backgroundColor: '#F3FFF1',
    borderColor: '#EDEDED',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  reciept: {
    color: '#000000',
    fontSize: 13,
    fontFamily: fonts.Medium,
  },
  num: {
    color: '#000000',
    fontSize: fontSizes.small,
    fontFamily: fonts.Regular,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E7E7E780',
    marginTop: 10,
  },
  mainId: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  gradient: {
    width: 93,
    height: 35,
    alignSelf: 'center',
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
});
