import React, { createContext, useState } from 'react';

const StepsContext = createContext({});

// import { Container } from './styles';
export const StepsProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const GetTask = () => {
        const aux = tasks.find((item) => item.isDone === false);
        console.log('StepsContext');
        console.log(aux);
        return aux;
    };

    const CheckTasks = () => {
        const aux = tasks.find((item) => item.isDone === false);
        return aux ? true : false;
    };

    return (
        <StepsContext.Provider value={{ tasks, setTasks, GetTask, CheckTasks }}>
            {children}
        </StepsContext.Provider>
    );
};

export default StepsContext;
