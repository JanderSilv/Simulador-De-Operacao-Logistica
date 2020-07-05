import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';

import FowardButton from '../../components/ForwardButton';
import StepsContext from '../../contexts/steps';
import { style } from '../../globalStyles';

const EmployeeCost = ({ route }) => {
    const { tasks, CheckTasks } = useContext(StepsContext);
    const [data] = useState(route.params);

    const handleCompleteTask = () => {
        CheckTasks();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.index}° Etapa: ${data.data}`}</Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: 'space-around' }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Hora/Salário {'\n'} Assistente de Monitoramento
                    </Text>
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
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Hora/Salário {'\n'} Auxiliar de Operação Logística
                    </Text>
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

export default EmployeeCost;
