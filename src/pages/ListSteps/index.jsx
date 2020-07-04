import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { style } from '../../globalStyles';

const ListSteps = () => {
    const [steps, setSteps] = useState([1]);
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
            console.log(aux);
            setSteps(aux);
        }
    };

    const handleRenderSteps = ({ item }) => {
        // console.log('oi: ' + item);

        return (
            <View
                key={item}
                style={{
                    // width: '80%',
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                {item === 1 ? null : (
                    <AntDesign name="arrowdown" size={35} color="gray" />
                )}
                <Text style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                    {`${item}° Etapa`}
                </Text>
                <TextInput
                    style={{
                        width: '100%',
                        marginBottom: 10,
                        ...style.inputContainer,
                    }}
                />
            </View>
        );
    };

    return (
        <View
            style={{
                paddingTop: Constants.statusBarHeight + 40,
                flex: 1,
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    Liste as etapas da operação
                </Text>
                <FlatList
                    data={steps}
                    keyExtractor={(step) => step}
                    renderItem={handleRenderSteps}
                    style={{ width: '100%', paddingHorizontal: '10%' }}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Feather name="more-horizontal" size={40} color="gray" />
                <TouchableOpacity onPress={addStep}>
                    <Text>Adicionar nova etapa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={removeStep}>
                    <Text>Remover última etapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ListSteps;
