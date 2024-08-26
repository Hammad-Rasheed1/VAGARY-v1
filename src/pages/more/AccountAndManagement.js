import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts} from '../../utls/styles';
import LogoutModal from '../../components/modal/LogOutModal';
import DeleteModal from '../../components/modal/DeleteModal';

const AccountAndManagement = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [delModalVisible, setDelModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <CustomHeader title={'Account and Management'} />
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Pressable style={styles.parent} onPress={() => setModalVisible(true)}>
          <View style={styles.main}>
            <Image
              source={require('../../../assets/icons/logout.png')}
              style={styles.img}
            />
            <Text style={styles.text}>LogOut</Text>
          </View>
          <Image
            source={require('../../../assets/img/chevron-right.png')}
            style={[styles.img, {tintColor: 'black'}]}
          />
        </Pressable>
        <View style={styles.line} />
        <Pressable
          onPress={() => setDelModalVisible(true)}
          style={styles.parent}>
          <View style={styles.main}>
            <Image
              source={require('../../../assets/icons/trash.png')}
              style={styles.img}
            />
            <Text style={styles.text}>Delete Account</Text>
          </View>
          <Image
            source={require('../../../assets/img/chevron-right.png')}
            style={[styles.img, {tintColor: 'black'}]}
          />
        </Pressable>
        <View style={styles.line} />
      </View>
      <LogoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <DeleteModal
        visible={delModalVisible}
        onClose={() => setDelModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#000000',
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    borderRadius: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
  },
});

export default AccountAndManagement;
