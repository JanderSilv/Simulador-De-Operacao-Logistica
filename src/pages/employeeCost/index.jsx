import React, { useState, useContext, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StepsContext from '../../contexts/steps';
import OperationReportContext from '../../contexts/operationReport';

import FowardButton from '../../components/ForwardButton';

const EmployeeCost = ({ route }) => {
    const { setEmployeeCost, handleSteps, GenerateReport } = useContext(
        OperationReportContext
    );
    const { tasks, setTasks, CheckTasks } = useContext(StepsContext);

    const navigation = useNavigation();

    const [data] = useState(route.params);
    const [monitoringAssistant, setMonitoringAssistant] = useState(true);
    const [logisticOperation, setLogisticOperation] = useState(true);

    const [isCompleted, setIsCompleted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const CheckInputs = () => {
            if (monitoringAssistant && logisticOperation) setIsDisabled(false);
            else setIsDisabled(true);
        };
        CheckInputs();
    }, [monitoringAssistant, logisticOperation]);

    // const handleMonitoringAssistantChange = () => {

    // }
    const handleCompleteTask = () => {
        let auxData = data;
        auxData.isDone = true;
        let auxTask = tasks;
        auxTask[tasks.findIndex((item) => item.name === data.name)] = auxData;
        // console.log(auxTask);
        setTasks(auxTask);
    };

    const handleEmployeeData = () => {
        const employeeData = {
            monitoringAssistant: monitoringAssistant === true ? 1 : 0,
            logisticOperation: logisticOperation === true ? 1 : 0,
        };
        setEmployeeCost(employeeData);
        handleCompleteTask();
        setIsCompleted(true);
    };

    const handleCompleteSimulation = () => {
        if (CheckTasks()) {
            handleSteps(data);
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'GarrisonCost',
                    },
                ],
            });
        } else {
            GenerateReport(data);
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'OperationReport',
                    },
                ],
            });
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {!isCompleted ? (
                <>
                    <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                        <Text
                            style={{ fontSize: 16 }}
                        >{`${data.name}: ${data.value}`}</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            paddingTop: 20,
                            flex: 0.4,
                            borderTopWidth: 1,
                            borderTopColor: '#C6C6C6',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Text
                            style={{
                                width: '85%',
                                fontSize: 16,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}
                        >
                            Desmaque caso a etapa não conte com um dos
                            funcionários
                        </Text>
                        <View
                            style={{
                                marginVertical: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}
                        >
                            <View
                                style={{
                                    width: '45%',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    onPress={() =>
                                        monitoringAssistant
                                            ? setMonitoringAssistant(false)
                                            : setMonitoringAssistant(true)
                                    }
                                    style={{
                                        marginBottom: 5,
                                        fontSize: 16,
                                        textAlign: 'center',
                                    }}
                                >
                                    Assistente de Monitoramento
                                </Text>
                                <CheckBox
                                    value={monitoringAssistant}
                                    onValueChange={() =>
                                        monitoringAssistant
                                            ? setMonitoringAssistant(false)
                                            : setMonitoringAssistant(true)
                                    }
                                />
                            </View>
                            <View
                                style={{ width: '45%', alignItems: 'center' }}
                            >
                                <Text
                                    onPress={() =>
                                        logisticOperation
                                            ? setLogisticOperation(false)
                                            : setLogisticOperation(true)
                                    }
                                    style={{
                                        marginBottom: 5,
                                        fontSize: 16,
                                        textAlign: 'center',
                                    }}
                                >
                                    Auxiliar de Operação Logística
                                </Text>
                                <CheckBox
                                    value={logisticOperation}
                                    onValueChange={() =>
                                        logisticOperation
                                            ? setLogisticOperation(false)
                                            : setLogisticOperation(true)
                                    }
                                />
                            </View>
                        </View>
                    </View>
                    <FowardButton
                        title={'Finalizar Etapa'}
                        action={handleEmployeeData}
                        style={{ marginTop: 40 }}
                    />
                </>
            ) : (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 18 }}>
                        {!CheckTasks()
                            ? 'Cadastro Completo'
                            : 'Etapa concluída'}
                    </Text>
                    <FowardButton
                        style={{ marginTop: 50 }}
                        action={handleCompleteSimulation}
                        title={!CheckTasks() ? 'Finalizar' : 'Avançar'}
                    />
                </View>
            )}
        </View>
    );
};

export default EmployeeCost;
