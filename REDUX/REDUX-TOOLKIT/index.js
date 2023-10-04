
const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceActions = require('./features/icecream/iceSlice').iceActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated', store.getState()))

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restacked(3));

// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.restacked(3));
store.dispatch(fetchUsers());
// unsubscribe();