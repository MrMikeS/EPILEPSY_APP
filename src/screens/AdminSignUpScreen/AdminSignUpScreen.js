import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const AdminSignUpScreen = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [gender, setGender] = useState('');
    const navigation = useNavigation();
    
  
 
    const onRegisterPressed = () => {
        console.warn("Register");
        navigation.navigate('FilmPageScreen');

    };

    
    
  
 



    return (
        <View style={styles.root}>
            <Text style={styles.title}> Admin Sign Up </Text>

            <CustomInput
             placeholder ="Full Name"
              value ={fullname} 
              setValue = {setFullname}
            
            />
            <CustomInput
             placeholder = "Username"
              value = {username}
               setValue = {setUsername} 
               
           />
            <CustomInput
             placeholder = "Email"
              value = {email}
               setValue = {setEmail} 
               
           />
            <CustomInput
             placeholder = "Password"
              value = {password}
               setValue = {setPassword} 
               secureTextEntry ={true}
               
           />

            <CustomInput
             placeholder = "Re-Enter Password"
              value = {passwordRepeat}
               setValue = {setPasswordRepeat} 
               secureTextEntry = {true}
               
           />

            <CustomInput
             placeholder = "Gender"
              value = {gender}
               setValue = {setGender} 
               
           />





           <CustomButton text = "Register" onPress ={onRegisterPressed} />

           <Text> By registering, you agree to the terms and conditions of the application </Text>

      

           
        </View>
    );
};
//styles main page and title
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    
    logo: {
        width : '70%',
        maxWidth: 300,
        maxHeight : 200,

    },
    title: {
        fontSize:24,
        fontWeight:'bold',
        color: '#9932CC',
        margin: 10,


    },
});

export default AdminSignUpScreen;