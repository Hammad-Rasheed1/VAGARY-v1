import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/pages/SplashScreen';
import OnboardingScreen from './src/pages/OnboardingScreen';
import NextOnboardingScreen from './src/pages/NextOnboardingScreen';
import FinalOnboardingScreen from './src/pages/FinalOnboardingScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import VerifyOTP from './src/pages/VerifyOTP';
import VerifyOTPacc from './src/pages/VerifyOTPacc';
import ResetPassword from './src/pages/ResetPassword';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
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
          name="VerifyOTPacc"
          component={VerifyOTPacc} // Placeholder component
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword} // Placeholder component
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
