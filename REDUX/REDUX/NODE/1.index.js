const redux = require('redux');
const bindActionCreators = redux.bindActionCreators;

// 1. ACTION
// action types
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'; 

// action creaters are functions that returns object.
function orderCake(){
    // actin is a object with type property
    return{
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 1){
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// 2. REDUCER
const initialState = {
    numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED: return {
            ...state, numOfCakes: state.numOfCakes -1
        }
        case CAKE_RESTOCKED: return {
            ...state, numOfCakes: state.numOfCakes + action.payload
        }
        default: return state
    }
}

// REDUX STORE

const store = redux.createStore(reducer);
console.log('initial State', store.getState());
const unSubsribe = store.subscribe(() => console.log('Update State', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(2));

const actions = bindActionCreators({orderCake, restockCake}, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
unSubsribe();
