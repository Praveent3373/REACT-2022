import { Component } from "react";
import CounterFunction from "./Hoc";


class HoverCounter extends Component{
    render(){
        const {count, increment} = this.props;
        return <>
            <h4 onMouseOver={increment}>The value is {count}</h4>
            <p>Hover on heading to update the value</p>
        </>
    }
}

export default CounterFunction(HoverCounter);