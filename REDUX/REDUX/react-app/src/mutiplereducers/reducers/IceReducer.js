
import React from 'react'

const initialState = {
    count: 10
}
const iceReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Order_IceCream' : return {...state, count: state.count -1};
        case 'Restack_IceCreams' : return {...state, count: state.count + action.payload};
        default: return state;
    }
}

export default iceReducer;