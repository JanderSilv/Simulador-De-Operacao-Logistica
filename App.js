/***
 * App desenvolvido por @JanderSilv
 */

import 'react-native-gesture-handler';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';
import { StepsProvider } from './src/contexts/steps';
import { OperationReportProvider } from './src/contexts/operationReport';

export default function App() {
    return (
        <OperationReportProvider>
            <StepsProvider>
                <Routes />
            </StepsProvider>
        </OperationReportProvider>
    );
}
