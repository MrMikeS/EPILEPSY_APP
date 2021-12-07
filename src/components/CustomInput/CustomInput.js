import React from'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value,setValue, placeholder, secureTextEntry }) => { 
    return (
        <View style = {styles.container}> 
            <TextInput
             value = {value}
             onChangeText ={setValue}
             placeholder = {placeholder} 
             styles = {styles.input}
             secureTextEntry= {secureTextEntry}
             />
        </View>
    )
}

// styles the input for username and password
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderColor: '#e8e8e8',
        borderRadius:5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 7.5,
    },
    input: {},

})

export default CustomInput