import React, { createContext, useState } from 'react';

const OperationReportContext = createContext({});

// import { Container } from './styles';
export const OperationReportProvider = ({ children }) => {
    const [initialSetup, setInitialSetup] = useState({});
    const [garrisonCost, setGarrisonCost] = useState({});
    const [shippingCost, setShippingCost] = useState({});
    const [employeeCost, setEmployeeCost] = useState({});

    const [steps, setSteps] = useState([]);
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

    const handleGarrisonCost = () => {
        // console.log(garrisonCost);
        const value =
            (normalOpTime * office.normal +
                fiftyOpTime * office.fifty +
                hundredOpTime * office.hundred) *
            days *
            vehicle;
        // console.log('Guarnição: ' + value);
        return value;
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
        // auxiliar de operação logistica: Verificar se tem, se tiver: horas trabalhos * hora/salário;
    };

    const CalculateCost = () => {
        const value =
            handleGarrisonCost() +
            handleShippingCost() +
            handleStayCost() +
            handleMealCost() +
            handleTaxiCost();
        console.log('Parcial: ' + value);
        return value;
    };

    // const CalculateAllCost = () => {
    //     const aux = 0;
    //     const value = steps.map((item) => {
    //         console.log(item);
    //         item.value + aux;
    //     });
    //     console.log('Total: ' + value);
    //     return value;
    // };

    const handleSteps = (data) => {
        // console.log(data);
        const stepsData = {
            stepNumber: `${data.name}: ${data.value}`,
            garrison: handleGarrisonCost(),
            shipping: handleShippingCost(),
            stay: handleStayCost(),
            meal: handleMealCost(),
            taxi: handleTaxiCost(),
            value: CalculateCost(),
        };
        const aux = [...steps];
        aux.push(stepsData);
        console.log(aux);
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
