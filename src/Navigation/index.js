import React from'react'
import { View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import AdminSignUpScreen from '../screens/AdminSignUpScreen/AdminSignUpScreen';
import PatientSignUpScreen from '../screens/PatientSignUpScreen.js/PatientSignUpScreen';
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen/ForgottenPasswordScreen';
import FilmPageScreen from '../screens/FilmPageScreen/FilmPageScreen';
import AddFilmScreen from '../screens/AddFilmScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="AdminSignUpScreen" component={AdminSignUpScreen}/>
            <Stack.Screen name="PatientSignUpScreen" component={PatientSignUpScreen}/>
            <Stack.Screen name="ForgottenPasswordScreen" component={ForgottenPasswordScreen}/>
            <Stack.Screen name="FilmPageScreen" component={FilmPageScreen} />
            <Stack.Screen name="AddFilmScreen" component={AddFilmScreen} />
                
               

        </Stack.Navigator>
        
        </NavigationContainer>
    );
};


export default Navigation;