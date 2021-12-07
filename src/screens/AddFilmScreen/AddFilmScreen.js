import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AddFilmScreen = () => {
    const [filmName, setfilmName] = useState('');
    const [numberOfFlashes, setnumberOfFlashes] = useState('');
    const [timesOfFlashes, settimesOfFlashes] = useState('');
    const [filmStory, setFilmstory] = useState('');
    const [Image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [isFavourite, setisFavourite] = useState('');
    const [isFeatured, setisFeatured] = useState('');

    const navigation = useNavigation();
    
  
 
    const onRegisterPressed = () => {
    
        console.warn("Film Added");
        navigation.navigate('FilmPageScreen');

    };

    
return (
    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}> Create Your Account </Text>

        <CustomInput
         placeholder ="Film Name"
          value ={filmName} 
          setValue = {setfilmName}
        
        />
        <CustomInput
         placeholder = "How Many Flashes are there?"
          value = {numberOfFlashes}
           setValue = {setnumberOfFlashes} 
           
       />
        <CustomInput
         placeholder = "What times are the flashes?"
          value = {timesOfFlashes}
           setValue = {settimesOfFlashes} 
           
       />
        <CustomInput
         placeholder = "Tell us about the film story"
          value = {filmStory}
           setValue = {setFilmstory} 
           
           
       />

        <CustomInput
         placeholder = "Upload a picture of the movie?"
          value = {Image}
           setValue = {setImage} 
           
           
       />
       <CustomInput
         placeholder = "Whats the Film Category"
          value = {category}
           setValue = {setCategory} 
           
       />

        <CustomInput
         placeholder = "Is this a favourite of yours?"
          value = {isFavourite}
           setValue = {setisFavourite} 
           
       />
       <CustomInput
         placeholder = "Is this film featured?"
          value = {isFeatured}
           setValue = {setisFeatured} 
           
       />
       
       <CustomButton text = "Add Film" onPress ={onRegisterPressed} />

       <Text> Enjoy our application :)  </Text>

  

       
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

export default AddFilmScreen;