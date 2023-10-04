import {ordered as cakeOrdered} from '../cake/cakeSlice'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIces : 20
}

const iceCreamSlice = createSlice({
    name: 'ice cream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIces--
        },
        restacked: (state, action) => {
            state.numOfIces += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIces--
        })
    }
})


export default iceCreamSlice.reducer;
export const {ordered, restacked} = iceCreamSlice.actions