import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton2 = ({onPress , text}) => {
    return (
        <Pressable onPress={onPress} style = {styles.container}>
            <Text style = {styles.text}>{text}</Text>
        </Pressable>
    );
};

// styling the sign up button
const styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        width: '50%',
        padding: 10,
        marginVertical: 7.5,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:0,



    },
    text: {
        fontWeight: 'bold',
        color: '#C0C0C0',


    },
});
export default CustomButton2