import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import OperationReportContext from '../../contexts/operationReport';

// import { Container } from './styles';

const OperationReport = () => {
    const { report } = useContext(OperationReportContext);
    const { client, origin, destiny, steps } = report;
    const [total, setTotal] = useState(null);

    useEffect(() => {
        setTotal(steps.reduce(getTotal, 0));
        function getTotal(total, item) {
            return total + item.value;
        }
    }, []);

    return (
        <ScrollView style={{ marginTop: 40, flex: 1 }}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>{client}</Text>
            <View
                style={{
                    marginTop: 40,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <Text style={{ maxWidth: 80, textAlign: 'center' }}>
                    {origin}
                </Text>
                <MaterialIcons name="compare-arrows" size={30} color={'gray'} />
                <Text style={{ maxWidth: 80, textAlign: 'center' }}>
                    {destiny}
                </Text>
            </View>
            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text>Custo Total:</Text>
                <Text style={{ fontSize: 18 }}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(total)}
                </Text>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20, flex: 1 }}>
                <Text>Custos:</Text>
                {steps.map((step) => (
                    <View
                        key={step.stepNumber}
                        style={{
                            marginTop: 20,
                            flex: 1,
                        }}
                    >
                        <Text>{`> ${step.stepNumber}`}</Text>
                        <View
                            style={{
                                maxHeight: 200,
                                paddingLeft: 20,
                                flex: 1,
                                justifyContent: 'space-around',
                            }}
                        >
                            <Text>{`Guarnição: ${Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(step.garrison)}`}</Text>
                            <Text>{`Frota: R$ ${step.shipping}`}</Text>
                            <Text>{`Refeição: R$ ${step.meal}`}</Text>
                            <Text>{`Hospedagem: R$ ${step.stay}`}</Text>
                            <Text>{`Táxi: R$ ${step.taxi}`}</Text>
                            {/* <Text>{`Mão de Obra: R$ ${step.shipping}`}</Text> */}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default OperationReport;
