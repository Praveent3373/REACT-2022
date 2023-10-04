const inititialState = {
    count: 0
}
const counterReducer = (state = inititialState, action) => {
    switch(action.type){
        case 'INCREMENT': return {...state, count: state.count + 1};
        case 'DECREMENT': return {...state, count: state.count - 1};
        case 'RESET': return {...state, count: state.count = 0};
        default: return state;
    }
}

export default counterReducer;