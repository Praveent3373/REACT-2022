import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts =  () => async (dispatch, getState) => {
        const resp = await fakeStoreApi.get('./products');
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: resp.data})
}
export const fetchProduct =  (id) => async (dispatch, getState) => {
        const resp = await fakeStoreApi.get(`./products/${id}`);
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: resp.data})
}


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}
export const removeProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: products
    }
}


// without using middle ware
// Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
// once we dispatch action which is the fetch products then we go to the action
// that action will return plain javascript object having a type and a payload.
// still we are getting an error i.e because when we actually make async api call in your action creater you need to convert action creater from syncrhonous action creator to asynchronous action creater.
// an this conversion can be possible if we use a middleware and that is where we are going to use a redux thunk which is a redux middleware to make an async action crator.

// you are doing async task inside synchronouse action creater which is why we are getting error.
// so we need to convert synchronouse action cretor to asynchronouse action creater.
// so this can be done with the help of the middleware.
// so after using the middleware how our redux application will look like.