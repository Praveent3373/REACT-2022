import { combineReducers } from "redux";
import store from "../store";
import { postReducer } from "./postReducer";


const reducers = combineReducers({
    posts: postReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch