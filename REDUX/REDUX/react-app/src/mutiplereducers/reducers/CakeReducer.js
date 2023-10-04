
import React from 'react'

const initialState = {
    count: 20
}
export const cakeReducer = (state = initialState, action) => {
        switch(action.type){
            case 'Order_Cake' : return {...state, count: state.count - 1}
            case 'ReStock_Cakes' : return {...state, count: state.count + action.payload}
            default : return state;
        }
}

export default cakeReducer;