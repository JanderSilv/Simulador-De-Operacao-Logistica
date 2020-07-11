import React, { createContext, useState } from 'react';

import EmployeesData from '../../data/employees.json';

const OperationReportContext = createContext({});

// import { Container } from './styles';
export const OperationReportProvider = ({ children }) => {
    const [initialSetup, setInitialSetup] = useState({});
    const [garrisonCost, setGarrisonCost] = useState({});
    const [shippingCost, setShippingCost] = useState({});
    const [employeeCost, setEmployeeCost] = useState({});

    const [steps, setSteps] = useState([]);
    const [maintenance, setMaintenance] = useState(0);
    const [depreciation, setDepreciation] = useState(0);
    const [report, setReport] = useState([]);

    const { taxiPrice, hotelPrice, client, origin, destiny } = initialSetup;
    const {
        normalOpTime,
        fiftyOpTime,
        hundredOpTime,
        office,
        days,
        nights,
    } = garrisonCost;
    const { toll, vehicle, fuel } = shippingCost;
    const { monitoringAssistant, logisticOperation } = employeeCost;

    const handleTime = () => {
        const value =
            normalOpTime * office.normal +
            fiftyOpTime * office.fifty +
            hundredOpTime * office.hundred;
        // console.log(value);
        return value;
    };

    const handleGarrisonCost = () => {
        // Cálculo: (normal * custo normal + 50% * custo 50% + 100% * custo 100% )  * qnt.dia *qnt.carros
        const value = handleTime() * days * vehicle;
        // console.log('Guarnição: ' + value);
        return value;
    };

    const handleMaintenance = () => {
        // Custo de Manutenção do CF= ((hora da etapa 1+qnt.carros da etapa 1)+(hora da etapa 2+qnt.carros da etapa 2)+(hora da etapa n+qnt.carros da etapa n))*10,44
        // const maintenance = (handleTime() + vehicle)*(10.44/steps.length);
        const value = handleTime() + vehicle;
        const aux = value + maintenance;
        setMaintenance(aux);
    };

    const handleDepreciation = () => {
        // Custo de Depreciação do CF= ((hora da etapa 1+qnt.carros da etapa 1)+(hora da etapa 2+qnt.carros da etapa 2)+(hora da etapa n+qnt.carros da etapa n))*7,96
        // const depreciation = (handleTime() + vehicle)*(7.96/steps.length);
        const value = handleTime() + vehicle;
        const aux = value + depreciation;
        setDepreciation(aux);
    };

    const handleShippingCost = () => {
        // Cálculo: Valor total do custo * qnt.carros
        const value = (toll + fuel) * vehicle;
        // console.log('Frota: ' + value);
        return value;
    };

    const handleStayCost = () => {
        // Hospedagem: (diaria do hotel * qnt.carros * qnt.pernoite) * 2;
        const value = hotelPrice * vehicle * nights * 2;
        // console.log('Hospedagem: ' + value);
        return value;
    };

    const handleMealCost = () => {
        // Refeição: Qnt de carros * qnt.pernoite * 4 * 65
        const value = vehicle * nights * 4 * 65;
        // console.log('Refeição: ' + value);
        return value;
    };

    const handleTaxiCost = () => {
        // Táxi: qnt de carros * qnt.pernoite * (50*2)
        const value = taxiPrice * vehicle * nights * 100;
        // console.log('Taxi: ' + value);
        return value;
    };

    const handleEmployeesCost = () => {
        // assistente de monitoramento: Custo com guarnição retirado qnt.carros do cálculo * hora/salário funcionário
        const value =
            normalOpTime * EmployeesData[0].value * monitoringAssistant;
        // console.log('monitoringAssistant: ' + value);
        // auxiliar de operação logistica: Verificar se tem, se tiver: horas trabalhos * hora/salário;
        const value2 =
            normalOpTime * EmployeesData[1].value * logisticOperation;
        // console.log('logisticOperation: ' + value2);
        return value + value2;
    };

    const CalculateCost = () => {
        const value =
            handleGarrisonCost() +
            handleShippingCost() +
            handleStayCost() +
            handleMealCost() +
            handleTaxiCost() +
            handleEmployeesCost();
        // console.log('Parcial: ' + value);
        return value;
    };

    const handleSteps = (data) => {
        // console.log(data);
        const stepsData = {
            stepNumber: `${data.name}: ${data.value}`,
            garrison: handleGarrisonCost(),
            shipping: handleShippingCost(),
            stay: handleStayCost(),
            meal: handleMealCost(),
            taxi: handleTaxiCost(),
            employees: handleEmployeesCost(),
            value: CalculateCost(),
        };
        const aux = [...steps];
        aux.push(stepsData);
        // console.log(aux);
        setSteps(aux);
        return aux;
    };

    const GenerateReport = (data) => {
        const reportData = {
            client,
            origin: origin.name,
            destiny: destiny.name,
            steps: handleSteps(data),
        };
        // console.log(reportData);
        setReport(reportData);
    };

    return (
        <OperationReportContext.Provider
            value={{
                setInitialSetup,
                setGarrisonCost,
                setShippingCost,
                setEmployeeCost,
                CalculateCost,
                handleSteps,
                GenerateReport,
                report,
                setSteps,
            }}
        >
            {children}
        </OperationReportContext.Provider>
    );
};

export default OperationReportContext;
