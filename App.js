import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { StepsProvider } from './src/contexts/steps';

export default function App() {
    return (
        <StepsProvider>
            <Routes />
        </StepsProvider>
    );
}
