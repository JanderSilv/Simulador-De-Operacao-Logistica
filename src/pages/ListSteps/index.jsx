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
import { globalStyle } from '../../globalStyles';
import { style } from './styles';

const HandleRenderSteps = ({ value, name, handleInput }) => (
    <View style={style.stepsContainer}>
        <Text style={{ marginBottom: 5, alignSelf: 'flex-start' }}>{name}</Text>
        <TextInput
            style={[style.inputContainer, globalStyle.inputContainer]}
            value={value}
            onChangeText={(text) => {
                handleInput(text);
            }}
        />
    </View>
);

const ListSteps = () => {
    const { setTasks } = useContext(StepsContext);
    const [steps, setSteps] = useState([
        { name: `1° Etapa`, value: ``, isDone: false },
    ]);
    // console.log(steps);

    const handleChanges = (index, value, name) => {
        let copyInputs = [...steps];
        let objChangeCopy = {
            ...copyInputs[index],
            value,
        };
        copyInputs.splice(index, 1, objChangeCopy);
        setSteps(copyInputs);
    };

    const addStep = () => {
        const newInput = {
            name: `${steps.length + 1}° Etapa`,
            value: ``,
            isDone: false,
        };
        let copyInputs = [...steps];
        copyInputs.push(newInput);
        setSteps(copyInputs);
    };

    const removeStep = () => {
        if (steps.length > 1) {
            // console.log(steps);
            let aux = steps.slice(0, -1);
            setSteps(aux);
        }
    };

    const submitSteps = () => {
        // console.log(steps);
        setTasks(steps);
    };

    const handleSeparatorSteps = () => (
        <View style={{ alignItems: 'center' }}>
            <AntDesign name="arrowdown" size={35} color="gray" />
        </View>
    );

    const handleFooter = () => (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Feather name="more-horizontal" size={40} color="gray" />
            <View style={style.buttonsContainer}>
                {steps.length !== 1 && (
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', ...style.button }}
                        onPress={removeStep}
                    >
                        <Text style={{ color: 'white' }}>
                            Remover última etapa
                        </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={{ backgroundColor: 'green', ...style.button }}
                    onPress={addStep}
                >
                    <Text style={{ color: 'white' }}>Adicionar nova etapa</Text>
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
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <HandleRenderSteps
                        name={item.name}
                        value={item.value}
                        position={index}
                        handleInput={(value) =>
                            handleChanges(index, value, item.name)
                        }
                    />
                )}
                ItemSeparatorComponent={handleSeparatorSteps}
                ListFooterComponent={handleFooter}
                style={style.flatList}
            />
        </View>
    );
};

export default ListSteps;
