import React, { Component } from 'react'

type Props = {
    message: string
}

type State = {
    count: number
}

class Counter extends Component<Props, State> {
state = {
    count: 0
}
handleClick = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
}
render() {
    return (
    <>
        {this.props.message} {this.state.count} <br />
        <button onClick={this.handleClick}>Increment</button>
    </>
    )
}
}

export default Counter