import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { YellowBox } from 'react-native';

import Offices from '../../data/offices.json';

import OperationReportContext from '../../contexts/operationReport';
import StepsContext from '../../contexts/steps';

import SearchableDropdown from '../../components/SearchableDropdown';
import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';
import { style } from './styles';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const GarrisonCost = () => {
    const navigation = useNavigation();

    const { setGarrisonCost } = useContext(OperationReportContext);
    const { GetTask } = useContext(StepsContext);

    const [data, setData] = useState({});
    const [office, setOffice] = useState(null);
    const [days, setDays] = useState('');
    const [nights, setNights] = useState('');
    const [normalOpTime, setNormalOpTime] = useState('');
    const [fiftyOpTime, setFiftyOpTime] = useState('');
    const [hundredOpTime, setHundredOpTime] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (normalOpTime && fiftyOpTime && hundredOpTime && days && nights)
                setIsDisabled(false);
            else setIsDisabled(true);
        };
        CheckInputs();
    }, [normalOpTime, fiftyOpTime, hundredOpTime, days, nights]);

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

    const handleOperationData = () => {
        const operationData = {
            days: parseInt(days),
            nights: parseInt(nights),
            office,
            normalOpTime: parseFloat(normalOpTime),
            fiftyOpTime: parseFloat(fiftyOpTime),
            hundredOpTime: parseFloat(hundredOpTime),
        };
        // console.log(operationData);
        setGarrisonCost(operationData);
    };

    return (
        <ScrollView
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            style={{
                paddingTop: 40,
            }}
        >
            <View style={style.stepData}>
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.name}: ${data.value}`}</Text>
            </View>
            <View style={style.officeContainer}>
                <Text>Selecione a Filial</Text>
                <SearchableDropdown
                    data={Offices}
                    setState={setOffice}
                    placeholder={'Filial'}
                    containerStyle={{ width: '70%', marginTop: 5 }}
                    autoCapitalize={'characters'}
                />
            </View>
            <View style={style.daysContainer}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text>Quantidade de dias</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={[
                            {
                                width: '100%',
                                marginTop: 5,
                            },
                            globalStyle.inputContainer,
                        ]}
                        value={days}
                        onChangeText={(text) => setDays(text)}
                    />
                </View>
                <View>
                    <Text>Quantidade Pernoite</Text>
                    <TextInput
                        keyboardType="numeric"
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
            <View style={style.operationTimeContainer}>
                <Text style={style.operationTimeTitle}>
                    Tempo de Operação em horas:
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text>Tempo de Operação (normal)</Text>
                        <TextInput
                            keyboardType="numeric"
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
                    <View style={{ alignItems: 'center' }}>
                        <Text>Tempo de Operação (50%)</Text>
                        <TextInput
                            keyboardType="numeric"
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
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Tempo de Operação (100%)</Text>
                    <TextInput
                        keyboardType="numeric"
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
                action={handleOperationData}
                page="ShippingCost"
                params={data}
            />
        </ScrollView>
    );
};

export default GarrisonCost;
