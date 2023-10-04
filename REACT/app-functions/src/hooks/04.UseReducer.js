import { useReducer } from "react";

const initialState = {
    count: 0
}
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT' : return {
            ...state, count: state.count +1
        }
        case 'DECREMENT' : return {
            ...state, count: state.count -1
        }
        case 'RESET' : return {
            ...state, count: state.count = 0
        }
        default: return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {count} = state;
    return <>
        <h1>useReducer Hook</h1>
        <h2>The state value is {count}</h2>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT +</button>
        <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT -</button>
    </>
}

export default UseReducer;