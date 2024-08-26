import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utls/styles';

const LogoutModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Image
            source={require('../../../assets/icons/logout.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Logout</Text>
          <Text style={styles.content}>Are you sure you want to logout?</Text>
          <TouchableOpacity style={styles.button}>
            <LinearGradient
              colors={['#126702', '#B1B500']}
              style={styles.gradient}>
              <Text style={styles.buttonText}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.not} onPress={onClose}>
            Not Yet
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 39,
    paddingTop: 19,

    borderRadius: 20,
    paddingBottom: 33,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: fonts.Medium,
    alignSelf: 'center',
    marginTop: 15,
  },
  content: {
    color: '#000000',
    fontSize: 12,
    fontFamily: fonts.Regular,
    marginTop: 13,
    alignSelf: 'center',
  },
  gradient: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    height: 40,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  not: {
    color: '#000000',
    fontSize: 15,
    fontFamily: fonts.Regular,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default LogoutModal;
