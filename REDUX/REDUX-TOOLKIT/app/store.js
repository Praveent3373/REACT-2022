const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceReducer = require('../features/icecream/iceSlice');
const userReducer = require('../features/user/userSlice')
const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {  
        cake: cakeReducer,
        iceCream: iceReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
module.exports = store
