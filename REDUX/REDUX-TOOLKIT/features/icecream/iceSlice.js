const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

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
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIces--
        })
    }
})


module.exports = iceCreamSlice.reducer;
module.exports.iceActions = iceCreamSlice.actions