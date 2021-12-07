import React, {useState} from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput';

const Srchscreen = () => {
    
   
    
    
    return (
      

               <View>
                 
           <CustomInput 
            placeholder = "Search Our Database"
            
           
             />
             
            <Image source={require('../Homescreen/search.png')} 
             style ={{height:30, width:30, marginTop:20, position:"absolute", right:30,}}
                />
               



                   </View>
                 

    )};

export default Srchscreen;