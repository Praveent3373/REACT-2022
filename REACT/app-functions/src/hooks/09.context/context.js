import {createContext, useContext, useState} from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('praveen');

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const changeName = () => {
        setName(prevName => prevName = 'Praveen Kumar');
    }
    
    return <AppContext.Provider value={
        {
            count, name, increment, changeName
        }
    }> {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

