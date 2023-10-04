import CounterFunction from "./Hoc"

const HoverCounter = ({count, increment}) => {
    return <>
        <h4 onMouseOver={increment}>The value is {count}</h4>
        <p>Hover on the text to update the value</p>
    </>
}

export default CounterFunction(HoverCounter);