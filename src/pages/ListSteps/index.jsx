import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

import FowardButton from '../../components/ForwardButton';
import StepsContext from '../../contexts/steps';
import { style } from '../../globalStyles';

const ListSteps = () => {
    const { setTasks } = useContext(StepsContext);
    const [steps, setSteps] = useState([1]);
    const [stepsData, setStepsData] = useState([]);
    // console.log(steps);

    const addStep = () => {
        if (steps.length === 0) {
            setSteps([1]);
        } else {
            const aux = [...steps, steps[steps.length - 1] + 1];
            setSteps(aux);
        }
    };

    const removeStep = () => {
        if (steps.length !== 0) {
            console.log(steps);
            let aux = steps.slice(0, -1);
            setSteps(aux);
        }
    };

    const submitSteps = () => {
        let index = 0;
        let aux = [];
        stepsData.map((item) => {
            aux.push({ index: steps[index], data: item, isDone: false });
            index++;
        });
        setTasks(aux);
    };

    const handleRenderSteps = ({ index, item }) => (
        <View
            key={item}
            style={{
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <Text style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                {`${item}° Etapa`}
            </Text>
            <TextInput
                style={{
                    width: '100%',
                    marginBottom: 10,
                    ...style.inputContainer,
                }}
                value={stepsData[index]}
                onChangeText={(text) => {
                    let aux = stepsData;
                    aux[index] = text;
                    setStepsData(aux);
                }}
            />
        </View>
    );

    const handleSeparatorSteps = () => (
        <View style={{ alignItems: 'center' }}>
            <AntDesign name="arrowdown" size={35} color="gray" />
        </View>
    );

    return (
        <View
            style={{
                paddingTop: Constants.statusBarHeight + 20,
                flex: 1,
            }}
        >
            <View style={{ marginBottom: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    Liste as etapas da operação
                </Text>
            </View>
            <FlatList
                data={steps}
                keyExtractor={(item) => item.toString()}
                renderItem={handleRenderSteps}
                ItemSeparatorComponent={handleSeparatorSteps}
                style={{
                    width: '100%',
                    paddingHorizontal: '10%',
                    // backgroundColor: 'red',
                    flexGrow: 0,
                }}
            />
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Feather name="more-horizontal" size={40} color="gray" />
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            backgroundColor: 'red',
                            borderRadius: 10,
                        }}
                        onPress={removeStep}
                    >
                        <Text style={{ color: 'white' }}>
                            Remover última etapa
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            backgroundColor: 'green',
                            borderRadius: 10,
                        }}
                        onPress={addStep}
                    >
                        <Text style={{ color: 'white' }}>
                            Adicionar nova etapa
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        backgroundColor: 'green',
                        borderRadius: 10,
                    }}
                    onPress={() => console.log(stepsData)}
                >
                    <Text style={{ color: 'white' }}>Finalizar</Text>
                </TouchableOpacity> */}
                <FowardButton
                    style={{ marginTop: 40 }}
                    action={submitSteps}
                    page="GarrisonCost"
                />
            </View>
        </View>
    );
};

export default ListSteps;
