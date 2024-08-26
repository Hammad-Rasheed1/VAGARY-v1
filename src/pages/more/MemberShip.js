import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/header/CustomHeader';
import MemberShipCard from '../../components/membership/MemberShipCard';

const MemberShip = () => {
  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader title={'MemberShip'} />
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <MemberShipCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemberShip;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
