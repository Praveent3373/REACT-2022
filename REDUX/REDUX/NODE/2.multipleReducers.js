    // multiple reducers
    // 1. create seperate states and reducers
    // 2. combine reducers, as store accepts single reducer we need to combine multiple reducers into one.
    // redux provides method called combineReducers to combine multiple reducers into single reducer.
    
    const redux = require('redux');
    const bindActionCreators = redux.bindActionCreators;
    const combineReducers = redux.combineReducers;

    const CAKE_ORDERED = 'CAKE_ORDERED';
    const CAKE_RESTOCKED = 'CAKE_RESTOCKED'; 
    const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
    const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
    
    function orderCake(){
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
    function orderIcecream(qty = 1){
        return {
            type: ICECREAM_ORDERED,
            payload: qty
        }
    }
    function icecreamRestoked(qty = 1){
        return {
            type: ICECREAM_RESTOCKED,
            payload: qty
        }
    }
    
    
    const initialCakeState = {
        numOfCakes: 10,
    }
    const initialIceState = {
        numOfIcecreams: 20,
    }
    
    const cakeReducer = (state = initialCakeState, action) => {
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
    const iceReducer = (state = initialIceState, action) => {
        switch(action.type){
            case ICECREAM_ORDERED: return {
                ...state, numOfIcecreams: state.numOfIcecreams -1
            }
            case ICECREAM_RESTOCKED: return {
                ...state, numOfIcecreams: state.numOfIcecreams + action.payload
            }
            default: return state
        }
    }
    // combine multiple reducers
    const rootReducer = combineReducers({
        cake: cakeReducer,
        ice: iceReducer
    })
    const store = redux.createStore(rootReducer);
    console.log('initial State', store.getState());
    const unSubsribe = store.subscribe(() => console.log('Update State', store.getState()));
    
    const actions = bindActionCreators({orderCake, restockCake, orderIcecream, icecreamRestoked}, store.dispatch);
    actions.orderCake();
    actions.orderCake();
    actions.orderCake();
    actions.restockCake(3);
    actions.orderIcecream();
    actions.orderIcecream();
    actions.orderIcecream();
    actions.icecreamRestoked(3)
    unSubsribe();

    