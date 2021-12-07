import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../assets/images/Applogo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomButton2 from '../components/CustomButton2';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
 
    const onSignInPressed = () => {
        console.warn("Sign in");
        //validate User
        navigation.navigate('FilmPageScreen');
    };

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
        navigation.navigate('ForgottenPasswordScreen');
    };

    const onSignUpPressed = () => {
        console.warn("Sign Up Pressed");
        navigation.navigate('PatientSignUpScreen');
    };
    const onAdminSignUpPressed = ()=> {
        console.warn("Admin screen pressed");
        navigation.navigate("AdminSignUpScreen")
    } 

    return (
        <View style={styles.root}>
            <Image source={Logo} styles={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/> 

            <CustomInput
             placeholder ="Username"
              value ={username} 
              setValue = {setUsername}
              secureTextEntry={false}
            />
            <CustomInput
             placeholder = "Password"
              value = {password}
               setValue = {setPassword} 
               secureTextEntry = {true}
           />

           <CustomButton text = "Sign In" onPress ={onSignInPressed} />

           <CustomButton2 text = "Forgot Password?" onPress={onForgotPasswordPressed} />

           <CustomButton text = "Dont have an account? Create one" onPress={onSignUpPressed}/>
           <CustomButton2 text = "Admin Sign Up" onPress={onAdminSignUpPressed}/>

           
        </View>
    );
};
//styles main page and logo
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
});

export default SignInScreen