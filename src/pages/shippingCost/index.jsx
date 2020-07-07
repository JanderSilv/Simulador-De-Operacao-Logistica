import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import FowardButton from '../../components/ForwardButton';
import { globalStyle } from '../../globalStyles';

const ShippingCost = ({ route }) => {
    const [data] = useState(route.params);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text
                    style={{ fontSize: 16 }}
                >{`${data.index}° Etapa: ${data.data}`}</Text>
                <Text style={{ marginTop: 20, alignSelf: 'center' }}>
                    Busque os dados no Qalp
                </Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'space-around' }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text>Custo total de pedágio</Text>
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
                    <Text>Custo total de Combustível</Text>
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
                    <Text>Quantidade Pernoite</Text>
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
            <FowardButton
                style={{ marginTop: 40 }}
                // action={submitSteps}
                page="EmployeeCost"
                params={data}
            />
        </View>
    );
};

export default ShippingCost;
