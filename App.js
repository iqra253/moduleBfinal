import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'

import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_AccountCreated from './src/Screens/LoginSignup/Signup/Signup_AccountCreated';
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername';
import Signup_EnterEmail from './src/Screens/LoginSignup/Signup/Signup_EnterEmail';
import Signup_EnterVerificationCode from './src/Screens/LoginSignup/Signup/Signup_EnterVerificationCode';
import ForgotPassword_ChoosePassword from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_EnterEmail from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPasword_AccountRecovered from './src/Screens/LoginSignup/ForgotPassword/ForgotPasword_AccountRecovered';





export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right'
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />
      <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
      <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
      <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
      <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
      <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
      <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
      <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />
      <Stack.Screen name="ForgotPasword_AccountRecovered" component={ForgotPasword_AccountRecovered} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      
     
  
   
      

      

       
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
