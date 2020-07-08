import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import Offices from '../../data/offices.json';

import SearchableDropdown from '../../components/SearchableDropdown';
import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

const ShippingCost = ({ route }) => {
    const [data] = useState(route.params);
    const [nights, setNights] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [office, setOffice] = useState(null);
    const [toll, setToll] = useState('');
    const [fuel, setFuel] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (nights && vehicle && office && toll && fuel)
                setIsDisabled(false);
            else setIsDisabled(true);
        };
        CheckInputs();
    }, [nights, vehicle, office, toll, fuel]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.name}: ${data.value}`}</Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    // flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <View
                        style={{
                            width: '40%',
                        }}
                    >
                        <Text>Quantidade de Veículos</Text>
                        <TextInput
                            style={{
                                width: '100%',
                                marginTop: 5,
                                ...globalStyle.inputContainer,
                            }}
                            value={vehicle}
                            onChangeText={setVehicle}
                        />
                    </View>
                    <View
                        style={{
                            width: '40%',
                        }}
                    >
                        <Text>Quantidade Pernoite</Text>
                        <TextInput
                            style={[
                                {
                                    width: '100%',
                                    marginTop: 5,
                                },
                                globalStyle.inputContainer,
                            ]}
                            value={nights}
                            onChangeText={(text) => setNights(text)}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        marginTop: 20,
                        alignItems: 'center',
                    }}
                >
                    <Text>Selecione a Filial</Text>
                    <SearchableDropdown
                        data={Offices}
                        setState={setOffice}
                        placeholder={'Filial'}
                        containerStyle={{ width: '70%' }}
                        autoCapitalize={'characters'}
                    />
                </View>
            </View>
            <Text style={{ marginTop: 20, fontSize: 16, alignSelf: 'center' }}>
                Busque os dados no Qalp
            </Text>
            <View style={{ justifyContent: 'space-around' }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Custo total de pedágio</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                        value={toll}
                        onChangeText={(text) => setToll(text)}
                    />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Custo total de Combustível</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                        value={fuel}
                        onChangeText={(text) => setFuel(text)}
                    />
                </View>
            </View>
            <FowardButton
                // disabled={isDisabled ? true : false}
                disabledStyle={{ marginTop: 60 }}
                style={{ marginTop: 60 }}
                // action={submitSteps}
                page="EmployeeCost"
                params={data}
            />
        </View>
    );
};

export default ShippingCost;
