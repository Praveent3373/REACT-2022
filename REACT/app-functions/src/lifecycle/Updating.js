
import React, { Component } from 'react'

export default class Updating extends Component {
    render(){
        return <React.Fragment>
            {/* <Didupdate/> */}
            {/* <SnapShot/> */}
            <ShouldUpdate/>
        </React.Fragment>
    }    
}

// component did update
class Didupdate extends Component{
    constructor(props){
        super(props)
        this.state = {
            company: 'CG',
            count: 0
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({company: 'Campgemini'})
        }, 2000);
    }
    componentDidUpdate(){
        document.getElementById('data').innerHTML = 'CG stands for ' + this.state.company
        console.log('component updated')
    }
    render() {
        return (
            <div>
                <h1>Updating</h1>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.setState({count: this.state.count + 1})}>update count</button>
                <h4>{this.state.company}</h4>
                <h6 id="data"></h6>
            </div>
        )
    }
}


// getSnapshotBeforeUpdate();
class SnapShot extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'NKA'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name: 'Naveen Kumar Adigopula'})
        }, 3000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('prev').innerHTML = 'Previous Name: ' + prevState.name;
        return prevState;
    }
    componentDidUpdate(){
        document.getElementById('new').innerHTML = 'Current Name: ' + this.state.name;
    }
    render(){
        return <>
            <div id="prev"></div>
            <div id="new"></div>
        </>
    }
}

// shouldComponentUpdate()
// stop the component from being rendering after 5 times
class ShouldUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    shouldComponentUpdate(prevProps, prevState){
        if(this.state.value < 5){
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        console.log('in render' + this.state.value);
        return <>
            <h4>Current value is {this.state.value}</h4>
            <button onClick={() => this.setState({value: this.state.value + 1})}>Update value</button>
        </>
    }
}
