import { useState } from "react";
const TestingEvents = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button data-testid="button-up" onClick={() => setCount(count + 1)}>increment</button>
            <button data-testid="button-down" onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}
export default TestingEvents;