import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForgottenPasswordScreen from '../ForgottenPasswordScreen/ForgottenPasswordScreen';
import Fscreen from '../fscreen/Fscreen';
import Homescreen from '../Homescreen/Homescreen';
import Setsscreen from '../Setscreen/Setscreen';
import Srchscreen from '../SrchScreen/SrchScreen';

function HomeScreen() {
  return (

   <Homescreen/> // go's to logged in main screen
  );
}


function SettingsScreen() {
  return (
    <Setsscreen />                // goes to setting screen
  );
}
function FavouritesScreen() {
    return (
      <Fscreen/>
    );
  }
  function SearchScreen() { ///// goes to search screen
    return (
     <Srchscreen />
    );
  }

const Tab = createBottomTabNavigator();           // nav for logged in homescreen

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name ="Favourites" component ={FavouritesScreen} options={{ headerShown: false }}/>

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    
    title: {
        fontSize:24,
        fontWeight:'bold',
        color: '#8176EE',
        margin: 10,


    },
});
