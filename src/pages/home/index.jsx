import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import BrinksLogo from '../../assets/brinks-logo.png';

// import { Container } from './styles';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: Constants.statusBarHeight + 20, flex: 1 }}>
            <View
                style={{
                    marginTop: 40,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={BrinksLogo}
                    style={{
                        height: 60,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View
                style={{
                    marginTop: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 18 }}>
                    Simulador de Condições Operacionais
                </Text>
            </View>
            <View
                style={{
                    marginTop: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('InitialSetup')}
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 40,
                    }}
                >
                    <Text>Iniciar Simulação</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
