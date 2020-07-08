import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Offices from '../../data/offices.json';

import SearchableDropdown from '../../components/SearchableDropdown';
import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

const ShippingCost = ({ route }) => {
    const [data] = useState(route.params);
    const [vehicle, setVehicle] = useState(null);
    const [office, setOffice] = useState(null);

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
                    />
                </View>
            </View>
            <FowardButton
                style={{ marginTop: 40 }}
                // action={submitSteps}
                page="EmployeeCost"
                params={data}
            />
        </View>
    );
};

export default ShippingCost;
