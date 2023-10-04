import { Component, useEffect, useState } from "react";

// const RangeCounterA = (props) => {
//     const {max, min} = props;
//     const [count, setCount] = useState(min);
//     const [hasEdit, setEdit] = useState(false);
//     useEffect(() => {
//         if(count !== min && !hasEdit){
//             setEdit(true);
//         }
//     },[count, hasEdit, min])
//     return (
//         <div className="rangeCounter">
//             <h4 className="rangeCounter_title">Functional Range Counter</h4>
//             <div className="rangeCounter_control">
//                 <button disabled={count <= min} onClick={() => setCount(count - 1)}>-</button>
//                 <span data-testid = 'counter-value' className='counter-value'>{count}</span>
//                 <button className="inc" disabled={count >= max} onClick={() => setCount(count + 1)}>+</button>
//             </div>
//             {
//                 (count >= max || count <= min ) && hasEdit && (
//                     <h5 className ="rangeCounter_alert">Range limit has Reached!</h5>
//                 )
//             }
//         </div>
//     )
// }

// export default RangeCounterA;

class RangeCounterB extends Component{
    constructor(props){
        super(props);
        const {min} = props;
        this.state ={
            count: min,
            hasEdit: false
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    componentDidUpdate(){
        if(!this.state.hasEdit){
            this.setState({hasEdit: !this.state.hasEdit})
        }
    }
    incrementCounter(){
        const {count} = this.state;
        const {max} = this.props;
        if(count === max){
            return
        }
        this.setState({count: count + 1})
    }
    decrementCounter(){
        const {count} = this.state;
        const {min} = this.props;
        if(count === min){
            return
        }
        this.setState({count: count - 1})
    }
    render(){
        const {max, min} = this.props;
        return (
            <div className="rangeCounter">
                <h4 className="rangeCounter_title">Functional Range Counter</h4>
                <div className="rangeCounter_control">
                    <button disabled={this.state.count <= min} onClick={this.decrementCounter}>-</button>
                    <span data-testid = 'counter-value' className='counter-value'>{this.state.count}</span>
                    <button className="inc" disabled={this.state.count >= max} onClick={this.incrementCounter}>+</button>
                </div>
                {
                    (this.state.count >= max || this.state.count <= min ) && this.state.hasEdit && (
                        <h5 className ="rangeCounter_alert">Range limit has Reached!</h5>
                    )
                }
            </div>
        )
    }
}

export default RangeCounterB;