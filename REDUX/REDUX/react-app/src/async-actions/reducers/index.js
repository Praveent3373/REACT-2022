
import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";
export const productReducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
})