import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice'
import iceReducer from '../features/icecream/iceSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {  
        cake: cakeReducer,
        iceCream: iceReducer,
        user: userReducer
    },
})

export default store;
