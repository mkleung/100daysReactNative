import React from 'react'
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Input = props => {
    return (
        <TextInput keyboardType="number-pad" {...props} style={{ ...styles.input, ...props.style }} />
    )

}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderColor: Colors.accent,
        borderWidth: 3,
        marginVertical: 10,
        width: 300,
        borderRadius: 5
    }
});

export default Input;