
export const initialState = {
    count: 0
}
export function reducer(state = initialState, action){
    if(action.type === 'INC'){
        return {count: state.count + 1}
    }
    else if(action.type === 'DEC'){
        return {count: state.count - 1}
    }
    else{
        return state
    }

}