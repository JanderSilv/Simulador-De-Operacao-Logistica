import React from 'react';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    stepData: {
        marginBottom: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
    },

    officeContainer: {
        width: '100%',
        alignItems: 'center',
    },

    operationTimeContainer: {
        width: '100%',
        marginTop: 30,
        maxHeight: 300,
        flex: 1,
        justifyContent: 'space-around',
    },

    operationTimeTitle: {
        marginBottom: 20,
        fontSize: 16,
        textAlign: 'center',
    },

    daysContainer: {
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
