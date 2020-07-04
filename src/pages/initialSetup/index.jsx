import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

// import { Container } from './styles';

const InitialSetup = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: Constants.statusBarHeight + 40, flex: 1 }}>
            <Text>Destino da Operação</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="Origem" style={{}} />
                <MaterialIcons
                    name="compare-arrows"
                    size={40}
                    // color="#EF6360"
                />
                <TextInput placeholder="Destino" style={{}} />
            </View>
        </View>
    );
};

export default InitialSetup;
