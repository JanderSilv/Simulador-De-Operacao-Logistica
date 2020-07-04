import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import FowardButton from '../../components/ForwardButton';

import { style } from './styles';

const InitialSetup = () => {
    return (
        <View
            style={{
                paddingTop: Constants.statusBarHeight + 40,
                flex: 1,
            }}
        >
            <View
                style={{
                    marginBottom: 100,
                    flex: 0.5,
                    justifyContent: 'space-around',
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Indique o Destino da Operação</Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        <TextInput
                            placeholder="Origem"
                            style={{
                                width: '40%',
                                // flex: 0.45,
                                ...style.inputContainer,
                            }}
                        />
                        <MaterialIcons
                            name="compare-arrows"
                            size={40}
                            color={'gray'}
                        />
                        <TextInput
                            placeholder="Destino"
                            style={{
                                width: '40%',
                                // flex: 0.45,
                                ...style.inputContainer,
                            }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Nome do cliente</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            style.inputContainer,
                        ]}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
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
                                ...style.inputContainer,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: '40%',
                        }}
                    >
                        <Text>Selecione a Filial</Text>
                        <TextInput
                            style={{
                                width: '100%',
                                marginTop: 5,
                                ...style.inputContainer,
                            }}
                        />
                    </View>
                </View>
            </View>
            <FowardButton page="ListSteps" style={{ width: 100 }} />
        </View>
    );
};

export default InitialSetup;
