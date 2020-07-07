import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FowardButton from '../../components/ForwardButton';
import StepsContext from '../../contexts/steps';
import { globalStyle } from '../../globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EmployeeCost = ({ route }) => {
    const { tasks, setTasks, CheckTasks } = useContext(StepsContext);
    const [data] = useState(route.params);
    const [isCompleted, setIsCompleted] = useState(false);

    const navigation = useNavigation();

    const handleCompleteTask = () => {
        let auxData = data;
        auxData.isDone = true;
        let auxTask = tasks;
        auxTask[data.index - 1] = auxData;
        // console.log(auxTask);
        setTasks(auxTask);

        // let index = .indexOf(data.index);

        // if (index !== -1) {
        //     items[index] = 1010;
        // }

        // setTasks()
        if (CheckTasks()) navigation.navigate('GarrisonCost');
        else setIsCompleted(true);
    };

    return (
        <View style={{ flex: 1 }}>
            {!isCompleted ? (
                <>
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
                                    globalStyle.inputContainer,
                                ]}
                            />
                        </View>
                        <View style={{ marginTop: 20, alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>
                                Hora/Salário {'\n'} Auxiliar de Operação
                                Logística
                            </Text>
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
                    <TouchableOpacity onPress={handleCompleteTask}>
                        <Text>Finalizar</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <View>
                    <Text>Cadastro completo</Text>
                </View>
            )}
        </View>
    );
};

export default EmployeeCost;
