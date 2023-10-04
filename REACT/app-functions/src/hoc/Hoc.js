import { useState } from "react"

const CounterFunction = (WrappedCounter) => {
    function CounterFunction(){
        const [count, setCount] = useState(0);
        const increment = () => setCount(prevValue => prevValue + 1);
        return <>
            <WrappedCounter count = {count} increment = {increment} />
        </>
    }
    return CounterFunction;
}

export default CounterFunction;