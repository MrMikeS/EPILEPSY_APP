import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress , text}) => {
    return (
        <Pressable onPress={onPress} style = {styles.container}>
            <Text style = {styles.text}>{text}</Text>
        </Pressable>
    );
};

// styling the sign up button
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#9932CC',
        width: '100%',
        padding: 15,
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 5,



    },
    text: {
        fontWeight: 'bold',
        color: 'white',


    },
});
export default CustomButton