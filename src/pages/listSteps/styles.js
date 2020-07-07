import React from 'react';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    stepsContainer: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },

    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    flatList: {
        width: '100%',
        paddingHorizontal: '10%',
        flexGrow: 0,
        // backgroundColor: 'red',
    },
});
