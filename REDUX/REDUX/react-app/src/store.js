import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/reducers/CounterReducer";
import authReducer from "./dummy-authen/reducers/AuthReducer";
import iceReducer from "./mutiplereducers/reducers/IceReducer";
import cakeReducer from "./mutiplereducers/reducers/CakeReducer";
import { productReducers } from "./async-actions/reducers";

const reducers = combineReducers({
    counterReducer,
    authReducer,
    ice: iceReducer,
    cake: cakeReducer,
    products: productReducers
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;


// https://github.com/zalmoxisus/redux-devtools-extension