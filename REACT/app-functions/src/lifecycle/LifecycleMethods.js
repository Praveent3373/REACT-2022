import { Component, Fragment } from "react";

export class Lifecycle extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
    }
    render(){
        return <Fragment>
            <h1>life cycle</h1>
            <Methods name = 'Life Cycle Methods' />
        </Fragment>
    }
}
class Methods extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'LCM',
            company: 'CG',
            count: 0,
            show: true
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        if(props.name !== state.name){
            return {name: props.name};
        }
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount")
        setTimeout(() => {
            this.setState({company: 'Capgemini'})
        }, 2000);
    }
    shouldComponentUpdate(prevProps, prevState){
        console.log(' shouldComponentUpdate');
        if(this.state.count < 3){
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        console.log('the previous count value is ' + prevState.count);
        return prevState;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
        console.log('the current values is ' + this.state.count)
    }
    render(){
        console.log('in render', this.state.count)
        return <div>
            <h1>{'Derived state from props ' +  this.state.name}</h1>    
            <h1>{'Mounted with side effects' + this.state.company}</h1>    
            <div className="counter">
                <h3>{'ShouldUpdate & DidUpdate ' + this.state.count}</h3>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment +</button>
            </div>
            {this.state.show && <div>
                <Unmount/>
                <button onClick={() => this.setState({show: false})}>Remove Component</button>
            </div>}
            
        </div>
    }
}

// componentWillUnmount
class Unmount extends Component{
    componentWillUnmount(){
        console.log('component removed (component will unmount)');
    }
    render(){
        return <h1>componentUnMount</h1>
    }
}