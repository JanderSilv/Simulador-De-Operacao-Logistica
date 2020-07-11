import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';

import FowardButton from '../../components/ForwardButton';
import BrinksLogo from '../../assets/brinks-logo.png';

// import { Container } from './styles';

const Home = () => {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight + 20, flex: 1 }}>
            <View style={{ flex: 0.6 }}>
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
            </View>
            <FowardButton
                title="Iniciar Simulação"
                page="InitialSetup"
                style={{
                    width: '45%',
                    height: 40,
                    borderRadius: 10,
                }}
                labelStyle={{ fontSize: 16 }}
            />
        </View>
    );
};

export default Home;
