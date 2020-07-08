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
    const [normalOpTime, setNormalOpTime] = useState('');
    const [fiftyOpTime, setFiftyOpTime] = useState('');
    const [hundredOpTime, setHundredOpTime] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (normalOpTime && fiftyOpTime && hundredOpTime)
                setIsDisabled(false);
        };
        CheckInputs();
    }, [normalOpTime, fiftyOpTime, hundredOpTime]);

    // Recarrega os dados quando retorna em outras etapas
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleSetData();
        });

        return unsubscribe;
    }, [navigation]);

    const handleSetData = () => {
        setData(GetTask());
    };

    return (
        <View
            style={{
                paddingTop: 40,
                flex: 1,
            }}
        >
            <View
                style={{
                    paddingHorizontal: 20,
                    justifyContent: 'space-around',
                }}
            >
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.name}: ${data.value}`}</Text>
            </View>
            <View
                style={{
                    paddingTop: 20,
                    maxHeight: 300,
                    flex: 1,
                    justifyContent: 'space-around',
                }}
            >
                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                    Tempo de Operação em horas:
                </Text>
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
                        value={normalOpTime}
                        onChangeText={(text) => setNormalOpTime(text)}
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
                        value={fiftyOpTime}
                        onChangeText={(text) => setFiftyOpTime(text)}
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
                        value={hundredOpTime}
                        onChangeText={(text) => setHundredOpTime(text)}
                    />
                </View>
            </View>
            <FowardButton
                // disabled={isDisabled ? true : false}
                disabledStyle={{ marginTop: 40 }}
                style={{ marginTop: 40 }}
                // action={submitSteps}
                page="ShippingCost"
                params={data}
            />
        </View>
    );
};

export default GarrisonCost;
