import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const ForwardButton = (props) => {
    const { title, page, style } = props;
    const navigation = useNavigation();
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate(page)}
                style={[
                    style,
                    {
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                ]}
            >
                <Text>{title ? title : 'Avançar'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForwardButton;
