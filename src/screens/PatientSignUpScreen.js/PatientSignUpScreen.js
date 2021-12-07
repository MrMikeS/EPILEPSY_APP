import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const PatientSignUpScreen = () => {
    const [Patientfullname, setPatientFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [gender, setGender] = useState('');
    const [DOB, setDOB] = useState('');
    const [typeOfSeizure,setTypeOfSeziure] = useState('');
    const [epilepsyTimes, setEpilepsyTimes] = useState('');
    const [epilepsyFrequencies, setEpilepsyFrequencies] = useState('');
    const [howLongHaveYouHadIt, setHowLongHaveYouHadIt] = useState('');
    const [whatTriggersIt, setWhatTriggersIt] = useState('');
    const [AnyKindOfStressOrMentalIlness,setAnyKindOfStressOrMentalIllness] = useState('');

    const navigation = useNavigation();
    
  
 
    const onRegisterPressed = () => {
        console.warn("Register");
        navigation.navigate('FilmPageScreen');

    };

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}> Create Your Account </Text>

            <CustomInput
             placeholder =" Patient Full Name"
              value ={Patientfullname} 
              setValue = {setPatientFullname}
            
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

            <CustomInput
             placeholder = "Date Of Birth"
              value = {DOB}
               setValue = {setDOB} 
               
           />
           <CustomInput
             placeholder = "Type of Seizure Suffered"
              value = {typeOfSeizure}
               setValue = {setTypeOfSeziure} 
               
           />
           <CustomInput
             placeholder = "Epilepsy Times"
              value = {epilepsyTimes}
               setValue = {setEpilepsyTimes} 
               
           />
           <CustomInput
             placeholder = "Epilepsy Frequecies"
              value = {epilepsyFrequencies}
               setValue = {setEpilepsyFrequencies} 
               
           />
           <CustomInput
             placeholder = "How long have you had it?"
              value = {howLongHaveYouHadIt}
               setValue = {setHowLongHaveYouHadIt} 
               
           />
           <CustomInput
             placeholder = "What triggers it?"
              value = {whatTriggersIt}
               setValue = {setWhatTriggersIt} 
               
           />
           <CustomInput
             placeholder = "Have you suffered from Mental Health Problems?"
              value = {AnyKindOfStressOrMentalIlness}
               setValue = {setAnyKindOfStressOrMentalIllness} 
               
           />
           <CustomButton text = "Register" onPress ={onRegisterPressed} />

           <Text> By registering, you agree to the terms and conditions of the application </Text>

      

           
        </View>
        </ScrollView>
    );
};
//styles main page and title
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

export default PatientSignUpScreen;