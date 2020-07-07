import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const ForwardButton = (props) => {
    const { title, page, style, action, params, disabled } = props;
    const navigation = useNavigation();

    const handleOnPress = () => {
        params ? navigation.navigate(page, params) : navigation.navigate(page);
        action ? action() : null;
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={handleOnPress}
                disabled={disabled}
                style={
                    disabled
                        ? {
                              paddingVertical: 5,
                              paddingHorizontal: 15,
                              borderWidth: 1,
                              borderColor: 'gray',
                              backgroundColor: '#cccccc',
                              borderRadius: 40,
                              alignItems: 'center',
                              justifyContent: 'center',
                          }
                        : [
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
                          ]
                }
            >
                <Text>{title ? title : 'Avançar'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForwardButton;
