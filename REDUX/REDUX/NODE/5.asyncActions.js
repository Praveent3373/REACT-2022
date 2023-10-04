const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}
const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED : return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCEEDED : return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILED : return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        // response.data is the users   
        const users = response.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))    
    }).catch(error => {
            // error.message is the error message
            dispatch(fetchUsersError(error.message))
        })
    }
}

const store = redux.createStore(reducer, applyMiddleWare(thunkMiddleware));
store.subscribe(()=> {
    console.log(store.getState());
})
store.dispatch(fetchUsers())

