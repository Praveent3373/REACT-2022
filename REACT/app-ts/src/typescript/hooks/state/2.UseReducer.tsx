import React, { useReducer } from 'react'

const UseReducer = () => {
    return (
        <>
            <h3>UseReducer</h3>
            <Counter/>
        </>
    )
}


// #1. Counter
// const initialState = {
//     count: 0
// }
// // state => state = initialState = {count: 0}
// type CounterState = {
//     count: number
// }
// // action => action.type is string & action.payload is number
// type CounterAction = {
//     type: string,
//     payload: number
// }
// const counterReducer = (state: CounterState, action:CounterAction) => {
//     switch(action.type){
//         case 'Increment': return {count: state.count + action.payload }
//         case 'Decrement': return {count: state.count + action.payload }
//         default: return state
//     }
// }
// const Counter = () => {
//     const [state, dispatch] = useReducer(counterReducer, initialState)
//     return <>
//         <h3>Counter</h3>
//         <h6>The value is {state.count}</h6>
//         <button onClick={() => dispatch({type: 'Increment', payload: 10})}>Increment</button>
//         <button onClick={() => dispatch({type: 'Decrement', payload: 5})}>Increment</button>
//     </>
// }


// #2. Strict Action Types

const initialState = { count: 0 }

type CounterState = {count: number} 

// TypeScript discriminated unions
type UpdateAction = {
    type: 'Increment' | 'Decrement'
    payload: number
}

type ResetAction = {
    type: 'Reset'
}

type CounterAction = UpdateAction | ResetAction

const counterReducer = (state: CounterState, action:CounterAction) => {
    switch(action.type){
        case 'Increment': return {count: state.count + action.payload }
        case 'Decrement': return {count: state.count + action.payload }
        case 'Reset': return initialState
        default: return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return <>
        <h3>Counter</h3>
        <h6>The value is {state.count}</h6>
        <button onClick={() => dispatch({type: 'Increment', payload: 10})}>Increment</button>
        <button onClick={() => dispatch({type: 'Decrement', payload: 5})}>Decrement</button>
        <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
    </>
}


export default UseReducer

// Notes

// useState is great for simple state values
// for complex state logic where the next state depends on the previos state useReducer is preferable.