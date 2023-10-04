import { createContext, useContext, useState } from "react";


export const CounterContext = createContext();

const CounterProvider = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return(
        <CounterContext.Provider value={{count, increment, decrement}}>
            <Counter></Counter>
        </CounterContext.Provider>
    )
}

export const Counter = () => {
    const {count, increment, decrement} = useContext(CounterContext);
    return (
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button data-testid="button-up" onClick={increment}>increment </button>
            <button data-testid="button-down" onClick={decrement}>decrement</button>
        </div>
    )
}
export default CounterProvider;