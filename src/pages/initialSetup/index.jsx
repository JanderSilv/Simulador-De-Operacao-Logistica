import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import FowardButton from '../../components/ForwardButton';
import SearchableDropdown from './components/SearchableDropdown';

import { globalStyle } from '../../globalStyles';

const InitialSetup = () => {
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedDestiny, setSelectedDestiny] = useState(null);
    const [name, setName] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (selectedOrigin && selectedDestiny && name) setIsDisabled(false);
        };
        CheckInputs();
    }, [selectedDestiny, selectedOrigin, name]);

    return (
        <View
            style={{
                paddingTop: 40,
                flex: 1,
            }}
        >
            <View
                style={{
                    marginBottom: 70,
                    justifyContent: 'space-around',
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: 40,
                    }}
                >
                    <Text>Nome do cliente</Text>
                    <TextInput
                        style={[
                            {
                                width: '90%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Indique o destino da operação</Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <SearchableDropdown
                            origin
                            setOrigin={setSelectedOrigin}
                        />
                        <MaterialIcons
                            name="compare-arrows"
                            size={40}
                            color={'gray'}
                        />
                        <SearchableDropdown setDestiny={setSelectedDestiny} />
                    </View>
                </View>
            </View>
            <FowardButton
                disabled={isDisabled ? true : false}
                page="ListSteps"
                style={{ width: 100 }}
            />
        </View>
    );
};

export default InitialSetup;
