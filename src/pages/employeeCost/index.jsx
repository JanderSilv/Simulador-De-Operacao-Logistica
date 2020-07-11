import React, { useState, useContext, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StepsContext from '../../contexts/steps';
import OperationReportContext from '../../contexts/operationReport';

import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

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
                    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text
                            style={{ fontSize: 16 }}
                        >{`${data.name}: ${data.value}`}</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: 'space-around' }}>
                        <View style={{ marginTop: 20, alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>
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
                        <View style={{ marginTop: 20, alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>
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
                    <FowardButton
                        // disabled={isDisabled ? true : false}
                        disabledStyle={{ marginTop: 40 }}
                        style={{ marginTop: 40 }}
                        action={handleEmployeeData}
                        // page="OperationReport"
                        // params={data}
                        title={'Finalizar Etapa'}
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
                    <Text>
                        {!CheckTasks()
                            ? 'Cadastro Completo'
                            : 'Etapa concluída'}
                    </Text>
                    <FowardButton
                        style={{ marginTop: 40 }}
                        action={handleCompleteSimulation}
                        title={!CheckTasks() ? 'Finalizar' : 'Avançar'}
                    />
                </View>
            )}
        </View>
    );
};

export default EmployeeCost;
