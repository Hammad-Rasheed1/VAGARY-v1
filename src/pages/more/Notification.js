import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header/CustomHeader';
import NotificationCard from '../../components/notification/NotificationCard';

const Notification = () => {
  return (
    <View>
      <CustomHeader title={'Notification'} />
      <View style={{marginHorizontal: 20}}>
        <NotificationCard />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
