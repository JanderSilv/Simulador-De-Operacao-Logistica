import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import OperationReportContext from '../../contexts/operationReport';
import CitysData from '../../data/citys.json';
import EmployeesData from '../../data/employees.json';

import FowardButton from '../../components/ForwardButton';
import SearchableDropdown from '../../components/SearchableDropdown';

import { globalStyle } from '../../globalStyles';

const InitialSetup = () => {
    const { setInitialSetup } = useContext(OperationReportContext);

    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedDestiny, setSelectedDestiny] = useState(null);
    const [name, setName] = useState('');
    const [hotel, setHotel] = useState('');
    const [taxi, setTaxi] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (selectedOrigin && selectedDestiny && name && hotel && taxi)
                setIsDisabled(false);
            else setIsDisabled(true);
        };
        CheckInputs();
    }, [selectedDestiny, selectedOrigin, name, hotel, taxi]);

    const handleOperationData = () => {
        const operationData = {
            client: name,
            origin: selectedOrigin,
            destiny: selectedDestiny,
            hotelPrice: parseFloat(hotel),
            taxiPrice: parseFloat(taxi),
        };
        setInitialSetup(operationData);
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
                            data={CitysData}
                            setState={setSelectedOrigin}
                            placeholder={'Origem'}
                        />
                        <MaterialIcons
                            name="compare-arrows"
                            size={40}
                            color={'gray'}
                        />
                        <SearchableDropdown
                            data={CitysData}
                            setState={setSelectedDestiny}
                            placeholder={'Destino'}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 40,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <View>
                        <Text>Valor diário do Hotel</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={[
                                {
                                    width: '100%',
                                    marginTop: 5,
                                },
                                globalStyle.inputContainer,
                            ]}
                            value={hotel}
                            onChangeText={setHotel}
                        />
                    </View>
                    <View>
                        <Text>Valor médio do Taxi</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={[
                                {
                                    width: '100%',
                                    marginTop: 5,
                                },
                                globalStyle.inputContainer,
                            ]}
                            value={taxi}
                            onChangeText={setTaxi}
                        />
                    </View>
                </View>
            </View>
            <FowardButton
                // disabled={isDisabled ? true : false}
                page="ListSteps"
                style={{ width: 100 }}
                action={handleOperationData}
            />
        </View>
    );
};

export default InitialSetup;
