import Post from "../../models/postModel"
import { Action } from "../actions"
import ActionType from "../actions/action-types"

interface PostState {
    loading: boolean
    error: string | null
    data: Post[] | null
}

const inititialState = {
    loading: false,
    error: null,
    data: []
}

export const postReducer = (state:PostState = inititialState, action:Action):PostState => {
    switch(action.type){
        case ActionType.POST_REQUEST: return {
           loading: true, error: null, data: null
        }
        case ActionType.POST_SUCCESS: return {
            loading: false, error: null, data: action.payload
        }
        case ActionType.POST_FAIL: return {
            loading: false, error: action.payload, data: null
        }
        default: return state;
    }
}