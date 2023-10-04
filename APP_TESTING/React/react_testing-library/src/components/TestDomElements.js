import { useState } from "react";
const TestDomElements = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 data-testid="counter">The current value is {count}</h1>
            <button data-testid="button-up" onClick={() => setCount(count + 1)}>increment</button>
            <button disabled data-testid="button-down" onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}
export default TestDomElements;

