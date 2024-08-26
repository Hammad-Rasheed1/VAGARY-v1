import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import VerifyOTPacc from './src/pages/VerifyOTPacc';

import OnboardingScreen from '../pages/Onboarding/OnboardingScreen';
import NextOnboardingScreen from '../pages/Onboarding/NextOnboardingScreen';
import FinalOnboardingScreen from '../pages/Onboarding/FinalOnboardingScreen';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import VerifyOTP from '../pages/auth/VerifyOTP';
import ResetPassword from '../pages/auth/ResetPassword';
import Location from '../pages/location/Location';
import AddProduct from '../pages/product/AddProduct';
import ProductDetail from '../pages/product/ProductDetail';
import VagaryHistory from '../pages/history/VagaryHistory';
import History from '../pages/history/History';
import RecieptDetails from '../pages/history/RecieptDetails';
import Notification from '../pages/more/Notification';
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/profile/EditProfile';
import AllProduct from '../pages/product/AllProduct';
import FAQ from '../pages/more/FAQ';
import ContactSupport from '../pages/more/ContactSupport';
import AboutUs from '../pages/more/AboutUs';
import PrivacyPolicy from '../pages/more/PrivacyPolicy';
import TermsAndCondition from '../pages/more/TermsAndCondition';
import AccountAndManagement from '../pages/more/AccountAndManagement';
import MemberShip from '../pages/more/MemberShip';
import BottomTabBar from './BottomTabBar';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabBar">
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NextOnboardingScreen"
          component={NextOnboardingScreen} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinalOnboardingScreen"
          component={FinalOnboardingScreen} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location} // Placeholder component
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VagaryHistory"
          component={VagaryHistory} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecieptDetails"
          component={RecieptDetails} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllProduct"
          component={AllProduct} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactSupport"
          component={ContactSupport} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsAndCondition"
          component={TermsAndCondition} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountAndManagement"
          component={AccountAndManagement} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MemberShip"
          component={MemberShip} // Placeholder component
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
