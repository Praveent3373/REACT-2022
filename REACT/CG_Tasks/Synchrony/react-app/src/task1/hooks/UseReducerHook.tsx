import { stat } from 'fs'
import React, { useReducer } from 'react'


const UseReducerHook = () => {
  return (
    <>
    <div>UseReducerHook</div>
    <Counter/>
    </>
  )
}

const initialState = {
    count: 0
}

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'Increment' | 'Decrement',
    payload: number
}
type ResetAction = {
    type: 'Reset'
}

type CounterAction = UpdateAction | ResetAction

const reducer = (state:CounterState, action:CounterAction) => {
    switch(action.type){
        case 'Increment': return {count: state.count + action.payload}
        case 'Decrement': return {count: state.count - action.payload}
        case 'Reset': return initialState
        default: return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <>
        <h2>Counter : {state.count}</h2>
        <button onClick={() => dispatch({type: 'Increment', payload: 10})}>Increment</button>
        <button onClick={() => dispatch({type: 'Decrement', payload: 5})}>Decrement</button>
        <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
    </>
}


export default UseReducerHook