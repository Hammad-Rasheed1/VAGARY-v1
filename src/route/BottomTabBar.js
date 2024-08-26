import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import More from '../pages/more/More';
import VagaryLocation from '../pages/location/VagaryLocation';
import SettingFilledIcon from '../../assets/icons/gear.png';
import SettingIcon from '../../assets/icons/gearunfilled.png';
import HouseIcon from '../../assets/icons/house.png';
import HouseFilledIcon from '../../assets/icons/housefilled.png';
import EmptyIcon from '../../assets/icons/wallet.png';
import VagaryHistory from '../pages/history/VagaryHistory';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="VagaryLocation"
        component={VagaryLocation}
        options={{
          headerShown: false,
          tabBarStyle: {height: 80, backgroundColor: '#F6F6F6'},
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? HouseFilledIcon : HouseIcon}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="VagaryHistory"
        component={VagaryHistory}
        options={{
          headerShown: false,
          tabBarStyle: {height: 80, backgroundColor: '#F6F6F6'},
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? EmptyIcon : EmptyIcon}
                style={styles.icon}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarStyle: {height: 80, backgroundColor: '#F6F6F6'},
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? SettingFilledIcon : SettingIcon}
                style={styles.icon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
