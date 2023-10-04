import axios from 'axios';
import React, { Component } from 'react'

export default class Mounting extends Component{
    render(){
        return <>
            <ChildComponent name="Naveen Kumar">Life cycle methods</ChildComponent>
            {/* <Fetchdata/> */}
            <FetchDataOnButton/>
        </>
    }
}
class ChildComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Ganapathi'
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('derived state from props')
        if(props.name !== state.name){
            // changes in props
            return {
                name: props.name
            }
        }
        return null; // no change to props
    }
    /* if props changes then after getDerivedStateFromProps method, state will look something like 
    {
        name: props.name
    }
    */
    componentDidMount(){
        console.log('Did mount')
    }
    render(){
        console.log('render method')
        return  <h1>My name is {this.state.name}</h1>
    }
}



// fetch data directly (DidMount)

class Fetchdata extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    getUsers = async ()  => {
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => this.setState({users: resp.data}))
    }
    componentDidMount(){
        this.getUsers();
    }
    render(){
        return <React.Fragment>
            <h1>Fetching the data</h1>
            <ul>
                {this.state.users.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </React.Fragment>
    }
}

// fetch data when button is cliked

class FetchDataOnButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    getData = async () => {
        try{
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({users: resp.data});
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        return <React.Fragment>
            <button onClick={this.getData}>Get Data from API</button>
            {this.state.users.length > 0 && (<ul>
                {
                    this.state.users.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>)}
            
        </React.Fragment>
    }
}


// getDerivedStateFromProps
// getDerivedStateFromProps(props, state) is a static method that is called just before render() method in both mounting
// and updating phase in React. It takes updated props and the current state as arguments. We have to return an object 
// to update state or null to indicate that nothing has changed.




const getUsers = async ()  => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(resp => resp.json())
    // .then(data => this.setState({users: data}))
    // .catch(e => console.log(e))
   
    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(resp => this.setState({users: resp.data}))

    // try {
    //     const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     this.setState({users: resp.data})
    // } catch (error) {
    //     console.log(error)
    // }
 
    // try{
    //     const data = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const resp = await data.json();
    //     this.setState({users: resp})

    // }
    // catch(error) {
    //     console.log(error)
    // }

}