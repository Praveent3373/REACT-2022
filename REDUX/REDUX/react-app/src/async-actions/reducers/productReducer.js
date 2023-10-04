import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS : return {
            ...state, products: payload
        }
        case ActionTypes.FETCH_PRODUCTS : return {
            ...state, products: payload
        }
        default: return state
    }
}

export const selectProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT: return {
            ...state, ...payload
        }
        case ActionTypes.REMOVE_PRODUCT: return {}
        default: return state
    }
}