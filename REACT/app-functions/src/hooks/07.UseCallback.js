import React, { useCallback, useState } from "react";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const Increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    },[])
    return <>
        <h1>useCallback hook</h1>
        <h2>Count: {count}</h2>
        {/*Pass the handleClick function through props*/}
        <ChildComponent name="Praveen Kumar" handle = {Increment} />
    </>
}

const ChildComponent = React.memo((props) => {
    console.log('child component re-rendered')
    return <>
        <h1>Child component</h1>
        <h2>{props.name}</h2>
        <p>This component does not change, so it should not re-render</p>
        {/*Button that will change the state of its parent component*/}
        <button onClick={props.handle}>Increment +</button>
    </>
});

export default UseCallback;

// It is especially useful when passing callbacks to optimized child components. 
// Therefore, useCallback always works with React.memo.

// Every time the UseCallback state changes, a NEW Increment function is being created.
// That means that the handle prop of the ChildComponent is different every time we click the + button.
// That is the reason React.memo is not working; the handle prop is changing.
// We can fix the problem by using the useCallback hook to memoize the handleClick function.

// Notice that the array of dependencies is empty; this means that the function will be created only once.
// Therefore, the handle prop of the UseCallback will always be the same. 