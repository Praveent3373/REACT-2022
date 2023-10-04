import { useGlobalContext } from "./context";

function Counter() {
    const {name, count,increment, changeName} = useGlobalContext();
    return (
        <div className="Counter">
            <h1>useContext hook</h1>
            <h3>I am {name}</h3>
            <h3>The value is {count}</h3>
            <button onClick={increment}>Increment +</button>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default Counter;
