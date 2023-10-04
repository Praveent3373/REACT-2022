
import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);
    const increment = () => {
        if(count < 10){
            setCount(count + 1)
        }
    };
    const decrememt = () => setCount(count -1);
    return <>
        <h1>useState hook</h1>
        <br />
        <h3>The value of count is {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrememt}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
}

export default UseState;