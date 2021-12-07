import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';



const ForgottenPasswordScreen = () => {
    
    const [email, setEmail] = useState('');
    
    
  
 
    const sendVerificationCodePressed = () => {
        console.warn("send verfication code");
    };


    return (
        <View style={styles.root}>
            <Text style={styles.title}> Forgotten Password? </Text>

            <CustomInput
             placeholder ="Email"
              value ={email} 
              setValue = {setEmail}
            
            />
           





           <CustomButton text = "Send Verification Code" onPress ={sendVerificationCodePressed} />

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

export default ForgottenPasswordScreen;