
import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);
    const increment = () => {
        if(count < 10){
            setCount(count + 1)
        }
    };
    const decrememt = () => setCount(count -1);
    return <>
        <h1>useState hook</h1>
        <br />
        <h3>The value of count is {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrememt}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
}

export default UseState;


//Object Destructuring
// we can have alias in OD, i.e username as profileName
let user = {
    username: 'Praveen',
    age: 29,
    getName(){
        return 5
    }
}
let {username:profileName, age, getName} = user;
console.log(profileName, age, getName());

// Array Destructuring
// we can't have alias in AD

/* in function */
function useState(){
    let user2 = {
        username1: 'Praveen',
        age1: 29,
        getName1(){
            return 5
        }
    }
    return user2
}
let [username1, age1, getName1] = useState();
console.log(username1, age1, getName());

/*
let user2 = {
    username1: 'Praveen',
    age1: 29,
    getName1(){
        return 5
    }
}
let [username1, age1, getName1] = user2;
*/