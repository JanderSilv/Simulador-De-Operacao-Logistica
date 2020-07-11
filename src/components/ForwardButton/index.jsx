import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const ForwardButton = (props) => {
    const {
        title,
        page,
        labelStyle,
        style,
        action,
        params,
        disabled,
        disabledStyle,
    } = props;
    const navigation = useNavigation();

    const handleOnPress = () => {
        action ? action() : null;
        if (page && params) {
            navigation.navigate(page, params);
        } else if (page) {
            navigation.navigate(page);
        } else {
            null;
        }
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
                        ? [
                              {
                                  height: 35,
                                  paddingVertical: 5,
                                  paddingHorizontal: 15,
                                  backgroundColor: 'gray',
                                  borderRadius: 40,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              },
                              disabledStyle,
                          ]
                        : [
                              {
                                  height: 35,
                                  paddingVertical: 5,
                                  paddingHorizontal: 15,
                                  backgroundColor: '#164894',
                                  borderRadius: 40,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              },
                              style,
                          ]
                }
            >
                <Text style={[{ color: 'white' }, labelStyle]}>
                    {title ? title : 'Avançar'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForwardButton;
