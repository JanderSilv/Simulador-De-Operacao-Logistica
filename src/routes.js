import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';
import InitialSetup from './pages/initialSetup';
import ListSteps from './pages/ListSteps';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="InitialSetup"
                    component={InitialSetup}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ListSteps"
                    component={ListSteps}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
