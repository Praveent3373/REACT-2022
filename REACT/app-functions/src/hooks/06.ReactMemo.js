import React, { useState } from "react";

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1)
    }
    return <>
        <h1>ReactMemo Example</h1>
        <h2>Count: {count}</h2>
        <button onClick={Increment}>Increment (+)</button>
        <ChildComponent name="Praveen Kumar"/>
    </>
}

const ChildComponent = React.memo((props) => {
    //This message is printed when the component renders
    console.log("ChildComponent rendered")
    return <>
        <h1>Child component</h1>
        <h2>{props.name}</h2>
        <p>This component does not change, so it should not render</p>
    </>
})

export default ReactMemo;

// https://medium.com/nerd-for-tech/boost-your-react-apps-with-react-memo-usecallback-and-usememo-52dfe9575ec6

// React.memo is a High Order Component (HOC), which is a function that takes a component and returns a new component.
// React.memo takes a function component and returns a memorized (optimized) component.

// React.memo compares the props passed to a component. If they are the same as last time, 
// React.memo will use the previous rendered result and skip the re-rendering process.
// Remember that React.memo only looks for props changes. That means that if your function component has
// a state (with useState hook), it will still re-render when the state changes.

