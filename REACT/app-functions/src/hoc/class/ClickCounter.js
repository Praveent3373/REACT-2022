import { Component } from "react";
import CounterFunction from "./Hoc";

class ClickCounter extends Component{
    render(){
        const {count, increment} = this.props;
        return <>
            <h4>The value is {count}</h4>
            <p>Click on the button to update the value</p>
            <button onClick={increment}>Increment</button>
            <br />
            <br />
        </>
    }
}

export default CounterFunction(ClickCounter);