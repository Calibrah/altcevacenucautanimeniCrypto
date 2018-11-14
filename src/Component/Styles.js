import React from 'react';
import  { StyleSheet } from 'react-native';

export const styles=StyleSheet.create({
    container: {
        marginTop: '40%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputContainer: {
        justifyContent: 'center',
        width: '80%',
    },
    input: {
        width: '100%',
        height: 30,
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        margin: 5,
        paddingLeft: 10,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        marginTop: 15,
        backgroundColor: 'steelblue'
    },
    buttonText: {
        fontFamily: 'Avenir'
    }
})