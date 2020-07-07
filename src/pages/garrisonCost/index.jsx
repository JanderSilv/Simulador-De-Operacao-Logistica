import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

import StepsContext from '../../contexts/steps';

import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

const GarrisonCost = () => {
    const navigation = useNavigation();
    const { tasks, GetTask } = useContext(StepsContext);

    const [data, setData] = useState({});

    const handleSetData = () => {
        setData(GetTask());
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleSetData();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View
            style={{
                paddingTop: Constants.statusBarHeight + 40,
                flex: 1,
            }}
        >
            <View
                style={{
                    paddingHorizontal: 20,
                    flex: 0.2,
                    justifyContent: 'space-around',
                }}
            >
                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                    Custo com Guarnição:
                </Text>
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.name}: ${data.value}`}</Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: 'space-around' }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Tempo de Operação (normal)</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                    />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Tempo de Operação (50%)</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                    />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Tempo de Operação (100%)</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                    />
                </View>
            </View>
            <FowardButton
                style={{ marginTop: 40 }}
                // action={submitSteps}
                page="ShippingCost"
                params={data}
            />
        </View>
    );
};

export default GarrisonCost;
