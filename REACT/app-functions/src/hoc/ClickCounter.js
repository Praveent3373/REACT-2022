import CounterFunction from "./Hoc"

const ClickCounter = ({count, increment}) => {
    return <>
        <h4>The value is {count}</h4>
        <p>Click on button to update the value</p>
        <button onClick={increment}>Increment</button>
    </>
}

export default CounterFunction(ClickCounter);