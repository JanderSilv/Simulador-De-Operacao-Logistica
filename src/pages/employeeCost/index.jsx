import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StepsContext from '../../contexts/steps';
import OperationReportContext from '../../contexts/operationReport';

import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EmployeeCost = ({ route }) => {
    const { setEmployeeCost, handleSteps, GenerateReport } = useContext(
        OperationReportContext
    );
    const { tasks, setTasks, CheckTasks } = useContext(StepsContext);

    const navigation = useNavigation();

    const [data] = useState(route.params);
    const [monitoringAssistant, setMonitoringAssistant] = useState('');
    const [logisticOperation, setLogisticOperation] = useState('');

    const [isCompleted, setIsCompleted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (monitoringAssistant && logisticOperation) setIsDisabled(false);
        };
        CheckInputs();
    }, [monitoringAssistant, logisticOperation]);

    const handleEmployeeData = () => {
        const employeeData = {
            monitoringAssistant,
            logisticOperation,
        };
        setEmployeeCost(employeeData);
    };

    const handleCompleteTask = () => {
        // console.log(tasks);
        handleEmployeeData();
        let auxData = data;
        auxData.isDone = true;
        let auxTask = tasks;
        auxTask[tasks.findIndex((item) => item.name === data.name)] = auxData;
        // console.log(auxTask);
        setTasks(auxTask);

        if (CheckTasks()) {
            navigation.navigate('GarrisonCost');
            handleSteps(data);
        } else {
            setIsCompleted(true);
            GenerateReport(data);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {!isCompleted ? (
                <>
                    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text
                            style={{ fontSize: 16 }}
                        >{`${data.name}: ${data.value}`}</Text>
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
                                value={monitoringAssistant}
                                onChangeText={(text) =>
                                    setMonitoringAssistant(text)
                                }
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
                                value={logisticOperation}
                                onChangeText={(text) =>
                                    setLogisticOperation(text)
                                }
                            />
                        </View>
                    </View>
                    <FowardButton
                        // disabled={isDisabled ? true : false}
                        disabledStyle={{ marginTop: 40 }}
                        style={{ marginTop: 40 }}
                        action={handleCompleteTask}
                        page="OperationReport"
                        // params={data}
                        title={CheckTasks() ? 'Finalizar' : 'Avançar'}
                    />
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
