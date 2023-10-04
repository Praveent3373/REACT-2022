import React from 'react';

const CounterFunction = (WrappedComponent) => {
    class CounterFunction extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: 2
            }
        }
        increment = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        render(){
            return <WrappedComponent count = {this.state.count} increment = {this.increment}/>
        }
    }
    return CounterFunction
}

export default CounterFunction;