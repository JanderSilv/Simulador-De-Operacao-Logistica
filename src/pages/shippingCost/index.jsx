import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';

import OperationReportContext from '../../contexts/operationReport';

import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

const ShippingCost = ({ route }) => {
    const { setShippingCost } = useContext(OperationReportContext);

    const [data] = useState(route.params);
    const [vehicle, setVehicle] = useState('');
    const [toll, setToll] = useState('');
    const [fuel, setFuel] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (vehicle && toll && fuel) setIsDisabled(false);
            else setIsDisabled(true);
        };
        CheckInputs();
    }, [vehicle, toll, fuel]);

    const handleShippingData = () => {
        const shippingData = {
            vehicle: parseInt(vehicle),
            toll: parseFloat(toll),
            fuel: parseFloat(fuel),
        };
        setShippingCost(shippingData);
    };

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
                            keyboardType="numeric"
                            style={{
                                width: '100%',
                                marginTop: 5,
                                ...globalStyle.inputContainer,
                            }}
                            value={vehicle}
                            onChangeText={setVehicle}
                        />
                    </View>
                </View>
            </View>
            <Text style={{ marginTop: 20, fontSize: 16, alignSelf: 'center' }}>
                Busque os dados no Qalp
            </Text>
            <View style={{ justifyContent: 'space-around' }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Custo total de pedágio</Text>
                    <TextInput
                        keyboardType="numeric"
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
                        keyboardType="numeric"
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
                action={handleShippingData}
                page="EmployeeCost"
                params={data}
            />
        </View>
    );
};

export default ShippingCost;
