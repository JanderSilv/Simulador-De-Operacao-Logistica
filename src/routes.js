import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';
import InitialSetup from './pages/initialSetup';
import ListSteps from './pages/listSteps';
import GarrisonCost from './pages/garrisonCost';
import ShippingCost from './pages/shippingCost';
import EmployeeCost from './pages/employeeCost';

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
                    options={{ title: 'Configurações Iniciais' }}
                />
                <AppStack.Screen
                    name="ListSteps"
                    component={ListSteps}
                    options={{ title: 'Listagem de Etapas' }}
                />
                <AppStack.Screen
                    name="GarrisonCost"
                    component={GarrisonCost}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ShippingCost"
                    component={ShippingCost}
                    options={{ title: 'Custo com Frota e Pernoite' }}
                />
                <AppStack.Screen
                    name="EmployeeCost"
                    component={EmployeeCost}
                    options={{ title: 'Custo com Mão de Obra' }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
