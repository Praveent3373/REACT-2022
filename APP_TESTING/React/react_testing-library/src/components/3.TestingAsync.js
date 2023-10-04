import { useState } from "react";
const TestingAsyc = () => {
    const [count, setCount] = useState(0);
    const delayCount = () => {
        setTimeout(() => {
            setCount(count + 1)
        }, 500) //0.5s
    }
    return (
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button data-testid="button-up" onClick={delayCount}>increment </button>
            <button data-testid="button-down" onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}
export default TestingAsyc;