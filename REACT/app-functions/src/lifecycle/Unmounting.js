import React, { Component } from 'react'

export default class Unmounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }
    render() {
        return (
        <div>
            <h1>Unmounting</h1>
           {this.state.show ? <ChildClass/> : '' }
            <button onClick={() => this.setState({show: false})}>Remove child component</button>
        </div>
        )
    }
}

class ChildClass extends Component{
    componentWillUnmount(){
        console.log('component unmounted')
    }
    render(){
        return <h2>Child Component</h2>
    }
}
